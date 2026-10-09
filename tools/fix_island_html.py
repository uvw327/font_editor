# 修复 index.html：把抓取时被水合 DOM 覆盖的 astro-island 还原成服务端原始形态
# 1) 补回 ssr="" 属性（Astro Vue 渲染器据此决定是否水合，缺失会直接 return）
# 2) 清空水合残留的静态 DOM（Vue 挂载时本就会清空容器，静态快照只会造成重复/陈旧内容）
# 3) 去掉水合后打上的 data-v-app 标记
import re, shutil, pathlib, sys

HTML = pathlib.Path(r'D:\workspace\download\spa_output\index.html')
BAK = pathlib.Path(r'C:\Users\matt\AppData\Local\Temp\opencode\backup')
BAK.mkdir(parents=True, exist_ok=True)
shutil.copy2(HTML, BAK / 'index.html.orig')

html = HTML.read_text(encoding='utf-8')
before = html

def fix_island(m):
    tag = m.group(1)
    if 'ssr=' not in tag:
        tag = tag.replace('client="only"', 'ssr="" client="only"')
    tag = re.sub(r'\s+data-v-app="[^"]*"', '', tag)
    return tag + '</astro-island>'

html, n = re.subn(r'(<astro-island\b[^>]*>).*?</astro-island>', fix_island, html, flags=re.S)
print("处理的 island 数量:", n)

# 校验
islands = re.findall(r'<astro-island\b[^>]*>', html)
for t in islands:
    print("  ", t[:200])
assert n == 2, n
assert all('ssr=""' in t for t in islands)
assert all('data-v-app' not in t for t in islands)

HTML.write_text(html, encoding='utf-8')
print("写入完成，大小:", HTML.stat().st_size, "(原:", len(before.encode('utf-8')), ")")
