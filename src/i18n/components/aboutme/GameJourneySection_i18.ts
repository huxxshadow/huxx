// src/i18n/components/aboutme/GameJourneySection_i18.ts

import type { Multilingual } from "@/i18n";

// ============================================================
//  Section Headers & Labels
// ============================================================
// 大标题被拆成「前缀 + 可点击的词 + 后缀」，点那个词就在游戏／动画两条旅程之间切换。
// 前后缀里的空格是给英文留的，中日韩本来就不需要词间空格。
export const journeyTitleParts = {
    prefix: {
        en: "My ",
        zh: "我的",
        ja: "",
        ko: "",
    } as Multilingual,

    suffix: {
        en: " Journey",
        zh: "旅程",
        ja: "の旅路",
        ko: " 여정",
    } as Multilingual,

    gameWord: {
        en: "Game",
        zh: "游戏",
        ja: "ゲーム",
        ko: "게임",
    } as Multilingual,

    animeWord: {
        en: "Anime",
        zh: "动画",
        ja: "アニメ",
        ko: "애니메이션",
    } as Multilingual,

    toggleHint: {
        en: "Click to switch between my game and anime journey",
        zh: "点击可在游戏旅程与动画旅程之间切换",
        ja: "クリックでゲームとアニメの旅路を切り替えられます",
        ko: "클릭하면 게임 여정과 애니메이션 여정을 전환할 수 있습니다",
    } as Multilingual,
};

// 作品库的类型标签：key 与 gameCard.json / animeCard.json 里的 tags 对应
export const journeyTagLabels = {
    all: {
        en: "All",
        zh: "全部",
        ja: "すべて",
        ko: "전체",
    } as Multilingual,

    filterGroup: {
        en: "Filter by genre",
        zh: "按类型筛选",
        ja: "ジャンルで絞り込む",
        ko: "장르로 필터링",
    } as Multilingual,

    game: {
        crpg: { en: "CRPG", zh: "CRPG", ja: "CRPG", ko: "CRPG" },
        rpg: { en: "RPG", zh: "角色扮演", ja: "RPG", ko: "RPG" },
        action: { en: "Action", zh: "动作", ja: "アクション", ko: "액션" },
        shooter: { en: "Shooter", zh: "射击", ja: "シューター", ko: "슈팅" },
        strategy: { en: "Strategy", zh: "策略", ja: "ストラテジー", ko: "전략" },
        tactics: { en: "Tactics", zh: "战棋战术", ja: "タクティクス", ko: "전술" },
        sim: { en: "Management", zh: "模拟经营", ja: "経営シミュレーション", ko: "경영 시뮬레이션" },
        sandbox: { en: "Sandbox & Survival", zh: "沙盒生存", ja: "サンドボックス", ko: "샌드박스·생존" },
        openworld: { en: "Open World", zh: "开放世界", ja: "オープンワールド", ko: "오픈 월드" },
        metroidvania: { en: "Metroidvania", zh: "银河恶魔城", ja: "メトロイドヴァニア", ko: "메트로배니아" },
        platformer: { en: "Platformer", zh: "平台跳跃", ja: "プラットフォーマー", ko: "플랫포머" },
        roguelike: { en: "Roguelike", zh: "Roguelike", ja: "ローグライク", ko: "로그라이크" },
        card: { en: "Card", zh: "卡牌", ja: "カード", ko: "카드" },
        adventure: { en: "Adventure & Puzzle", zh: "冒险解谜", ja: "アドベンチャー・パズル", ko: "어드벤처·퍼즐" },
        vn: { en: "Visual Novel", zh: "视觉小说", ja: "ノベルゲーム", ko: "비주얼 노벨" },
        multiplayer: { en: "Multiplayer", zh: "多人联机", ja: "マルチプレイ", ko: "멀티플레이" },
        casual: { en: "Casual & Idle", zh: "休闲放置", ja: "カジュアル・放置", ko: "캐주얼·방치형" },
        racing: { en: "Racing", zh: "竞速", ja: "レース", ko: "레이싱" },
    } as Record<string, Multilingual>,

    anime: {
        daily: { en: "Slice of Life", zh: "日常", ja: "日常", ko: "일상" },
        comedy: { en: "Comedy", zh: "喜剧", ja: "コメディ", ko: "코미디" },
        romance: { en: "Romance", zh: "恋爱", ja: "恋愛", ko: "로맨스" },
        fantasy: { en: "Fantasy", zh: "奇幻", ja: "ファンタジー", ko: "판타지" },
        isekai: { en: "Isekai", zh: "异世界", ja: "異世界", ko: "이세계" },
        action: { en: "Action", zh: "战斗", ja: "バトル", ko: "액션" },
        scifi: { en: "Sci-Fi", zh: "科幻", ja: "SF", ko: "SF" },
        mystery: { en: "Mystery", zh: "悬疑", ja: "ミステリー", ko: "미스터리" },
        drama: { en: "Drama", zh: "剧情", ja: "ドラマ", ko: "드라마" },
        music: { en: "Music & Idol", zh: "音乐偶像", ja: "音楽・アイドル", ko: "음악·아이돌" },
        sports: { en: "Sports", zh: "运动", ja: "スポーツ", ko: "스포츠" },
        movie: { en: "Movie", zh: "剧场版", ja: "劇場版", ko: "극장판" },
    } as Record<string, Multilingual>,
};

