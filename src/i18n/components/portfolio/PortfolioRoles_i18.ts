import type { Multilingual } from "@/i18n";
import type { ColorPalette } from "@/consts";

type ShadeKey = "red" | "yellow" | "blue" | "orange" | "green" | "purple";

export interface PortfolioRole {
    id: string;
    /** 对应 Part 的锚点 id（页面内跳转用） */
    anchor: string;
    /** 目录里的编号 */
    index: string;
    colorKey: ShadeKey & keyof ColorPalette;
    icon: string;
    /** 方向名，如「游戏设计」 */
    name: Multilingual;
    /** 身份名，如「游戏设计师」 */
    person: Multilingual;
    /** 主力工具 / 关键词 */
    tools: string[];
    /** 代表作 id，封面取自它 */
    flagshipId: string;
    projectIds: string[];
}

export const PORTFOLIO_ROLES: PortfolioRole[] = [
    {
        id: "game-design",
        anchor: "role-game-design",
        index: "1",
        colorKey: "orange",
        icon: "fa-solid fa-chess-knight",
        name: { en: "Game Design", zh: "游戏设计", ja: "ゲームデザイン", ko: "게임 디자인" },
        person: { en: "Game Designer", zh: "游戏设计师", ja: "ゲームデザイナー", ko: "게임 디자이너" },
        tools: ["Combat / 3C", "Narrative", "Puzzle"],
        flagshipId: "game-project-yuanmengstar-shanhai-xunling",
        projectIds: [
            "game-project-yuanmengstar-shanhai-xunling",
            "technical-project-parkour-motion-system",
            "game-project-empty-throne",
            "game-project-eel-on-mask",
            "game-project-lost-realm",
        ],
    },
    {
        id: "game-dev",
        anchor: "role-game-dev",
        index: "2",
        colorKey: "blue",
        icon: "fa-solid fa-gamepad",
        name: { en: "Game Development", zh: "游戏开发", ja: "ゲーム開発", ko: "게임 개발" },
        person: { en: "Game Developer", zh: "游戏开发者", ja: "ゲーム開発者", ko: "게임 개발자" },
        tools: ["Unity", "UE5 C++", "React + Three.js"],
        flagshipId: "game-project-click-click-universe",
        projectIds: [
            "game-project-click-click-universe",
            "game-project-empty-throne",
            "game-project-eel-on-mask",
            "game-project-speed-pixel",
            "game-project-lost-realm",
            "game-project-night-watch",
            "technical-project-battle-joker",
            "technical-project-colourful-pinball",
        ],
    },
    {
        id: "ai-app",
        anchor: "role-ai-app",
        index: "3",
        colorKey: "purple",
        icon: "fa-solid fa-robot",
        name: { en: "AI Application Engineering", zh: "AI 应用开发", ja: "AI アプリケーション開発", ko: "AI 애플리케이션 개발" },
        person: { en: "AI Application Engineer", zh: "AI 应用工程师", ja: "AI アプリケーションエンジニア", ko: "AI 애플리케이션 엔지니어" },
        tools: ["LLM Agents", "PyTorch / TF", "ComfyUI"],
        flagshipId: "technical-project-terraria-ai-teammate",
        projectIds: [
            "technical-project-terraria-ai-teammate",
            "game-project-night-watch",
            "technical-project-blender-inverse-lighting",
            "technical-project-ai-pixelart-repair-tool",
            "technical-project-mario-ddqn",
            "technical-project-comfyui-ai-eco-film",
            "technical-project-smart-pot-joi",
        ],
    },
    {
        id: "tech-art",
        anchor: "role-tech-art",
        index: "4",
        colorKey: "yellow",
        icon: "fa-solid fa-wand-magic-sparkles",
        name: { en: "Technical Art", zh: "技术美术", ja: "テクニカルアート", ko: "테크니컬 아트" },
        person: { en: "Technical Artist", zh: "技术美术", ja: "テクニカルアーティスト", ko: "테크니컬 아티스트" },
        tools: ["UE5 PCG", "GLSL", "Blender"],
        flagshipId: "technical-project-windy-grass",
        projectIds: [
            "technical-project-windy-grass",
            "technical-project-lego-voxelizer",
            "technical-project-raymarching-fractal-morphing",
            "technical-project-blender-inverse-lighting",
            "art-project-fractal-skull",
            "art-project-fractured-space",
            "art-project-island-cinematic",
        ],
    },
];

