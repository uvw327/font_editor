# 跨浏览器回归：水合 -> 上传 -> 保存导出
import json, pathlib, sys
from playwright.sync_api import sync_playwright

URL = "http://localhost:8010/"
FONT = r"C:\Windows\Fonts\arial.ttf"
OUT_DIR = pathlib.Path(r'C:\Users\matt\AppData\Local\Temp\opencode')

def only_local(route):
    route.continue_() if route.request.url.startswith("http://localhost:8010") else route.abort()

with sync_playwright() as p:
    for name in ("chromium", "firefox", "webkit"):
        print("=" * 25, name)
        out = OUT_DIR / f'export_{name}.ttf'
        try:
            browser = getattr(p, name).launch(headless=True)
        except Exception as e:
            print("启动失败:", str(e)[:200]); continue
        ctx = browser.new_context(accept_downloads=True)
        page = ctx.new_page()
        errs = []
        page.on("pageerror", lambda e: errs.append(str(e)))
        page.on("download", lambda d: d.save_as(str(out)))
        try:
            page.route("**/*", only_local)
            page.goto(URL, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(4000)
            mounted = page.evaluate("() => !!document.querySelector('.upload-zone')")
            page.set_input_files("input[type=file]", FONT)
            page.wait_for_timeout(7000)
            st = page.evaluate(r"""() => {
              const b = document.querySelector('.export-button');
              return {btn: b ? {disabled: b.disabled, text: b.textContent.trim()} : null,
                      toolbar: !!document.querySelector('.export-toolbar'),
                      glyphs: document.querySelectorAll('.glyph-item, [class*=glyph] button').length};
            }""")
            print("水合:", mounted, " 上传后:", json.dumps(st, ensure_ascii=False))
            if st["btn"] and not st["btn"]["disabled"]:
                with page.expect_download(timeout=180000) as dl:
                    page.click(".export-button")
                dl.value.save_as(str(out))
                data = out.read_bytes()
                print("导出:", dl.value.suggested_filename, len(data),
                      "合法字体:", data[:4] in (b"\x00\x01\x00\x00", b"true", b"OTTO"))
            else:
                print("按钮不可点或不存在")
            print("pageerror:", errs if errs else "无")
        except Exception as e:
            print("失败:", str(e)[:300])
        ctx.close(); browser.close()
