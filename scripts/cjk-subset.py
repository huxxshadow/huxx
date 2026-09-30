# 生成站内用字的 Noto Sans SC / JP / KR 子集（可变字重），并写出对应的 @font-face（src/styles/cjk-site-fonts.css）。
# 源字体是 Google Fonts 官方仓库里的可变字重 TTF（OFL 1.1），首次运行会下载到 node_modules/.cache/cjk-fonts。
#
# 用字从构建产物里取（dist/<语言>/**/*.html + dist/_astro/*.js），所以要先 build：
#   npm run build && python scripts/cjk-subset.py && npm run build
# - 每种语言只收它自己页面上的字（中文子集里不再带日文假名、只在日文里出现的汉字，以及源码注释里的字）
# - 每种语言切成两个文件：
#     noto-sans-*-site.woff2        首页 / 关于我 / 作品集等非项目页用到的字（Base.astro 里预加载）
#     noto-sans-*-site-extra.woff2  只在项目详情页出现的字
#   两个 @font-face 同名、按 unicode-range 分工，浏览器只在页面上真有那些字时才下载 extra。
# 加了新的中日韩文字后重新跑一遍；不跑也不会缺字（会落到 @fontsource 的分片上，只是多下几个文件）。
# 用法（仓库根目录）：pip install fonttools brotli
import glob, os, re, subprocess, urllib.request

CACHE = 'node_modules/.cache/cjk-fonts'
FONTS = {
    'sc': 'https://github.com/google/fonts/raw/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf',
    'jp': 'https://github.com/google/fonts/raw/main/ofl/notosansjp/NotoSansJP%5Bwght%5D.ttf',
    'kr': 'https://github.com/google/fonts/raw/main/ofl/notosanskr/NotoSansKR%5Bwght%5D.ttf',
}
LANG = {'sc': 'zh', 'jp': 'ja', 'kr': 'ko'}
FAMILY = {'sc': 'Noto Sans SC Site', 'jp': 'Noto Sans JP Site', 'kr': 'Noto Sans KR Site'}
HANGUL = lambda o: 0xAC00 <= o <= 0xD7AF or 0x1100 <= o <= 0x11FF or 0x3130 <= o <= 0x318F
# 各子集保留的字（只取该语言页面上出现的）：U+2000 以上、Roboto 没有的字符——
# 汉字、假名、中日韩标点，以及 ☆ ※ ≦ ▽ 这类 Roboto 缺的符号。
# SC / JP 不收谚文；KR 连页面上的汉字、假名也收（Noto Sans KR 本身带这些字形，韩文页就不必再下 SC）
from fontTools.ttLib import TTFont
ROBOTO = set(TTFont('src/fonts/roboto-v51-latin_latin-ext-regular.woff2').getBestCmap())
WANT = lambda o: o >= 0x2000 and o not in ROBOTO
PICK = {
    'sc': lambda o: WANT(o) and not HANGUL(o),
    'jp': lambda o: WANT(o) and not HANGUL(o),
    'kr': WANT,
}

if not os.path.isdir('dist'):
    raise SystemExit('dist/ 不存在：先 npm run build，再跑这个脚本，然后再 build 一次')

# 去掉注释（源码里的中文注释不该进子集）。行注释只认前面是空白或 ;{}(, 的 //，免得把 https:// 后面整行吞掉
COMMENTS = re.compile(r'<!--.*?-->|/\*.*?\*/|(?<=[\s;{}(,])//[^\n]*', re.S)
def chars_of(files):
    s = set()
    for f in files:
        s |= set(COMMENTS.sub('', open(f, encoding='utf-8', errors='ignore').read()))
    return s

js_chars = chars_of(glob.glob('dist/_astro/*.js'))

def to_ranges(codepoints):
    cps = sorted(codepoints)
    out, start = [], None
    for i, c in enumerate(cps):
        if start is None:
            start = c
        if i + 1 == len(cps) or cps[i + 1] != c + 1:
            out.append(f'U+{start:X}' if start == c else f'U+{start:X}-{c:X}')
            start = None
    return ', '.join(out)

