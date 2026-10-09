from playwright.sync_api import sync_playwright
import os, re, hashlib, urllib.parse

# ====================== 配置区 ======================
TARGET_URL   = "https://www.ai.zitijia.com/font_editor"
CHROME_EXE   = r"D:\tools\portable\chromium\chrome.exe"
OUTPUT       = r"D:\workspace\download\spa_output"

GOTO_TIMEOUT         = 60000    # 导航超时
NETWORK_IDLE_TIMEOUT = 30000    # networkidle 最长等待
POST_LOAD_WAIT       = 3000     # 空闲后再等一会儿
MANUAL_WAIT          = 30       # ⭐ 留给你手动操作的时间（秒）。设 0 则跳过
# ====================================================

os.makedirs(OUTPUT, exist_ok=True)
asset_map   = {}    # 完整URL -> 相对 OUTPUT 的路径
saved_urls  = set() # 已保存 URL，去重


def safe_segment(s: str) -> str:
    return "".join(c if (c.isalnum() or c in "._-@") else "_" for c in s) or "_"


def local_path_for(url: str) -> str:
    p = urllib.parse.urlparse(url)
    path = p.path.lstrip("/") or "_root"
    if p.query:
        base, ext = os.path.splitext(path)
        path = f"{base}__{hashlib.md5(p.query.encode()).hexdigest()[:6]}{ext}"
    parts = [safe_segment(s) for s in path.split("/")]
    return "/".join(parts)


def save_asset(url: str, body: bytes):
    if url in saved_urls:
        return
    saved_urls.add(url)
    rel = local_path_for(url)
    fs = os.path.join(OUTPUT, rel.replace("/", os.sep))
    os.makedirs(os.path.dirname(fs), exist_ok=True)
    try:
        with open(fs, "wb") as f:
            f.write(body)
    except Exception as e:
        print(f"❌ 写入失败 {rel}: {e}")
        return
    asset_map[url] = rel
    print(f"✅ [{len(body):>8}B] {url[:110]}  ->  {rel}")


# ---------------- 1. 抓取（关键改动：监听 response 读 body） ----------------
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_EXE, headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.set_default_timeout(GOTO_TIMEOUT)

    # ---- 核心：拦截所有响应并读取 body（覆盖 XHR / fetch / Worker / Wasm 等） ----
    def on_response(resp):
        try:
            req = resp.request
            # 跳过主文档（HTML 后面单独处理）
            if req.resource_type == "document":
                return
            # 跳过 Preflight / 重定向 / 错误
            if resp.status >= 400 or resp.status in (204, 304):
                return
            url = resp.url
            if not url.startswith(("http://", "https://")):
                return
            # 跳过 WebSocket 升级
            if req.resource_type == "websocket":
                return
            body = resp.body()
            if body:
                save_asset(url, body)
        except Exception:
            # 某些响应无法读取 body（比如被 CORS 拦截、被 abort）静默跳过
            pass

    page.on("response", on_response)

    # ---- 捕获 Web Worker 脚本 ----
    def on_worker(worker):
        print(f"👷 检测到 Worker: {worker.url}")
    page.on("worker", on_worker)

    print(f"打开页面 {TARGET_URL}")
    try:
        page.goto(TARGET_URL, wait_until="domcontentloaded", timeout=GOTO_TIMEOUT)
    except Exception as e:
        print(f"⚠️ 导航异常（继续抓已加载内容）: {e}")

    # ---- 等待网络空闲，让首屏 & 懒加载完成 ----
    print("⏳ 等待网络空闲 ...")
    try:
        page.wait_for_load_state("networkidle", timeout=NETWORK_IDLE_TIMEOUT)
    except Exception:
        print("⚠️ networkidle 超时，继续")
    page.wait_for_timeout(POST_LOAD_WAIT)

    # ---- 自动交互：滚动页面触发懒加载 ----
    print("🖱️  自动滚动页面触发懒加载 ...")
    try:
        page.evaluate("""() => new Promise(resolve => {
            let y = 0;
            const step = () => {
                y += 500;
                window.scrollTo(0, y);
                if (y < document.body.scrollHeight) setTimeout(step, 100);
                else { window.scrollTo(0, 0); resolve(); }
            };
            step();
        })""")
        page.wait_for_timeout(1500)
    except Exception as e:
        print(f"⚠️ 滚动失败: {e}")

    # ---- ⭐ 手动交互窗口：在这里你可以亲自点「查看字体 / 上传字体」等按钮 ----
    if MANUAL_WAIT > 0:
        print(f"\n⏸️  给你 {MANUAL_WAIT} 秒手动操作时间：")
        print("    请在这个浏览器窗口里，把字体编辑器的常用功能都点一遍")
        print("    （查看字体、上传字体、切换字形、导出等），把动态资源都触发出来")
        print("    倒计时结束后会自动关闭浏览器并生成离线包\n")
        page.wait_for_timeout(MANUAL_WAIT * 1000)
        # 手动操作后可能还有请求，再等一会儿
        try:
            page.wait_for_load_state("networkidle", timeout=15000)
        except Exception:
            pass

    html_raw = page.content()
    page.wait_for_timeout(1000)  # 最后再给 response 回调一点时间
    browser.close()

print(f"\n共保存 {len(asset_map)} 个资源")


