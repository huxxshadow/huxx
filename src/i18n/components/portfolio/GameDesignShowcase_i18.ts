import type { Multilingual } from "@/i18n";

// Part 2 · 游戏设计：所有做过设计工作的项目，一屏看全。
// 每项标注：设计方向（可多选，第一个为主方向）、出处与规模、设计身份、一句设计要点。
// 文案都取自各项目详情页里写过的内容。
export type DesignPillarId = "combat" | "systems" | "levels" | "narrative";

export interface DesignPillar {
    id: DesignPillarId;
    name: Multilingual;
}

/** featured = 代表作（大图），selected = 精选（中图），solo = 个人项目（小图） */
export type DesignTier = "featured" | "selected" | "solo";

export interface DesignWork {
    projectId: string;
    tier: DesignTier;
    /** 只有代表作需要：三条亮点 */
    highlights?: Multilingual[];
    /** 代表作面板标题下的一句话 */
    caption?: Multilingual;
    pillars: DesignPillarId[];
    context: Multilingual;
    role: Multilingual;
    line: Multilingual;
}

export const designPillars: DesignPillar[] = [
    { id: "combat", name: { en: "Combat & 3C", zh: "战斗与 3C", ja: "戦闘と 3C", ko: "전투와 3C" } },
    { id: "systems", name: { en: "Systems & Progression", zh: "系统与成长", ja: "システムと成長", ko: "시스템과 성장" } },
    { id: "levels", name: { en: "Levels & Puzzles", zh: "关卡与谜题", ja: "ステージと謎解き", ko: "레벨과 퍼즐" } },
    { id: "narrative", name: { en: "Narrative & World", zh: "叙事与世界观", ja: "ナラティブと世界観", ko: "내러티브와 세계관" } },
];

const solo: Multilingual = { en: "Solo Developer", zh: "独立开发", ja: "個人開発", ko: "1인 개발" };

