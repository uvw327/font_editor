# 修复后验证：
#  A. 正常流程：水合 -> 上传字体 -> 断外网保存导出 -> 校验 TTF
#  B. 兼容性检测失败场景：强制 N.value=false，按钮应仍可点并给出提示（原为禁用+无反应）
import json, pathlib
from playwright.sync_api import sync_playwright

URL = "http://localhost:8010/"
FONT = r"C:\Windows\Fonts\arial.ttf"
OUT = pathlib.Path(r'C:\Users\matt\AppData\Local\Temp\opencode\exported_fixed.ttf')
BAD_JS_MARKER = "(C.value = Y), (N.value = Y.isSupported);"

def only_local(route):
    route.continue_() if route.request.url.startswith("http://localhost:8010") else route.abort()

def report(tag, page):
    return page.evaluate(r"""() => {
      const island = [...document.querySelectorAll('astro-island')]
        .find(e => (e.getAttribute('component-url')||'').includes('index.42979250'));
      const btn = document.querySelector('.export-button');
      const hint = document.querySelector('.toolbar-hint');
      return {
        islandHasSSR: island ? island.hasAttribute('ssr') : null,
        vueMounted: island ? !!island.__vue_app__ : null,
        uploadZone: !!document.querySelector('.upload-zone'),
        toolbar: !!document.querySelector('.export-toolbar'),
        fontMeta: (document.querySelector('.meta-primary span')||{}).textContent || null,
        btn: btn ? {disabled: btn.disabled, text: btn.textContent.trim()} : null,
        hint: hint ? hint.textContent.trim() : null,
        compatNotice: !!document.querySelector('.browser-compatibility-notice'),
        notification: (document.querySelector('.notification')||{}).textContent?.trim() || null,
      };
    }""")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # ---------- A. 正常流程（断外网） ----------
    print("=" * 30, "A. 正常保存流程（外网已阻断）")
    ctx = browser.new_context(accept_downloads=True)
    page = ctx.new_page()
    logs = []
    page.on("console", lambda m: logs.append(f"[{m.type}] {m.text}"))
    page.on("pageerror", lambda e: logs.append(f"[pageerror] {e}"))
    page.on("download", lambda d: d.save_as(str(OUT)))
    page.route("**/*", only_local)
    page.goto(URL, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(4000)
    print("水合后:", json.dumps(report("A0", page), ensure_ascii=False))
    page.set_input_files("input[type=file]", FONT)
    page.wait_for_timeout(6000)
    s = report("A1", page)
    print("上传后:", json.dumps(s, ensure_ascii=False))
    ok = False
    if s["btn"] and not s["btn"]["disabled"]:
        try:
            with page.expect_download(timeout=180000) as dl:
                page.click(".export-button")
            dl.value.save_as(str(OUT))
            ok = True
            print("下载文件:", dl.value.suggested_filename)
        except Exception as e:
            print("下载失败:", str(e)[:300])
    if ok and OUT.exists():
        data = OUT.read_bytes()
        magic_ok = data[:4] in (b"\x00\x01\x00\x00", b"true", b"OTTO")
        print("导出", len(data), "字节, 魔数", repr(data[:4]), "合法字体:", magic_ok)
    fatal = [l for l in logs if l.startswith('[pageerror]') or '[error]' in l and 'ERR_FAILED' not in l and 'Failed to load resource' not in l]
    print("非网络类控制台问题:", fatal if fatal else "无")
    ctx.close()

    # ---------- B. 兼容性检测返回 false 的场景 ----------
    print("=" * 30, "B. 模拟兼容性检测失败（N.value=false）")
    ctx2 = browser.new_context(accept_downloads=True)
    page2 = ctx2.new_page()
    logs2 = []
    page2.on("pageerror", lambda e: logs2.append(f"[pageerror] {e}"))

    def patch_js(route):
        resp = route.fetch()
        body = resp.text()
        if BAD_JS_MARKER not in body:
            print("!! 未找到待替换代码")
        body = body.replace(BAD_JS_MARKER, "(C.value = Y), (N.value = !1);")
        route.fulfill(response=resp, body=body)

    page2.route("**/*", only_local)
    page2.route("**/index.42979250.js", patch_js)
    page2.goto(URL, wait_until="domcontentloaded", timeout=60000)
    page2.wait_for_timeout(4000)
    page2.set_input_files("input[type=file]", FONT)
    page2.wait_for_timeout(6000)
    s2 = report("B", page2)
    print("检测失败场景:", json.dumps(s2, ensure_ascii=False))
    if s2["btn"]:
        print("按钮是否可点:", not s2["btn"]["disabled"])
        if not s2["btn"]["disabled"]:
            page2.click(".export-button")
            page2.wait_for_timeout(1500)
            s3 = report("B2", page2)
            print("点击后提示:", json.dumps({"hint": s3["hint"], "notification": s3["notification"]}, ensure_ascii=False))
    print("pageerror:", logs2 if logs2 else "无")
    ctx2.close()
    browser.close()