export const portfolioOverviewLabels = {
    title: { en: "Portfolio", zh: "作品集", ja: "ポートフォリオ", ko: "포트폴리오" } as Multilingual,

    // 段落之间用 \n\n 分隔；{role-id:文字} 把文字染成该角色的颜色
    positioning: {
        en: "Over six years of making games, I have followed my passion into different fields: {game-design:game design}, {game-dev:game development}, {ai-app:AI application engineering}, and {tech-art:technical art}. I know this might make me sound unfocused, as if I only dabble in many directions.\n\nBut for me, learning and exploring new things is fun in itself. Once a new direction catches my interest, I can't help diving deep: studying it, practicing it hands-on again and again, then bringing it into real collaborative projects, until I can truly build things with it.\n\nIn {game-design:game design}, my strengths are {game-design:combat design (3C)} and {game-design:systems design}. I worked as a combat designer on a {game-design:Tencent AAA project}, and led the design of {game-design:two free indie games released on Steam}, which have reached {game-design:more than 60,000 players} in total.\n\nIn {game-dev:game development}, my strengths are {game-dev:architecture design, automated pipelines and toolchains}, backed by a solid foundation in {game-dev:computer graphics and software engineering}. So far I have been deeply involved in developing {game-dev:9 games}, including {game-dev:commercial projects for NetEase and MedMind}, {game-dev:two USC Advanced Games Projects}, two indie games released on Steam, and several personal indie titles.\n\nIn {ai-app:AI application engineering}, I founded my own {ai-app:AI startup team} in my sophomore year and won the {ai-app:grand championship of the Hong Kong AI Application Development Competition}. Later, as a team leader in the {ai-app:University of Oxford machine learning summer program}, I led my team to {ai-app:the top ranking of the whole program in a Kaggle competition}. I also worked as an AI application engineer at the {ai-app:NetEase Games AI Center}, building AI toolchains and professional development pipelines for game production.\n\nIn {tech-art:technical art}, I specialize in {tech-art:procedural modeling, geometry processing and neural rendering}, with a background in traditional 3D CG film production and {tech-art:over 500 hours in Blender}. Along the way I have built a {tech-art:Python DCC tool for neural lighting rendering}, created large-scale wind-swept grass with {tech-art:UE5 PCG and Bezier curves}, developed a {tech-art:Unity cel shader}, and completed several {tech-art:photorealistic CG short films}.",
        zh: "在制作游戏的六年里，我一直怀着热情，主动探索和学习不同的领域：{game-design:游戏设计}、{game-dev:游戏开发}、{ai-app:AI 应用开发}与{tech-art:技术美术}。我知道，这么说或许会让人觉得我不够专注，只是在各个方向泛泛涉猎。\n\n但对我来说，学习和探索新事物本身就非常有趣。一旦对一个新方向产生兴趣，我就会忍不住一直钻进去：花时间学习，反复动手实践，再走进真实的合作项目，直到自己真的能够用它做出东西。\n\n在{game-design:游戏设计}方面，我最擅长{game-design:战斗设计（3C 方向）}和{game-design:系统设计}。我曾以战斗策划的身份参与{game-design:腾讯 AAA 项目}，也主导设计了{game-design:两款已经上线 Steam 的免费独立游戏}，累计吸引{game-design:超过 6 万名玩家}。\n\n在{game-dev:游戏开发}方面，我最擅长{game-dev:架构设计、自动化管线与工具链搭建}，也拥有扎实的{game-dev:计算机图形学与软件工程}基础。至今，我深度参与过 {game-dev:9 款游戏}的开发，包括{game-dev:网易与 MedMind 的商业项目}、{game-dev:两项 USC Advanced Games Project}、两款已经上线 Steam 的独立游戏，以及多款个人独立作品。\n\n在{ai-app:AI 应用开发}方面，我从大二开始组建自己的 {ai-app:AI 初创团队}，并获得{ai-app:香港地区 AI 应用开发大赛总冠军}。后来，我在{ai-app:牛津大学的机器学习暑期项目}中担任组长，带领团队在 {ai-app:Kaggle 竞赛中取得全场最高排名}；也曾在{ai-app:网易游戏 AI 中心}担任 AI 应用工程师，参与面向游戏研发的 AI 工具链与专业开发管线建设。\n\n在{tech-art:技术美术}方面，我擅长{tech-art:程序化建模、几何处理与神经渲染}，也拥有传统 3D CG 影视制作经验，累计使用 {tech-art:Blender 超过 500 小时}。在实践中，我曾使用 Python 开发{tech-art:面向灯光神经渲染的 DCC 工具}，利用 {tech-art:UE5 PCG 与 Bezier 曲线}制作大规模风场草地，开发 {tech-art:Unity Cel Shader}，也完成过多部{tech-art:写实风格的 CG 短片}。",
        ja: "ゲーム制作に携わってきた 6 年間、私は情熱を持って、{game-design:ゲームデザイン}、{game-dev:ゲーム開発}、{ai-app:AI アプリケーション開発}、{tech-art:テクニカルアート}という異なる領域を自ら探究し、学び続けてきました。こう言うと、集中力に欠け、さまざまな方向を浅くかじっているだけだと思われるかもしれません。\n\nそれでも私にとって、新しいことを学び探究すること自体がとても楽しいのです。新しい方向に興味を持つと、どうしても深く掘り下げずにはいられません。時間をかけて学び、何度も手を動かして実践し、実際のチームプロジェクトに参加して、本当にそれを使って何かを作れるようになるまで続けます。\n\n{game-design:ゲームデザイン}では、{game-design:戦闘デザイン（3C）}と{game-design:システムデザイン}を最も得意としています。{game-design:テンセントの AAA プロジェクト}に戦闘プランナーとして参加したほか、{game-design:Steam でリリースされた 2 本の基本無料インディーゲーム}のデザインを主導し、累計 {game-design:6 万人以上のプレイヤー}に遊んでいただきました。\n\n{game-dev:ゲーム開発}では、{game-dev:アーキテクチャ設計、自動化パイプラインとツールチェーンの構築}を最も得意とし、{game-dev:コンピュータグラフィックスとソフトウェア工学}の確かな基礎も持っています。これまでに、{game-dev:NetEase と MedMind の商用プロジェクト}、{game-dev:2 つの USC Advanced Games Project}、Steam でリリースされた 2 本のインディーゲーム、そして複数の個人インディー作品を含む、{game-dev:9 本のゲーム}の開発に深く関わってきました。\n\n{ai-app:AI アプリケーション開発}では、大学 2 年生のときに自ら {ai-app:AI スタートアップチーム}を立ち上げ、{ai-app:香港 AI アプリケーション開発コンテストで総合優勝}しました。その後、{ai-app:オックスフォード大学の機械学習サマープログラム}でチームリーダーを務め、{ai-app:Kaggle コンペでプログラム全体の最高順位}へとチームを導きました。また、{ai-app:NetEase Games AI センター}で AI アプリケーションエンジニアとして、ゲーム開発向けの AI ツールチェーンと専門的な開発パイプラインの構築に携わりました。\n\n{tech-art:テクニカルアート}では、{tech-art:プロシージャルモデリング、ジオメトリ処理、ニューラルレンダリング}を得意とし、従来の 3D CG 映像制作の経験もあり、{tech-art:Blender の使用時間は 500 時間以上}です。これまでに、Python による{tech-art:ライティング向けニューラルレンダリングの DCC ツール}の開発、{tech-art:UE5 PCG とベジェ曲線}を使った大規模な風になびく草原の制作、{tech-art:Unity のセルシェーダー}の開発、そして複数の{tech-art:フォトリアルな CG 短編}の制作を手がけてきました。",
        ko: "게임을 만들어 온 6년 동안, 저는 열정을 가지고 {game-design:게임 디자인}, {game-dev:게임 개발}, {ai-app:AI 애플리케이션 개발}, {tech-art:테크니컬 아트} 등 다양한 분야를 주도적으로 탐구하고 배워 왔습니다. 이렇게 말하면 집중하지 못하고 여러 방향을 얕게 건드리기만 한다고 느껴질 수도 있다는 것을 압니다.\n\n하지만 저에게는 새로운 것을 배우고 탐구하는 일 자체가 정말 즐겁습니다. 새로운 방향에 흥미가 생기면 저는 멈추지 못하고 계속 파고듭니다. 시간을 들여 배우고, 반복해서 직접 실습하고, 실제 협업 프로젝트에 참여하며, 정말로 그것으로 무언가를 만들 수 있을 때까지 이어갑니다.\n\n{game-design:게임 디자인}에서는 {game-design:전투 디자인(3C)}과 {game-design:시스템 디자인}에 가장 강합니다. {game-design:텐센트 AAA 프로젝트}에 전투 기획자로 참여했으며, {game-design:Steam에 출시된 두 편의 무료 인디 게임} 디자인을 주도해 누적 {game-design:6만 명 이상의 플레이어}를 모았습니다.\n\n{game-dev:게임 개발}에서는 {game-dev:아키텍처 설계, 자동화 파이프라인 및 툴체인 구축}에 가장 강하며, {game-dev:컴퓨터 그래픽스와 소프트웨어 공학}의 탄탄한 기초도 갖추고 있습니다. 지금까지 {game-dev:NetEase와 MedMind의 상용 프로젝트}, {game-dev:두 개의 USC Advanced Games Project}, Steam에 출시된 두 편의 인디 게임, 그리고 여러 개인 인디 작품을 포함해 총 {game-dev:9편의 게임} 개발에 깊이 참여했습니다.\n\n{ai-app:AI 애플리케이션 개발}에서는 대학교 2학년 때 직접 {ai-app:AI 스타트업 팀}을 꾸렸고, {ai-app:홍콩 AI 애플리케이션 개발 대회에서 종합 우승}을 차지했습니다. 이후 {ai-app:옥스퍼드 대학교 머신러닝 여름 프로그램}에서 팀장을 맡아 {ai-app:Kaggle 대회에서 전체 최고 순위}로 팀을 이끌었고, {ai-app:NetEase Games AI 센터}에서 AI 애플리케이션 엔지니어로 일하며 게임 개발을 위한 AI 툴체인과 전문 개발 파이프라인 구축에 참여했습니다.\n\n{tech-art:테크니컬 아트}에서는 {tech-art:절차적 모델링, 지오메트리 처리, 뉴럴 렌더링}에 강하며, 전통적인 3D CG 영상 제작 경험도 있고 {tech-art:Blender를 500시간 이상} 사용했습니다. 실제로 Python으로 {tech-art:조명 뉴럴 렌더링용 DCC 툴}을 개발했고, {tech-art:UE5 PCG와 베지어 곡선}으로 대규모 바람 부는 초원을 만들었으며, {tech-art:Unity 셀 셰이더}를 개발하고 여러 편의 {tech-art:사실적인 CG 단편}을 완성했습니다.",
    } as Multilingual,

    projectsUnit: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,

    iAmPrefix: { en: "I am a", zh: "我是一名", ja: "私は", ko: "저는" } as Multilingual,
    // 不加句号；日韩保留句末的です／입니다，英中留空
    iAmSuffix: { ja: "です", ko: "입니다" } as Multilingual,
    contents: { en: "Contents", zh: "目录", ja: "目次", ko: "목차" } as Multilingual,

};