// 卡片大小滑块的读屏标签（游戏 / 动画两条旅程共用）
export const sizeSliderLabels = {
    favorites: {
        en: "Favorite card size",
        zh: "最爱卡片大小",
        ja: "お気に入りカードのサイズ",
        ko: "최애 카드 크기",
    } as Multilingual,

    library: {
        en: "Library card size",
        zh: "作品库卡片大小",
        ja: "ライブラリカードのサイズ",
        ko: "라이브러리 카드 크기",
    } as Multilingual,
};

export const gameJourneyLabels = {
    playerProfileHeader: {
        en: "Player Profile",
        zh: "玩家档案",
        ja: "プレイヤープロフィール",
        ko: "플레이어 프로필",
    } as Multilingual,

    playStyleHeader: {
        en: "Play Style",
        zh: "游玩风格",
        ja: "プレイスタイル",
        ko: "플레이 스타일",
    } as Multilingual,

    allTimeFavoritesHeader: {
        en: "All-Time Favorite",
        zh: "最喜欢的作品",
        ja: "ずっと好きな作品",
        ko: "오랫동안 가장 좋아해 온 작품",
    } as Multilingual,

    gameLibraryHeader: {
        en: "Game Library",
        zh: "游戏库",
        ja: "ゲームライブラリ",
        ko: "게임 라이브러리",
    } as Multilingual,

    favoriteTag: {
        en: "Fav",
        zh: "最爱",
        ja: "お気に入り",
        ko: "최애",
    } as Multilingual,
};

// ============================================================
//  Player Profile Section
// ============================================================
export const playerProfileData = {
    description1: {
        en: "From the Flash games of the Windows XP era to the vast and breathtaking open worlds of today, games have always been an irreplaceable part of my life. They grew up with me and, from an early age, gave me a unique way to understand and explore the world. To me, games are not just entertainment—they are also a dream, and the calling I want to pursue for a lifetime.",
        zh: "从 Windows XP 时代的 Flash 游戏，到如今广阔而震撼的开放世界，游戏始终是我生活中不可或缺的一部分。它陪伴我成长，也让我在童年时便开始用独特的方式认识这个世界。对我而言，游戏不仅是娱乐，更是梦想，是我愿意用一生去追寻的事业。",
        ja: "Windows XP時代のFlashゲームから、今の広大で圧倒されるようなオープンワールドに至るまで、ゲームはいつも私の人生に欠かせない存在でした。ゲームは私の成長に寄り添い、幼い頃からこの世界を独自の形で知り、理解するきっかけを与えてくれました。私にとってゲームは単なる娯楽ではなく、夢そのものであり、一生をかけて追い求めたいものです。",
        ko: "Windows XP 시절의 Flash 게임부터 오늘날의 광활하고 압도적인 오픈 월드에 이르기까지, 게임은 언제나 내 삶에서 빼놓을 수 없는 존재였습니다. 게임은 나의 성장과 함께했고, 어린 시절부터 세상을 특별한 방식으로 이해하고 알아가게 해주었습니다. 나에게 게임은 단순한 오락이 아니라 꿈이며, 평생을 바쳐 추구하고 싶은 일입니다.",
    } as Multilingual,

    description2: {
        en: "This space reflects my gaming journey and the works that have stayed with me long after I played them.",
        zh: "这里写下了我的游戏旅程，也记录了那些让我难以忘怀的作品。",
        ja: "ここには、私のゲームの旅路と、心に深く残っている作品たちを記しています。",
        ko: "이곳에는 나의 게임 여정과 오래도록 마음에 남아 있는 작품들을 기록하고 있습니다.",
    } as Multilingual,
};

