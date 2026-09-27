# 生成站内用字的 Noto Sans SC / JP / KR 子集（可变字重），输出到 src/fonts/noto-sans-*-site.woff2。
# 源字体是 Google Fonts 官方仓库里的可变字重 TTF（OFL 1.1），首次运行会下载到 node_modules/.cache/cjk-fonts。
# 加了新的中日韩文字后重新跑一遍；不跑也不会缺字（会落到 @fontsource 的分片上，只是多下几个文件）。
# 用法（仓库根目录）：pip install fonttools brotli && python scripts/cjk-subset.py
import os, re, subprocess, urllib.request

CACHE = 'node_modules/.cache/cjk-fonts'
FONTS = {
    'sc': 'https://github.com/google/fonts/raw/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf',
    'jp': 'https://github.com/google/fonts/raw/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf',
    'kr': 'https://github.com/google/fonts/raw/main/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf',
}
# 各子集保留的字：SC / JP 取站内所有汉字、假名和全角符号，KR 取谚文和全角符号（韩文页里的汉字交给 SC 兜底）
PICK = {
    'sc': lambda o: o >= 0x2E80 and not (0xAC00 <= o <= 0xD7AF or 0x1100 <= o <= 0x11FF or 0x3130 <= o <= 0x318F),
    'jp': lambda o: o >= 0x2E80 and not (0xAC00 <= o <= 0xD7AF or 0x1100 <= o <= 0x11FF or 0x3130 <= o <= 0x318F),
    'kr': lambda o: 0xAC00 <= o <= 0xD7AF or 0x1100 <= o <= 0x11FF or 0x3130 <= o <= 0x318F or 0x3000 <= o <= 0x303F or 0xFF00 <= o <= 0xFFEF,
}
EXTRA = 'U+0020-007E,U+3000-303F,U+FF00-FFEF'

chars = set()
for d, _, fs in os.walk('src'):
    for f in fs:
        if f.endswith(('.astro', '.ts', '.json', '.mdx', '.md')):
            chars |= set(open(os.path.join(d, f), encoding='utf-8', errors='ignore').read())

os.makedirs(CACHE, exist_ok=True)
for key, url in FONTS.items():
    src = os.path.join(CACHE, f'NotoSans{key.upper()}.ttf')
    if not os.path.exists(src):
        print('downloading', url)
        urllib.request.urlretrieve(url, src)
    text = ''.join(sorted(ch for ch in chars if PICK[key](ord(ch))))
    txt = os.path.join(CACHE, f'{key}.txt')
    open(txt, 'w', encoding='utf-8').write(text)
    out = f'src/fonts/noto-sans-{key}-site.woff2'
    subprocess.run(['pyftsubset', src, '--text-file=' + txt, '--unicodes=' + EXTRA, '--layout-features=*', '--flavor=woff2', '--output-file=' + out], check=True)
    print(out, len(text), 'chars', os.path.getsize(out) // 1024, 'K')

# 极速像素页的中日韩像素字体（Fusion Pixel 12px，OFL）也裁到站内用字
for key in ['sc', 'jp', 'kr']:
    src = f'node_modules/@fontsource/fusion-pixel-12px-proportional-{key}/files/fusion-pixel-12px-proportional-{key}-latin-400-normal.woff2'
    txt = os.path.join(CACHE, 'pixel.txt')
    open(txt, 'w', encoding='utf-8').write(''.join(sorted(ch for ch in chars if ord(ch) >= 0x20)))
    out = f'src/assets/projects/game-project-speed-pixel/skin/fusion-pixel-{key}.woff2'
    subprocess.run(['pyftsubset', src, '--text-file=' + txt, '--unicodes=' + EXTRA, '--layout-features=*', '--flavor=woff2', '--output-file=' + out], check=True)
    print(out, os.path.getsize(out) // 1024, 'K')