export const designWorks: DesignWork[] = [
    {
        projectId: "game-project-yuanmengstar-shanhai-xunling",
        tier: "featured",
        caption: {
            en: "Designed the world-boss combat and 3C experience, and single-handedly took a brand-new combat mechanic from proposal to in-game implementation.",
            zh: "负责世界 Boss 的战斗与 3C 体验设计，并独立负责全新战斗机制从方案设计到实装落地。",
            ja: "ワールドボスの戦闘と 3C 体験の設計を担当し、まったく新しい戦闘メカニクスを企画から実装まで一人で手がけました。",
            ko: "월드 보스의 전투와 3C 경험 설계를 맡았고, 완전히 새로운 전투 메커니즘을 기획부터 실제 구현까지 단독으로 책임졌습니다.",
        },
        highlights: [
            { en: "World boss combat 3C tuning", zh: "世界 Boss 战斗 3C 调优", ja: "ワールドボス戦の 3C 調整", ko: "월드 보스 전투 3C 조율" },
            { en: "New combat mechanic owner, 0 to 1", zh: "新战斗机制 PO，从 0 到 1", ja: "新しい戦闘メカニクスの担当者として 0 から 1 へ", ko: "새 전투 메커니즘 PO, 0에서 1까지" },
            { en: "Cross-discipline delivery to integration", zh: "跨职能推进，联调落地", ja: "職種を横断して実装まで推進", ko: "직군 간 협업으로 통합까지 추진" },
        ],
        pillars: ["combat"],
        context: { en: "Tencent AAA · Commercial", zh: "腾讯 AAA · 商业项目", ja: "テンセント AAA · 商業プロジェクト", ko: "텐센트 AAA · 상업 프로젝트" },
        role: { en: "Combat Designer", zh: "战斗策划", ja: "戦闘プランナー", ko: "전투 기획자" },
        line: {
            en: "Tuned 3C for open-world boss fights; took a new combat mechanic from 0 to 1 as its owner.",
            zh: "开放世界 Boss 战 3C 调优；作为玩法负责人把一项新战斗机制从 0 推进到 1。",
            ja: "オープンワールドのボス戦の 3C を調整し、新しい戦闘メカニクスを担当者として 0 から 1 へ。",
            ko: "오픈월드 보스전 3C를 조율하고, 새로운 전투 메커니즘을 담당자로서 0에서 1까지 이끌었습니다.",
        },
    },
    {
        projectId: "game-project-floodsong",
        tier: "selected",
        pillars: ["combat"],
        context: { en: "USC AGP", zh: "USC AGP", ja: "USC AGP", ko: "USC AGP" },
        role: { en: "Technical Designer (3C) · Technical Artist", zh: "技术策划（3C） · 技术美术", ja: "テクニカルデザイナー（3C） · テクニカルアーティスト", ko: "테크니컬 디자이너(3C) · 테크니컬 아티스트" },
        line: {
            en: "Designed the camera and movement, building camera storytelling for high-speed parkour, and as a technical artist handled part of the materials.",
            zh: "负责镜头和运动设计，实现高速跑酷的镜头叙事，并作为技术美术负责部分材质。",
            ja: "カメラと移動の設計を担当し、高速パルクールのカメラ演出を実現したほか、テクニカルアーティストとして一部のマテリアルを担当しました。",
            ko: "카메라와 이동 설계를 맡아 고속 파쿠르의 카메라 연출을 구현하고, 테크니컬 아티스트로서 일부 머티리얼을 담당했습니다.",
        },
    },
    {
        projectId: "technical-project-parkour-motion-system",
        tier: "solo",
        pillars: ["combat"],
        context: { en: "UE5 · 7-day solo study", zh: "UE5 · 7 天个人练习", ja: "UE5 · 7 日間の個人練習", ko: "UE5 · 7일 개인 연습" },
        role: { en: "3C Design", zh: "3C 设计", ja: "3C デザイン", ko: "3C 디자인" },
        line: {
            en: "Feel over realism: modular vaults, wall runs and slides; the jump apex turned into a choreographed time beat.",
            zh: "为速度感牺牲真实性：翻越、贴墙跑、滑铲模块化；把跳跃顶点做成可编排的时间节拍。",
            ja: "リアルさより手触り。乗り越え・壁走り・スライディングをモジュール化し、ジャンプの頂点を演出できるタイムビートに。",
            ko: "사실성보다 손맛. 넘기, 벽 달리기, 슬라이딩을 모듈화하고 점프 정점을 연출 가능한 시간 박자로 만들었습니다.",
        },
    },
    {
        projectId: "game-project-lost-realm",
        tier: "solo",
        pillars: ["combat", "systems", "levels"],
        context: { en: "Unity · 3-month solo demo", zh: "Unity · 3 个月个人 Demo", ja: "Unity · 3 か月の個人デモ", ko: "Unity · 3개월 개인 데모" },
        role: solo,
        line: {
            en: "Metroidvania: state-machine action 3C, card-based move-editing combat, and a nonlinear map gated by skills.",
            zh: "银河恶魔城：状态机驱动的动作 3C、卡牌式动作编辑战斗、技能解锁驱动的非线性地图。",
            ja: "メトロイドヴァニア。ステートマシンによるアクション 3C、カードで技を組む戦闘、スキル解放で広がる非線形マップ。",
            ko: "메트로배니아. 상태 머신 기반 액션 3C, 카드로 기술을 조합하는 전투, 스킬 해금으로 열리는 비선형 맵.",
        },
    },
    {
        projectId: "game-project-speed-pixel",
        tier: "solo",
        pillars: ["systems", "levels"],
        context: { en: "Unity · 3-month solo project", zh: "Unity · 3 个月个人项目", ja: "Unity · 3 か月の個人プロジェクト", ko: "Unity · 3개월 개인 프로젝트" },
        role: solo,
        line: {
            en: "A core loop where speed is power; procedural levels and two-layer progression inside and across runs.",
            zh: "「速度即力量」的核心循环；程序化关卡与局内外双层成长。",
            ja: "「速さこそ力」のコアループ。プロシージャルなステージと、ラン内・ラン外の二層の成長。",
            ko: "'속도가 곧 힘'인 핵심 루프, 절차적 레벨과 런 안팎의 이중 성장 구조.",
        },
    },
    {
        projectId: "game-project-click-click-universe",
        tier: "selected",
        pillars: ["systems"],
        context: { en: "Steam", zh: "Steam", ja: "Steam", ko: "Steam" },
        role: { en: "Systems Designer · Balance Designer · Gameplay Designer", zh: "系统策划 · 数值策划 · 玩法策划", ja: "システムプランナー · バランスプランナー · ゲームプレイプランナー", ko: "시스템 기획 · 밸런스 기획 · 게임플레이 기획" },
        line: {
            en: "Designed the core systems, gameplay loop and balance framework of a mid-sized game, and single-handedly did all of the development.",
            zh: "负责中型游戏项目的核心系统、玩法循环与数值体系设计，并独立完成全部开发工作。",
            ja: "中規模ゲームのコアシステム、ゲームループ、数値設計を担当し、開発もすべて一人で行いました。",
            ko: "중형 게임의 핵심 시스템, 게임플레이 루프, 밸런스 체계를 설계하고 개발 전체를 단독으로 완성했습니다.",
        },
    },
    {
        projectId: "game-project-night-watch",
        tier: "selected",
        pillars: ["systems"],
        context: { en: "NetEase · AI-native game", zh: "网易 · AI原生游戏", ja: "NetEase · AI ネイティブゲーム", ko: "NetEase · AI 네이티브 게임" },
        role: { en: "Systems Designer · Gameplay Designer", zh: "系统策划 · 玩法策划", ja: "システムプランナー · ゲームプレイプランナー", ko: "시스템 기획 · 게임플레이 기획" },
        line: {
            en: "Led the systems and gameplay design of an AI-native game, building a rule-driven generation framework for a dynamic game experience.",
            zh: "负责 AI 原生游戏的系统与玩法设计，构建规则驱动的生成框架，实现动态游戏体验。",
            ja: "AI ネイティブゲームのシステムとゲームプレイの設計を担当し、ルール駆動の生成フレームワークを構築して、動的なゲーム体験を実現しました。",
            ko: "AI 네이티브 게임의 시스템과 게임플레이 설계를 맡아, 규칙 기반 생성 프레임워크를 구축하고 역동적인 게임 경험을 구현했습니다.",
        },
    },
    {
        projectId: "game-project-eel-on-mask",
        tier: "featured",
        caption: {
            en: "As team lead, led the gameplay, puzzle and systems design, and built the game's framework.",
            zh: "作为队长，主导游戏的玩法、谜题设计、系统设计，并负责框架开发。",
            ja: "チームリーダーとして、ゲームプレイ、謎解き、システムの設計を主導し、フレームワークの開発を担当しました。",
            ko: "팀장으로서 게임플레이, 퍼즐 설계, 시스템 설계를 주도하고 프레임워크 개발을 맡았습니다.",
        },
        highlights: [
            { en: "Core mechanic: Clipping Mask stickers", zh: "核心机制：Clipping Mask 贴纸", ja: "コアメカニクス：Clipping Mask ステッカー", ko: "핵심 메커니즘: Clipping Mask 스티커" },
            { en: "Material swaps rewrite level rules", zh: "换材质即改写关卡规则", ja: "素材の切り替えでステージのルールを書き換える", ko: "재질 교체로 스테이지 규칙을 바꿈" },
            { en: "Team lead in 48 hours, released on Steam", zh: "48 小时带队完成，上线 Steam", ja: "48 時間でチームを率いて完成、Steam で配信", ko: "48시간 동안 팀을 이끌어 완성, Steam 출시" },
        ],
        pillars: ["levels", "systems"],
        context: { en: "Steam · team of 9", zh: "Steam · 9 人团队", ja: "Steam · 9 人チーム", ko: "Steam · 9인 팀" },
        role: { en: "Team Lead · GGJ 2026", zh: "队长 · GGJ 2026", ja: "リーダー · GGJ 2026", ko: "팀장 · GGJ 2026" },
        line: {
            en: "A whole game built on the Clipping Mask: change a sticker's material to change the level's rules and puzzles.",
            zh: "围绕「Clipping Mask」设计整套玩法：改贴纸材质即改场景规则与解谜逻辑。",
            ja: "「Clipping Mask」を軸にゲーム全体を設計。ステッカーの素材を変えるとステージのルールと謎解きが変わる。",
            ko: "'Clipping Mask'를 축으로 게임 전체를 설계. 스티커 재질을 바꾸면 스테이지 규칙과 퍼즐이 바뀝니다.",
        },
    },
    {
        projectId: "game-project-fractal-shelter",
        tier: "selected",
        pillars: ["levels", "narrative"],
        // 只显示身份标签，不写出处
        context: { en: "", zh: "", ja: "", ko: "" },
        role: { en: "Narrative Designer · Gameplay Designer · Graphic Design", zh: "叙事策划 · 玩法策划 · 平面设计", ja: "ナラティブプランナー · ゲームプレイプランナー · グラフィックデザイン", ko: "내러티브 기획 · 게임플레이 기획 · 그래픽 디자인" },
        line: {
            en: "Built the world and designed the core gameplay, and defined the overall art style and graphic visual design.",
            zh: "负责世界观构建与核心玩法设计，并完成整体美术风格定义及平面视觉设计。",
            ja: "世界観の構築とコアゲームプレイの設計を担当し、全体のアートスタイルの定義とグラフィックデザインを手がけました。",
            ko: "세계관 구축과 핵심 게임플레이 설계를 맡고, 전체 아트 스타일 정의와 그래픽 비주얼 디자인을 완성했습니다.",
        },
    },
    {
        projectId: "game-project-empty-throne",
        tier: "featured",
        caption: {
            en: "As team lead, worked on the gameplay, narrative and rhythm design, and handled all of the project's development.",
            zh: "作为队长，参与游戏的玩法、叙事、音游设计，并负责项目的全部开发。",
            ja: "チームリーダーとして、ゲームプレイ、ナラティブ、リズムゲームの設計に携わり、プロジェクトの開発をすべて担当しました。",
            ko: "팀장으로서 게임플레이, 내러티브, 리듬 게임 설계에 참여하고, 프로젝트의 개발 전체를 맡았습니다.",
        },
        highlights: [
            { en: "\"Magic mirror reveals the truth\" core mechanic", zh: "「魔镜揭示真相」核心机制", ja: "「魔法の鏡が真実を暴く」コアメカニクス", ko: "'마법 거울이 진실을 드러낸다' 핵심 메커니즘" },
            { en: "Dialogue-deduction puzzles", zh: "对话推理式谜题", ja: "会話推理型の謎解き", ko: "대화 추리형 퍼즐" },
            { en: "Rhythm performances, released on Steam", zh: "音乐节奏演出，上线 Steam", ja: "リズム演出、Steam で配信", ko: "리듬 연출, Steam 출시" },
        ],
        pillars: ["narrative", "levels"],
        context: { en: "Steam · team of 5", zh: "Steam · 5 人团队", ja: "Steam · 5 人チーム", ko: "Steam · 5인 팀" },
        role: { en: "Team Lead", zh: "队长", ja: "リーダー", ko: "팀장" },
        line: {
            en: "A \"magic mirror reveals the truth\" mechanic that fuses story, dialogue-deduction puzzles and rhythm performances.",
            zh: "「魔镜揭示真相」把叙事、对话推理谜题与音乐节奏演出融为一体。",
            ja: "「魔法の鏡が真実を暴く」メカニクスで、物語・会話推理の謎解き・リズム演出を融合。",
            ko: "'마법 거울이 진실을 드러낸다'는 메커니즘으로 이야기, 대화 추리 퍼즐, 리듬 연출을 하나로 엮었습니다.",
        },
    },
    {
        projectId: "game-project-follyblind-age",
        tier: "solo",
        pillars: ["narrative", "systems"],
        context: { en: "Team of 8 · in development", zh: "8 人团队 · 开发中", ja: "8 人チーム · 開発中", ko: "8인 팀 · 개발 중" },
        role: { en: "Director", zh: "制作人", ja: "ディレクター", ko: "디렉터" },
        line: {
            en: "A New Weird 20th century where everything is made of eight aspects and all power drifts toward blindness.",
            zh: "新怪谈的 20 世纪，万物由八种性相构成，力量终将接近本源的极端与盲目。",
            ja: "ニューウィアードの 20 世紀。万物は 8 つの性相から成り、力は最後に根源の極端と盲目へ近づく。",
            ko: "뉴 위어드의 20세기. 만물은 여덟 성상으로 이루어지고, 힘은 결국 근원의 극단과 맹목에 가까워집니다.",
        },
    },
];