// ============================================================
//  Play Style Section
// ============================================================
export const playStyleData = {
    description1: {
        en: "I’m especially drawn to immersive narrative-driven and strategy-focused games, as they satisfy my love for storytelling, worldbuilding, and gameplay depth all at once. More than fleeting excitement, I value the process of becoming fully engaged, making judgments, and living with the consequences of my choices. That’s why I’m particularly fond of CRPGs, RTT titles, action-adventure games, tactical RPGs, and sandbox experiences.",
        zh: "我最喜欢沉浸式叙事与策略类游戏，因为它们总能同时满足我对故事、世界构建与玩法深度的期待。比起单纯的刺激，我更享受在体验中不断投入、判断与选择的过程，也因此格外偏爱 CRPG、RTT 系列、动作冒险、战棋以及沙盒类游戏。",
        ja: "没入感のある物語性と戦略性を兼ね備えたゲームが特に好きです。そうした作品は、物語、世界観、そしてゲームプレイの奥深さに対する私の期待を同時に満たしてくれます。単純な刺激よりも、深く没頭し、考え、判断し、選択していく過程そのものに魅力を感じています。だからこそ、CRPG、RTT系、アクションアドベンチャー、シミュレーションRPG、そしてサンドボックス系のゲームを特に好んでいます。",
        ko: "저는 몰입감 있는 서사와 전략성을 갖춘 게임을 특히 좋아합니다. 이런 작품들은 이야기, 세계관, 그리고 게임플레이의 깊이에 대한 제 기대를 동시에 충족시켜 주기 때문입니다. 단순한 자극보다도 깊이 몰입하고, 생각하고, 판단하고, 선택해 나가는 과정 자체를 더 즐깁니다. 그래서 CRPG, RTT 계열, 액션 어드벤처, 전술 RPG, 그리고 샌드박스 장르의 게임을 특히 선호합니다.",
    } as Multilingual,

    description2: {
        en: "Beyond that, I also explore games across all genres and enjoy discovering the unique appeal each type of experience has to offer.",
        zh: "除此之外，我也广泛接触各类游戏，喜欢在不同类型与风格的作品中发现各自独特的乐趣。",
        ja: "そのほかにも、私は幅広いジャンルのゲームに触れており、それぞれの作品やスタイルが持つ独自の魅力を見つけることを楽しんでいます。",
        ko: "그 밖에도 저는 다양한 장르의 게임을 폭넓게 접하며, 서로 다른 작품과 스타일이 지닌 고유한 매력을 발견하는 일을 즐깁니다.",
    } as Multilingual,
};

// ============================================================
//  Anime Journey — Headers & Labels
// ============================================================
export const animeJourneyLabels = {
    allTimeFavoritesHeader: {
        en: "All-Time Favorite",
        zh: "最喜欢的作品",
        ja: "ずっと好きな作品",
        ko: "오랫동안 가장 좋아해 온 작품",
    } as Multilingual,

    animeLibraryHeader: {
        en: "Anime Library",
        zh: "动画库",
        ja: "アニメライブラリ",
        ko: "애니메이션 라이브러리",
    } as Multilingual,

    favoriteTag: {
        en: "Fav",
        zh: "最爱",
        ja: "お気に入り",
        ko: "최애",
    } as Multilingual,
};
