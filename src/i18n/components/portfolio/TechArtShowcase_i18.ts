import type { Multilingual } from "@/i18n";

// Part 5 · 技术美术：吉祥物站在中间，左边「技术」、右边「美术」两个板块。
// 每项一句话和标签（标签用「·」分隔），文案取自各项目详情页。
export interface TechArtWork {
    projectId: string;
    side: "tech" | "art";
    /** 这一页卡片上的标题；不写就用项目本身的标题 */
    title?: Multilingual;
    caption: Multilingual;
    tags: Multilingual;
}

export const techArtWorks: TechArtWork[] = [
    // ---------- 技术 ----------
    {
        projectId: "technical-project-windy-grass",
        side: "tech",
        caption: {
            en: "A Bezier-curve grass-blade shader scattered with UE5 PCG: a large field swaying in a real-time wind field.",
            zh: "贝塞尔曲线草叶 Shader，配合 UE5 PCG 程序化散布，大规模草地随实时风场摆动。",
            ja: "ベジェ曲線の草シェーダーを UE5 PCG でプロシージャルに配置し、広大な草原がリアルタイムの風に揺れる。",
            ko: "베지어 곡선 풀잎 셰이더를 UE5 PCG로 절차적으로 배치해, 넓은 초원이 실시간 바람에 흔들립니다.",
        },
        tags: { en: "UE5 · PCG · Shader", zh: "UE5 · PCG · Shader", ja: "UE5 · PCG · シェーダー", ko: "UE5 · PCG · 셰이더" },
    },
    {
        projectId: "technical-project-blender-inverse-lighting",
        side: "tech",
        title: { en: "AI Neural Inverse Lighting", zh: "灯光逆向 AI 神经渲染", ja: "AI ニューラル逆ライティング", ko: "AI 뉴럴 조명 역렌더링" },
        caption: {
            en: "An AI repaint sets the mood; differentiable rendering solves the lights and writes them back to Blender.",
            zh: "AI 重绘给出目标氛围，可微渲染反求灯光，并写回 Blender 成为可编辑参数。",
            ja: "AI リペイントで目標の雰囲気を決め、微分可能レンダリングでライトを逆算して Blender に書き戻す。",
            ko: "AI 리페인트로 목표 분위기를 정하고, 미분 가능 렌더링으로 조명을 역산해 Blender에 다시 씁니다.",
        },
        tags: { en: "Blender · Mitsuba 3 · DCC Tool", zh: "Blender · Mitsuba 3 · DCC 工具", ja: "Blender · Mitsuba 3 · DCC ツール", ko: "Blender · Mitsuba 3 · DCC 툴" },
    },
    {
        projectId: "technical-project-lego-voxelizer",
        side: "tech",
        caption: {
            en: "Adaptive surface sampling and flood fill turn any model into LEGO bricks, with cartoon, wireframe and retro shaders.",
            zh: "自适应表面采样与洪水填充，把任意模型变成乐高积木，支持卡通、线框、复古等 Shader 风格。",
            ja: "適応的な表面サンプリングと塗りつぶしで任意のモデルをレゴブロック化。トゥーン・ワイヤーフレーム・レトロのシェーダーに対応。",
            ko: "적응형 표면 샘플링과 플러드 필로 어떤 모델이든 레고 블록으로 바꾸고, 카툰·와이어프레임·레트로 셰이더를 지원합니다.",
        },
        tags: { en: "Three.js · GLSL · Voxelization", zh: "Three.js · GLSL · 体素化", ja: "Three.js · GLSL · ボクセル化", ko: "Three.js · GLSL · 복셀화" },
    },
    {
        projectId: "technical-project-raymarching-fractal-morphing",
        side: "tech",
        caption: {
            en: "SDF ray marching blends 3D models with a Mandelbulb fractal in real time, right in the browser.",
            zh: "基于 SDF 光线步进，在网页端把三维模型与 Mandelbulb 分形实时融合。",
            ja: "SDF レイマーチングで、3D モデルと Mandelbulb フラクタルをブラウザ上でリアルタイムに融合。",
            ko: "SDF 레이 마칭으로 3D 모델과 Mandelbulb 프랙탈을 브라우저에서 실시간으로 융합합니다.",
        },
        tags: { en: "WebGL · SDF · Ray Marching", zh: "WebGL · SDF · 光线步进", ja: "WebGL · SDF · レイマーチング", ko: "WebGL · SDF · 레이 마칭" },
    },

    // ---------- 美术 ----------
    {
        projectId: "art-project-fractured-space",
        side: "art",
        caption: {
            en: "A CG short of collapsing walls and infinite mirrored space, built with Geometry Nodes and custom PBR materials.",
            zh: "用 Geometry Nodes 与自定义 PBR 材质，做出墙体坍塌、镜面无限空间的 CG 短片。",
            ja: "Geometry Nodes と自作 PBR マテリアルで、崩れ落ちる壁と無限に続く鏡面空間を描いた CG 短編。",
            ko: "Geometry Nodes와 커스텀 PBR 머티리얼로 무너지는 벽과 끝없는 거울 공간을 그린 CG 단편.",
        },
        tags: { en: "Blender · Geometry Nodes · CG Short", zh: "Blender · Geometry Nodes · CG 短片", ja: "Blender · Geometry Nodes · CG 短編", ko: "Blender · Geometry Nodes · CG 단편" },
    },
    {
        projectId: "art-project-island-cinematic",
        side: "art",
        caption: {
            en: "A cinematic island in UE5: rendered ocean, dynamic sky and film-style camera work in Sequencer.",
            zh: "UE5 影视化岛屿场景：真实海面、动态天空，以及 Sequencer 里的电影感镜头。",
            ja: "UE5 のシネマティックな島：リアルな海面、動的な空、Sequencer による映画的なカメラワーク。",
            ko: "UE5 시네마틱 섬: 사실적인 바다, 동적인 하늘, Sequencer로 만든 영화 같은 카메라 연출.",
        },
        tags: { en: "UE5 · Cinematic · Environment", zh: "UE5 · 影视化 · 环境美术", ja: "UE5 · シネマティック · 環境アート", ko: "UE5 · 시네마틱 · 환경 아트" },
    },
    {
        projectId: "art-project-fractal-skull",
        side: "art",
        caption: {
            en: "A skull deformed by a Mandelbulb fractal, lit in wax and gold around death and hidden treasure.",
            zh: "用 Mandelbulb 分形变形的骷髅，蜡质与金色细节，讲「死亡与隐藏的宝藏」。",
            ja: "Mandelbulb フラクタルで変形させた髑髏。蝋と金の質感で「死と隠された宝」を描く。",
            ko: "Mandelbulb 프랙탈로 변형한 해골. 밀랍과 금빛 질감으로 '죽음과 숨겨진 보물'을 그립니다.",
        },
        tags: { en: "Blender · Fractal Art · Lighting", zh: "Blender · 分形艺术 · 布光", ja: "Blender · フラクタルアート · ライティング", ko: "Blender · 프랙탈 아트 · 라이팅" },
    },
];

export const techArtLabels = {
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
    tech: { en: "Technical", zh: "技术", ja: "テクニカル", ko: "테크니컬" } as Multilingual,
    art: { en: "Art", zh: "美术", ja: "アート", ko: "아트" } as Multilingual,
    techSub: { en: "Shaders · Procedural · Tools", zh: "Shader · 程序化 · 工具", ja: "シェーダー · プロシージャル · ツール", ko: "셰이더 · 절차적 생성 · 툴" } as Multilingual,
    artSub: { en: "CG Shorts · Scenes · Lighting", zh: "CG 短片 · 场景 · 布光", ja: "CG 短編 · シーン · ライティング", ko: "CG 단편 · 씬 · 라이팅" } as Multilingual,
};