def subset(src, codepoints, out):
    txt = os.path.join(CACHE, 'subset.txt')
    open(txt, 'w', encoding='utf-8').write(''.join(chr(c) for c in sorted(codepoints)))
    subprocess.run(['pyftsubset', src, '--text-file=' + txt, '--layout-features=*', '--flavor=woff2', '--output-file=' + out], check=True)
    return os.path.getsize(out) // 1024

css = ['/* 由 scripts/cjk-subset.py 生成，不要手改。每种语言两个文件，按 unicode-range 分工（见脚本开头的说明） */']
os.makedirs(CACHE, exist_ok=True)
for key, url in FONTS.items():
    src = os.path.join(CACHE, f'NotoSans{key.upper()}.ttf')
    if not os.path.exists(src):
        print('downloading', url)
        urllib.request.urlretrieve(url, src)

    pages = glob.glob(f'dist/{LANG[key]}/**/*.html', recursive=True)
    project_pages = [p for p in pages if os.sep + 'projects' + os.sep in p or '/projects/' in p]
    core_pages = [p for p in pages if p not in project_pages]
    pick = lambda chars: {ord(c) for c in chars if PICK[key](ord(c))}

    core = pick(chars_of(core_pages) | js_chars)
    extra = pick(chars_of(project_pages)) - core

    main_out = f'src/fonts/noto-sans-{key}-site.woff2'
    extra_out = f'src/fonts/noto-sans-{key}-site-extra.woff2'
    print(main_out, len(core), 'chars', subset(src, core, main_out), 'K')
    files = [(main_out, core)]
    if extra:
        print(extra_out, len(extra), 'chars', subset(src, extra, extra_out), 'K')
        files.append((extra_out, extra))
    elif os.path.exists(extra_out):
        os.remove(extra_out)

    # 主文件不写 unicode-range（和原来一样，页面上有中日韩字就下载）；extra 写在它后面并列出自己的字——
    # 同名字体的 unicode-range 重叠时，后声明的先被查（CSS Fonts 4），所以这些字由 extra 提供，
    # 而页面上没有这些字时 extra 根本不会被下载。只列 extra 的字，CSS 也短得多
    for path, cps in files:
        name = os.path.basename(path)
        rng = f'\n    unicode-range: {to_ranges(cps)};' if path == extra_out else ''
        css.append(f"""@font-face {{
    font-family: '{FAMILY[key]}';
    font-style: normal;
    font-display: swap;
    font-weight: 100 900;
    src: url('../fonts/{name}') format('woff2-variations'), url('../fonts/{name}') format('woff2');{rng}
}}""")

open('src/styles/cjk-site-fonts.css', 'w', encoding='utf-8', newline='\n').write('\n'.join(css) + '\n')
print('src/styles/cjk-site-fonts.css', os.path.getsize('src/styles/cjk-site-fonts.css') // 1024, 'K')

# 极速像素页的中日韩像素字体（Fusion Pixel 12px，OFL）也裁到站内用字（这个页面各语言共用，按源码取字）
EXTRA = 'U+0020-007E,U+3000-303F,U+FF00-FFEF'
chars = set()
for d, _, fs in os.walk('src'):
    for f in fs:
        if f.endswith(('.astro', '.ts', '.json', '.mdx', '.md')):
            chars |= set(open(os.path.join(d, f), encoding='utf-8', errors='ignore').read())
for key in ['sc', 'jp', 'kr']:
    src = f'node_modules/@fontsource/fusion-pixel-12px-proportional-{key}/files/fusion-pixel-12px-proportional-{key}-latin-400-normal.woff2'
    txt = os.path.join(CACHE, 'pixel.txt')
    open(txt, 'w', encoding='utf-8').write(''.join(sorted(ch for ch in chars if ord(ch) >= 0x20)))
    out = f'src/assets/projects/game-project-speed-pixel/skin/fusion-pixel-{key}.woff2'
    subprocess.run(['pyftsubset', src, '--text-file=' + txt, '--unicodes=' + EXTRA, '--layout-features=*', '--flavor=woff2', '--output-file=' + out], check=True)
    print(out, os.path.getsize(out) // 1024, 'K')
