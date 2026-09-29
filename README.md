# huxx · 个人作品集网站

Astro 6 静态站点（Tailwind CSS v4、MDX、Matter.js），四种语言：`zh` / `en` / `ja` / `ko`。

## 常用命令

| 命令 | 作用 |
| :-- | :-- |
| `npm install` | 安装依赖（Node >= 22.12.0） |
| `npm run dev` | 本地开发服务器 `localhost:4321` |
| `npm run dev -- --host` | 暴露到局域网（开了 TUN 模式的 VPN、localhost 打不开时用） |
| `npm run build` | 生产构建，输出到 `./dist/` |
| `npm run preview` | 本地预览生产构建（测性能要用这个，开发服务器不代表线上表现） |
| `npx astro check` | 类型检查 |

## 目录速览

| 路径 | 内容 |
| :-- | :-- |
| `src/pages/[lang]/` | 各语言页面：首页、作品集、关于我、项目详情 |
| `src/components/portfolio/` | 作品集页的五个部分（总览、游戏设计、游戏开发、AI 应用、技术美术、项目库） |
| `src/components/projects/*Skin.astro` | 项目详情页的专属皮肤（空王座、极速像素、鳗! 等），在 `projects.json` 的 `skin` 字段挂载 |
| `src/content/projects.json` | 项目列表 |
| `src/content/projectDetails/{lang}/{id}.mdx` | 项目详情正文 |
| `src/styles/` | 全局样式、动效（`motion.css`）、Font Awesome 子集 |
| `src/fonts/` | 自托管字体（Roboto、中日韩子集、Font Awesome 子集） |
| `scripts/` | 字体 / 图标子集的生成脚本（见下文） |

更详细的架构说明（i18n、主题色、动效系统等）见 `CLAUDE.md`。

## 手机适配

- 断点：手机 `< 640px`，平板 `640–1023px`，桌面 `>= 1024px`。
- 手机端是**专门的版式**，不是把桌面版缩小：
  - 作品集：总览去掉角色插画；游戏设计代表作整宽、次代表作两列；游戏开发吉祥物在上、卡片两列；AI 应用卡片两列、不显示 Transformer 结构图；技术美术吉祥物在上、两栏依次往下；项目库固定两列、不显示大小滑块。
  - 关于我：游戏库三列、最爱两列，不显示大小滑块。
- 平板保持桌面结构，整体缩小。
- 注意不要让内容把页面撑宽（横向滚动）：长网址放在行内代码里会自动断行；固定宽度的嵌入（如 itch.io 卡片）在手机上按比例缩小。

## 性能相关

### 字体

- **中日韩**：`src/fonts/noto-sans-{sc,jp,kr}-site.woff2` 是只含站内用字的 Noto Sans 子集（可变字重），每种语言一个文件，各页共用缓存，并在对应语言的页面里预加载（`Base.astro`）。
  子集里没有的字会落到后面的 `@fontsource-variable/noto-sans-*` 分片上，不会缺字，只是多下几个文件。
- **Roboto**：每个字重拆成两份——拉丁 + 希腊 + 常用符号子集（约 25K）和原来的完整文件（只在出现西里尔等其它字符时才下载），见 `global.css`。
- **语言菜单**里的「简体中文 / 日本語 / 한국어」用系统字体（`.lang-name`），英文页不会为这几个字去下载中日韩字体。
- **极速像素**页的像素字体 Fusion Pixel 也裁成了站内用字的子集（`src/assets/projects/game-project-speed-pixel/skin/fusion-pixel-*.woff2`）。

### 图标

Font Awesome 7.0.1 自托管，只保留站内用到的图标：`src/styles/fontawesome-subset.css` + `src/fonts/fa/`。

### 视频与图片

- 项目正文里的演示片段一律用 MP4（不要直接放 GIF，体积大十倍左右），写法：

  ```html
  <video class="clip" src={clip} poster={clipPoster} width="1280" height="720"
         muted loop playsinline preload="none" data-autoplay aria-label="…"></video>
  ```

  `data-autoplay` 的视频进入视口附近才开始下载并播放，离开就暂停（逻辑在 `Base.astro`）。**不要写 `autoplay`**，否则页面一打开就会下载所有视频。
- GIF 转 MP4 的参数：`ffmpeg -i in.gif -vf "scale='min(1280,iw)':-2,fps=30" -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart out.mp4`，再截第一帧做 webp 封面。
- **不要用 GIF 或动画 WebP 放实机录像**：它们逐帧独立压缩，同样画质比视频大好几倍。
- 列表里的图片用 `<Image>` 时给上 `widths` 和 `sizes`，手机会取小图。

## 需要手动重新生成的东西

两个脚本都依赖 fonttools：

```sh
pip install fonttools brotli
```

| 什么时候 | 运行 | 不运行会怎样 |
| :-- | :-- | :-- |
| 用到了**新的 Font Awesome 图标**（新的 `fa-xxx` 类名） | `python scripts/fa-subset.py` | 新图标显示为空白 |
| 加了较多**新的中日韩文字**（新项目、新页面） | `python scripts/cjk-subset.py` | 不缺字，但新字会额外下载字体分片，页面变慢 |

`cjk-subset.py` 首次运行会从 Google Fonts 官方仓库下载 Noto Sans SC / JP / KR 的可变字重原文件（共约 45MB）到 `node_modules/.cache/cjk-fonts/`，之后复用缓存。它同时会重新生成极速像素页的像素字体子集。

## 字体与图标许可

- Noto Sans SC / JP / KR、Roboto、Fusion Pixel：SIL Open Font License 1.1
- Font Awesome Free：图标 CC BY 4.0，字体 OFL 1.1，代码 MIT
- 极速像素页标题用的 Awesome 9 字体来自游戏项目本身，公开使用前需确认授权