export const gameDesignLabels = {
    tierFeatured: { en: "Combat / Systems / Gameplay / Narrative Design", zh: "战斗/系统/玩法/叙事策划", ja: "戦闘／システム／ゲームプレイ／ナラティブ設計", ko: "전투/시스템/게임플레이/내러티브 기획" } as Multilingual,
    tierSelected: { en: "Selected", zh: "精选项目", ja: "注目作", ko: "주요 작품" } as Multilingual,
    tierSolo: { en: "Solo Projects", zh: "个人项目", ja: "個人プロジェクト", ko: "개인 프로젝트" } as Multilingual,
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
    colProject: { en: "Project", zh: "项目", ja: "プロジェクト", ko: "프로젝트" } as Multilingual,
    colRole: { en: "Context · Role", zh: "出处 · 身份", ja: "出典 · 役割", ko: "출처 · 역할" } as Multilingual,
    legendPrimary: { en: "Primary focus", zh: "主方向", ja: "主な方向", ko: "주 방향" } as Multilingual,
    legendSecondary: { en: "Also covers", zh: "兼顾", ja: "あわせて担当", ko: "함께 다룸" } as Multilingual,
    colPoint: { en: "Design point", zh: "设计要点", ja: "設計のポイント", ko: "설계 포인트" } as Multilingual,
};
