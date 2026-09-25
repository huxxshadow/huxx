import type { Multilingual } from "@/i18n";

// Part 3 · 游戏开发：九宫格外圈的 8 个项目，按格子顺序排（左上、上、右上、左、右、左下、下、右下）。每项标注出处与规模、开发身份、技术栈、一句话，以及亲手搭的三个系统。
// 文案都取自各项目详情页里写过的内容。

export interface DevWork {
    projectId: string;
    context: Multilingual;
    role: Multilingual;
    /** 技术栈，不翻译 */
    stack: string[];
    line: Multilingual;
    /** 亲手搭的系统 / 技术点 */
    systems: Multilingual[];
}

const solo: Multilingual = { en: "Solo Developer", zh: "独立开发", ja: "個人開発", ko: "1인 개발" };

export const devWorks: DevWork[] = [
    {
        projectId: "game-project-click-click-universe",
        context: { en: "Graduation project · Steam", zh: "本科毕设 · Steam", ja: "卒業制作 · Steam", ko: "졸업 작품 · Steam" },
        role: solo,
        stack: ["Unity", "C#", "ScriptableObject"],
        line: {
            en: "A mid-sized game framework built alone: combat, growth, companions, quests and collections, all data-driven.",
            zh: "独立搭建的中型游戏框架：战斗、成长、伙伴、任务与收藏，全部数据驱动。",
            ja: "一人で構築した中規模ゲームフレームワーク。戦闘、成長、仲間、クエスト、コレクションをすべてデータ駆動で。",
            ko: "혼자 구축한 중형 게임 프레임워크. 전투, 성장, 동료, 퀘스트, 수집을 모두 데이터 기반으로.",
        },
        systems: [
            { en: "Data-driven architecture with runtime data split", zh: "数据驱动架构与运行时数据分离", ja: "データ駆動アーキテクチャとランタイムデータの分離", ko: "데이터 기반 아키텍처와 런타임 데이터 분리" },
            { en: "Manager index and state machines linking systems", zh: "管理器索引与状态机串联各系统", ja: "マネージャー索引とステートマシンでシステムを連携", ko: "매니저 인덱스와 상태 머신으로 시스템 연동" },
            { en: "Toon shader extended for stylized rendering", zh: "扩展 Toon Shader 的风格化渲染", ja: "Toon シェーダーを拡張したスタイライズドレンダリング", ko: "Toon 셰이더를 확장한 스타일라이즈드 렌더링" },
        ],
    },
    {
        projectId: "game-project-empty-throne",
        context: { en: "Steam · team of 5", zh: "Steam · 5 人团队", ja: "Steam · 5 人チーム", ko: "Steam · 5인 팀" },
        role: { en: "Lead Programmer", zh: "主程序", ja: "リードプログラマー", ko: "메인 프로그래머" },
        stack: ["Unity", "C#", "Editor Tools"],
        line: {
            en: "From a contest prototype to a full production framework shipped on Steam.",
            zh: "从比赛原型走到 Steam 上线的完整生产框架。",
            ja: "コンテストのプロトタイプから、Steam で配信した本格的な制作フレームワークへ。",
            ko: "대회 프로토타입에서 Steam 출시까지 이어진 완전한 제작 프레임워크.",
        },
        systems: [
            { en: "Modular dialogue and narrative scripting", zh: "模块化对话与叙事脚本系统", ja: "モジュール式の会話・シナリオスクリプト", ko: "모듈형 대화·내러티브 스크립트 시스템" },
            { en: "Rhythm gameplay and animation event triggers", zh: "节奏玩法与动画事件触发", ja: "リズムゲームとアニメーションイベントのトリガー", ko: "리듬 게임플레이와 애니메이션 이벤트 트리거" },
            { en: "Localization and custom editor tools", zh: "本地化与自定义编辑器工具", ja: "ローカライズとカスタムエディターツール", ko: "로컬라이제이션과 커스텀 에디터 툴" },
        ],
    },
    {
        projectId: "game-project-arcane-samurai",
        context: { en: "Team of 4 · in development", zh: "4 人团队 · 开发中", ja: "4 人チーム · 開発中", ko: "4인 팀 · 개발 중" },
        role: { en: "Lead Programmer · TA", zh: "主程序 · TA", ja: "リードプログラマー · TA", ko: "메인 프로그래머 · TA" },
        stack: ["Unity", "C#", "URP 2D"],
        line: {
            en: "State-machine sword combat, data-driven boss AI, and hit detection that never touches the physics engine.",
            zh: "状态机驱动的刀剑战斗、数据化的 Boss AI，以及不依赖物理引擎的判定系统。",
            ja: "ステートマシン駆動の剣戟、データ化したボス AI、物理エンジンに頼らない当たり判定。",
            ko: "상태 머신 기반 검술 전투, 데이터화한 보스 AI, 물리 엔진에 기대지 않는 판정 시스템.",
        },
        systems: [
            { en: "Player state machine and weighted boss AI", zh: "玩家状态机与按权重选招的 Boss AI", ja: "プレイヤーのステートマシンと重み付きボス AI", ko: "플레이어 상태 머신과 가중치 기반 보스 AI" },
            { en: "SAT hit detection with a timeline debugger", zh: "分离轴判定与时间轴判定调试器", ja: "分離軸判定とタイムライン式の判定デバッガー", ko: "분리축 판정과 타임라인 판정 디버거" },
            { en: "URP 2D day-night and layered sprite lighting", zh: "URP 2D 昼夜氛围与分层 Sprite 光照", ja: "URP 2D の昼夜演出とレイヤー式スプライトライティング", ko: "URP 2D 낮밤 연출과 레이어형 스프라이트 조명" },
        ],
    },
    {
        projectId: "game-project-night-watch",
        context: { en: "NetEase · R&D topic", zh: "网易 · 实验课题", ja: "NetEase · 実験課題", ko: "NetEase · 실험 과제" },
        role: solo,
        stack: ["React", "Three.js", "LLM"],
        line: {
            en: "An AI-native card roguelike: the model generates content at runtime, the rules stay in code.",
            zh: "AI 原生卡牌 Roguelike：内容交给模型在运行时生成，规则留在代码里。",
            ja: "AI ネイティブのカードローグライク。コンテンツはモデルが実行時に生成し、ルールはコードに残す。",
            ko: "AI 네이티브 카드 로그라이크. 콘텐츠는 모델이 런타임에 생성하고, 규칙은 코드에 남깁니다.",
        },
        systems: [
            { en: "LLM runtime content generation under rule constraints", zh: "规则约束下的 LLM 运行时内容生成", ja: "ルール制約下での LLM 実行時コンテンツ生成", ko: "규칙 제약 아래의 LLM 런타임 콘텐츠 생성" },
            { en: "Card, combat, crafting and meta-progression systems", zh: "卡牌、战斗、合成与局外成长系统", ja: "カード、戦闘、合成、メタ成長のシステム", ko: "카드, 전투, 합성, 메타 성장 시스템" },
            { en: "Presentation layer with performance tiers", zh: "表现层与性能档位", ja: "表現レイヤーとパフォーマンス段階", ko: "표현 레이어와 성능 단계" },
        ],
    },
    {
        projectId: "game-project-eel-on-mask",
        context: { en: "GGJ 2026 · Steam", zh: "GGJ 2026 · Steam", ja: "GGJ 2026 · Steam", ko: "GGJ 2026 · Steam" },
        role: { en: "Lead Programmer", zh: "主程序", ja: "リードプログラマー", ko: "메인 프로그래머" },
        stack: ["Unity", "C#", "Shader"],
        line: {
            en: "In 48 hours: the Clipping Mask mechanic, a rule-driven tilemap, and shaders that unify the sticker world.",
            zh: "48 小时内实现 Clipping Mask 机制、规则驱动的 TileMap，以及统一贴纸世界的 Shader。",
            ja: "48 時間で Clipping Mask の仕組み、ルール駆動のタイルマップ、ステッカー世界を統一するシェーダーを実装。",
            ko: "48시간 안에 Clipping Mask 메커니즘, 규칙 기반 타일맵, 스티커 세계를 통일하는 셰이더를 구현.",
        },
        systems: [
            { en: "Custom grid and rule-driven tilemap", zh: "自定义网格与规则驱动 TileMap", ja: "カスタムグリッドとルール駆動タイルマップ", ko: "커스텀 그리드와 규칙 기반 타일맵" },
            { en: "Clipping Mask material swapping", zh: "Clipping Mask 材质切换", ja: "Clipping Mask による素材切り替え", ko: "Clipping Mask 재질 전환" },
            { en: "Sticker-world shaders", zh: "贴纸世界的 Shader", ja: "ステッカー世界のシェーダー", ko: "스티커 세계 셰이더" },
        ],
    },
    {
        projectId: "game-project-floodsong",
        context: { en: "USC AGP · 50+ people", zh: "USC AGP · 50+ 人", ja: "USC AGP · 50 人以上", ko: "USC AGP · 50명 이상" },
        role: { en: "Technical Designer (3C)", zh: "技术策划（3C）", ja: "テクニカルデザイナー（3C）", ko: "테크니컬 디자이너(3C)" },
        stack: ["Unity", "C#", "HLSL"],
        line: {
            en: "The camera and drift systems, plus the post-process shaders that sell speed.",
            zh: "相机与漂移系统，以及撑起速度感的后处理 Shader。",
            ja: "カメラとドリフトのシステム、そしてスピード感を支えるポストエフェクトシェーダー。",
            ko: "카메라와 드리프트 시스템, 그리고 속도감을 살리는 후처리 셰이더.",
        },
        systems: [
            { en: "Layered FOV and dolly zoom camera", zh: "分层 FOV 与 Dolly Zoom 相机", ja: "レイヤー化した FOV とドリーズーム", ko: "레이어형 FOV와 돌리 줌 카메라" },
            { en: "Arcing drift paid out per corner", zh: "按弯道结算的弧线漂移", ja: "コーナーごとに精算する弧のドリフト", ko: "코너마다 정산하는 호 드리프트" },
            { en: "SpeedLines and RadialBlur shaders", zh: "SpeedLines 与 RadialBlur Shader", ja: "SpeedLines と RadialBlur シェーダー", ko: "SpeedLines와 RadialBlur 셰이더" },
        ],
    },
    {
        projectId: "game-project-lost-realm",
        context: { en: "3-month solo demo", zh: "3 个月个人 Demo", ja: "3 か月の個人デモ", ko: "3개월 개인 데모" },
        role: solo,
        stack: ["Unity", "C#"],
        line: {
            en: "Modular action state machines, a card-style move editor and behavior-tree boss AI.",
            zh: "模块化动作状态机、卡牌式动作编辑与行为树 Boss AI。",
            ja: "モジュール式のアクションステートマシン、カード型の技エディター、ビヘイビアツリーのボス AI。",
            ko: "모듈형 액션 상태 머신, 카드식 동작 편집, 비헤이비어 트리 보스 AI.",
        },
        systems: [
            { en: "Modular action state machine", zh: "模块化动作状态机", ja: "モジュール式アクションステートマシン", ko: "모듈형 액션 상태 머신" },
            { en: "Card-style move editing", zh: "卡牌式动作编辑", ja: "カード型の技編集", ko: "카드식 동작 편집" },
            { en: "Behavior-tree boss AI", zh: "行为树 Boss AI", ja: "ビヘイビアツリーのボス AI", ko: "비헤이비어 트리 보스 AI" },
        ],
    },
    {
        projectId: "game-project-speed-pixel",
        context: { en: "3-month solo project", zh: "3 个月个人项目", ja: "3 か月の個人プロジェクト", ko: "3개월 개인 프로젝트" },
        role: solo,
        stack: ["Unity", "C#"],
        line: {
            en: "Procedural level generation and a speed-driven combat loop.",
            zh: "程序化地图生成与速度驱动的战斗循环。",
            ja: "プロシージャルなマップ生成と、速度で回る戦闘ループ。",
            ko: "절차적 맵 생성과 속도 기반 전투 루프.",
        },
        systems: [
            { en: "Procedural map generation", zh: "程序化地图生成", ja: "プロシージャルなマップ生成", ko: "절차적 맵 생성" },
            { en: "Momentum-based movement and combat", zh: "基于动量的移动与战斗", ja: "運動量ベースの移動と戦闘", ko: "운동량 기반 이동과 전투" },
            { en: "In-run builds and permanent progression", zh: "局内构筑与局外成长", ja: "ラン内ビルドと恒久成長", ko: "런 내 빌드와 영구 성장" },
        ],
    },
];

export const gameDevLabels = {
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
    select: { en: "SELECT", zh: "SELECT", ja: "SELECT", ko: "SELECT" } as Multilingual,
    built: { en: "What I built", zh: "我搭的系统", ja: "作ったシステム", ko: "구축한 시스템" } as Multilingual,
    stack: { en: "Stack", zh: "技术栈", ja: "技術スタック", ko: "기술 스택" } as Multilingual,
    role: { en: "Role", zh: "身份", ja: "役割", ko: "역할" } as Multilingual,
};
