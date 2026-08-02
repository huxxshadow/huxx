# 动画卡片：找图与入库流程

关于页「我的动画旅程」的卡片数据。游戏库（`gameCard.json` + `src/assets/gameCard/`）用的是同一套结构和同一条流程，只是目录不同。

## 涉及的文件

| 文件 | 作用 |
|---|---|
| `src/content/animeCard.json` | 卡片数据（唯一数据源） |
| `src/assets/animeCard/*.webp` | 封面图 |
| `src/content.config.ts` | schema，`cardCollection()` 由游戏／动画共用 |

## 加一条的三步

**1. 写数据** —— 在 `animeCard.json` 里追加，键顺序固定：

```json
{
  "id": "bloom-into-you",
  "order": 5,
  "title": { "en": "Bloom Into You", "zh": "终将成为你", "ja": "やがて君になる", "ko": "마침내 너에게" },
  "comment": { "en": "", "zh": "", "ja": "", "ko": "" },
  "image": "../assets/animeCard/Bloom Into You.webp",
  "favorite": false
}
```

- `id`：kebab-case，全局唯一
- `order`：**页面按 order 倒序渲染，数字越大越靠前**。新看的作品取当前最大值 +1
- `title`：四语都要填，缺哪个会回退到 `en`
- `image`：可以先不写。缺省时卡片渲染一个占位图标，构建不会失败
- `favorite`：`true` 的条目会额外出现在上方「最喜欢的作品」区。**一个 favorite 都没有时整个区块不渲染**

**2. 找封面** —— 见下一节

**3. 构建验证** —— `npm run build`，确认卡片出现且没有占位图标

## 找封面

优先 [MyAnimeList](https://myanimelist.net/)，缺图或分辨率太低再用[anime-planet](https://www.anime-planet.com/)。

### anime-planet

详情页 `https://www.anime-planet.com/anime/<slug>`，页面里搜 `cdn.anime-planet.com/anime/primary/<slug>-1-<宽>x<高>.jpg`，**把尺寸后缀去掉就是原图**：

```
.../primary/one-piece-1-190x260.jpg   ← 页面里的缩略图
.../primary/one-piece-1.jpg           ← 要下载的原图
```

坑：
- **别用 `og:image`**，那是剧照不是封面
- 带尺寸后缀的变体直接请求会 403，只有原图能下
- 需要带浏览器 UA

### MyAnimeList

- **Jikan API（`api.jikan.moe`）不稳**，经常整片 504，别依赖它
- **站内搜索的首条结果经常不是主条目**（搜 one piece 出剧场版 Z、搜 naruto 出疾风传），必须人工核对条目 ID
- 拿详情页的 `og:image`，**文件名后面补一个 `l` 得到大图**：
  ```
  .../images/anime/1244/138851.jpg    → .../images/anime/1244/138851l.jpg
  ```
- MAL 封面**最大就是 600px 高**，比这个还想要更大只能另找源

## 转 webp

统一裁成 2:3、转 webp。**源图小于 600×900 时不放大** —— 插值放大不会更清楚，只会让文件更大；卡片用的是 `object-cover`，尺寸不一致不影响显示。

```bash
node -e "
const sharp=require('sharp');
const IN='/path/to/raw.jpg', OUT='src/assets/animeCard/Bloom Into You.webp';
(async()=>{
  const m=await sharp(IN).metadata();
  let w=Math.min(m.width, Math.round(m.height*2/3)), h=Math.round(w*3/2);
  if(w>600){w=600;h=900;}
  await sharp(IN).resize(w,h,{fit:'cover',position:'attention'}).webp({quality:85}).toFile(OUT);
  console.log(m.width+'x'+m.height+' -> '+w+'x'+h);
})();
"
```

`sharp` 是 Astro 自带的依赖，不用额外装。`position:'attention'` 让裁切偏向画面主体而不是死板居中。

## 约定

- 文件名 = 英文标题原样（**允许空格**，跟 `gameCard/` 现有命名一致），扩展名 `.webp`
- 目标 600×900；源图不够就按源图能给出的最大 2:3 区域裁，不放大
- quality 85
- 动画封面放 `src/assets/animeCard/`，不要混进 `gameCard/`
