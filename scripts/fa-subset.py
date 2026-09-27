# 生成 Font Awesome 子集：扫描 src 里用到的 fa-* 类名，只保留这些图标的规则，并把字体裁到对应字形。
# 用法（仓库根目录）：pip install fonttools brotli && python scripts/fa-subset.py
import re, sys, subprocess, os

root = 'node_modules/@fortawesome/fontawesome-free/'
css = open(root + 'css/all.css', encoding='utf-8').read()
used = set(subprocess.run(['bash', '-c', "grep -rhoE 'fa-[a-z0-9]+(-[a-z0-9]+)*' src --exclude=fontawesome-subset.css | sort -u"], capture_output=True, text=True).stdout.split())
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
blocks = []; depth = 0; start = 0
for j, ch in enumerate(css):
    if ch == '{': depth += 1
    elif ch == '}':
        depth -= 1
        if depth == 0: blocks.append(css[start:j + 1].strip()); start = j + 1
icon_re = re.compile(r'([^{}]+)\{\s*--fa:\s*"(\x5c[0-9a-f]+)";?\s*\}', re.S)
out = []; cps = set(); icons = 0
for b in blocks:
    m = icon_re.fullmatch(b)
    if m:
        sels = [x.strip() for x in m.group(1).split(',')]
        keep = [x for x in sels if x.startswith('.fa-') and x[1:] in used]
        if keep:
            out.append(',\n'.join(keep) + ' {\n  --fa: "' + m.group(2) + '";\n}'); cps.add(int(m.group(2)[1:], 16)); icons += 1
        continue
    if b.startswith('@font-face'):
        if 'fa-regular' in b or 'v4compatibility' in b or 'Font Awesome 5' in b or 'FontAwesome' in b: continue
        b = b.replace('../webfonts/', '../fonts/fa/')
    if re.match(r'\.far\b|\.fa-regular\b', b): continue
    out.append(b)
head = '/* Font Awesome Free 7.0.1（图标 CC BY 4.0，字体 OFL 1.1，代码 MIT）：只保留站内用到的图标，字体也裁到这些字形。\n   用到新图标时要重新生成，否则那个图标会是空白 */\n'
open('src/styles/fontawesome-subset.css', 'w', encoding='utf-8').write(head + '\n'.join(out) + '\n')
print('icons', icons, 'codepoints', len(cps), 'used names', len(used))
missing = sorted(n for n in used if not re.search(r'\.' + re.escape(n) + r'\b', '\n'.join(out)))
print('names without a rule (utility words or typos):', missing)
u = ','.join('U+%04X' % c for c in sorted(cps))
for f in ['fa-solid-900', 'fa-brands-400']:
    subprocess.run(['pyftsubset', root + 'webfonts/' + f + '.woff2', '--unicodes=' + u, '--flavor=woff2', '--layout-features=*', '--output-file=src/fonts/fa/' + f + '.woff2'], check=True)
    print(f, os.path.getsize('src/fonts/fa/' + f + '.woff2'))
print('css bytes', os.path.getsize('src/styles/fontawesome-subset.css'))