# ---------------- 3. 重写 CSS 里的 url() ----------------
def rewrite_css(css_text: str, css_url: str, css_rel: str) -> str:
    css_dir = os.path.dirname(css_rel)

    def repl(m):
        raw = m.group(1).strip()
        quote = ""
        if raw and raw[0] in "\"'":
            quote = raw[0]
            raw = raw[1:].strip()
        if raw and raw.endswith(quote) and len(raw) > len(quote):
            raw = raw[:-len(quote)].strip()

        if not raw or raw.startswith(("data:", "http:", "https:", "//", "#")):
            return m.group(0)

        abs_url = urllib.parse.urljoin(css_url, raw)
        target_rel = asset_map.get(abs_url) or asset_map.get(abs_url.split("?")[0])
        if not target_rel:
            return m.group(0)

        rel_to = target_rel if not css_dir else \
            os.path.relpath(target_rel, css_dir).replace(os.sep, "/")
        return f"url({rel_to})"

    return re.sub(r"url\(\s*([^)]+?)\s*\)", repl, css_text, flags=re.IGNORECASE)


for url, rel in list(asset_map.items()):
    if not url.lower().split("?")[0].endswith(".css"):
        continue
    fs = os.path.join(OUTPUT, rel.replace("/", os.sep))
    try:
        with open(fs, "r", encoding="utf-8", errors="ignore") as f:
            css = f.read()
        new_css = rewrite_css(css, url, rel)
        if new_css != css:
            with open(fs, "w", encoding="utf-8") as f:
                f.write(new_css)
            print(f"🔧 重写 CSS: {rel}")
    except Exception as e:
        print(f"⚠️ CSS 重写失败 {url}: {e}")


# ---------------- 4. 重写 JS 里的绝对 import（含 .wasm / .json 等） ----------------
ASSET_EXT = r"(js|mjs|css|json|woff2?|ttf|otf|eot|png|jpe?g|gif|webp|svg|wasm|map|bin)"

for url, rel in list(asset_map.items()):
    if not url.lower().split("?")[0].endswith((".js", ".mjs")):
        continue
    fs = os.path.join(OUTPUT, rel.replace("/", os.sep))
    js_dir = os.path.dirname(rel)
    try:
        with open(fs, "r", encoding="utf-8", errors="ignore") as f:
            js = f.read()

        original = js

        def repl_abs(m):
            quote, path = m.group(1), m.group(2)
            if not re.match(rf"^/[A-Za-z0-9_\-./]+\.{ASSET_EXT}(\?[^\"']*)?$", path):
                return m.group(0)
            base = path.split("?")[0].lstrip("/")
            target_rel = asset_map.get(urllib.parse.urljoin(url, path)) \
                or asset_map.get(urllib.parse.urljoin(url, base))
            if not target_rel:
                target_rel = base
            rel_to = os.path.relpath(target_rel, js_dir).replace(os.sep, "/")
            if not rel_to.startswith("."):
                rel_to = "./" + rel_to
            return f"{quote}{rel_to}{quote}"

        js = re.sub(r'(["\'])(/[^"\'\s]+)\1', repl_abs, js)

        # 额外：把 new Worker("/xxx.js") / importScripts 的绝对路径也换了
        def repl_worker(m):
            quote, path = m.group(1), m.group(2)
            if not re.match(rf"^/[A-Za-z0-9_\-./]+\.{ASSET_EXT}(\?[^\"']*)?$", path):
                return m.group(0)
            base = path.split("?")[0].lstrip("/")
            target_rel = asset_map.get(urllib.parse.urljoin(url, path)) \
                or asset_map.get(urllib.parse.urljoin(url, base)) or base
            rel_to = os.path.relpath(target_rel, js_dir).replace(os.sep, "/")
            if not rel_to.startswith("."):
                rel_to = "./" + rel_to
            return f"{quote}{rel_to}{quote}"

        js = re.sub(r'(?<=new Worker\()(["\'])(/[^"\']+)\1', repl_worker, js)

        if js != original:
            with open(fs, "w", encoding="utf-8") as f:
                f.write(js)
            print(f"🔧 重写 JS: {rel}")
    except Exception as e:
        print(f"⚠️ JS 重写失败 {url}: {e}")


# ---------------- 5. 重写 HTML ----------------
rules = []
for src_url, rel in asset_map.items():
    parsed = urllib.parse.urlparse(src_url)
    local = "./" + rel

    rules.append((src_url, local))
    if parsed.query:
        rules.append((f"//{parsed.netloc}{parsed.path}?{parsed.query}", local))
    rules.append((f"//{parsed.netloc}{parsed.path}", local))

    if parsed.path and len(parsed.path) > 1:
        if parsed.query:
            rules.append((f'"{parsed.path}?{parsed.query}"', f'"{local}"'))
            rules.append((f"'{parsed.path}?{parsed.query}'", f"'{local}'"))
        rules.append((f'"{parsed.path}"', f'"{local}"'))
        rules.append((f"'{parsed.path}'", f"'{local}'"))
        rules.append((f"url({parsed.path})", f"url({local})"))
        rules.append((f'url("{parsed.path}")', f'url("{local}")'))
        rules.append((f"url('{parsed.path}')", f"url('{local}')"))

rules.sort(key=lambda x: -len(x[0]))

html_out = html_raw
for old, new in rules:
    if old != new:
        html_out = html_out.replace(old, new)

with open(os.path.join(OUTPUT, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_out)

print(f"\n🎉 完成！离线页面：{os.path.join(OUTPUT, 'index.html')}")
print("建议用本地 http server 打开（不要双击 file://）：")
print(f'  cd "{OUTPUT}" && python -m http.server 8000')
print("  然后浏览器访问 http://127.0.0.1:8000/")