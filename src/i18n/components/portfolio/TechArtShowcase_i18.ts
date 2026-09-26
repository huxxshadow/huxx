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
        tags: { en: "Blender · Neural Rendering", zh: "Blender · 神经渲染", ja: "Blender · ニューラルレンダリング", ko: "Blender · 뉴럴 렌더링" },
    },
    {
        projectId: "technical-project-ai-pixelart-repair-tool",
        side: "tech",
        caption: {
            en: "Cleans up AI-generated pixel art: pixelation, colour quantisation, edge repair and pixel-block detection, with optional GPU acceleration.",
            zh: "优化 AI 生成的像素风素材：像素化、颜色量化、边缘修复与像素块检测，可选 GPU 加速。",
            ja: "AI が生成したピクセルアートを整える：ピクセル化、減色、エッジ修復、ピクセルブロック検出。GPU 加速にも対応。",
            ko: "AI가 생성한 픽셀아트를 다듬습니다: 픽셀화, 색상 양자화, 가장자리 보정, 픽셀 블록 검출, 선택적 GPU 가속.",
        },
        tags: { en: "Python · Image Processing", zh: "Python · 图像处理", ja: "Python · 画像処理", ko: "Python · 이미지 처리" },
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
        tags: { en: "Three.js · Computer Graphics", zh: "Three.js · 计算机图形学", ja: "Three.js · コンピュータグラフィックス", ko: "Three.js · 컴퓨터 그래픽스" },
    },
    {
        projectId: "technical-project-comfyui-ai-eco-film",
        side: "tech",
        // 标题、说明和 Part 4 一致
        title: { en: "ComfyUI AI Video Workflow", zh: "ComfyUI AI视频工作流", ja: "ComfyUI AI 動画ワークフロー", ko: "ComfyUI AI 영상 워크플로" },
        caption: {
            en: "Storyboard generation, first-and-last-frame video synthesis, upscaling, frame interpolation and AI voice.",
            zh: "分镜生成、首尾帧视频合成、超分、插帧与 AI 配音。",
            ja: "絵コンテ生成、始点・終点フレームからの動画合成、超解像、フレーム補間、AI 音声。",
            ko: "콘티 생성, 첫·끝 프레임 영상 합성, 업스케일, 프레임 보간, AI 음성.",
        },
        tags: { en: "ComfyUI · WAN2.2", zh: "ComfyUI · WAN2.2", ja: "ComfyUI · WAN2.2", ko: "ComfyUI · WAN2.2" },
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
        tags: { en: "GLSL · Voxelization", zh: "GLSL · 体素化", ja: "GLSL · ボクセル化", ko: "GLSL · 복셀화" },
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
    // 左栏大标题：本地语言的「技术」+ 英文 Technical（英文界面只显示 Technical）
    techHeading: { en: "Technical", zh: "技术 Technical", ja: "技術 Technical", ko: "기술 Technical" } as Multilingual,
    // 左栏大标题下面那条黄条上的字
    tech: { en: "PCG · Geometry Processing · Neural Rendering", zh: "PCG · 几何处理 · 神经渲染", ja: "PCG · ジオメトリ処理 · ニューラルレンダリング", ko: "PCG · 지오메트리 처리 · 뉴럴 렌더링" } as Multilingual,
    art: { en: "Art", zh: "美术", ja: "アート", ko: "아트" } as Multilingual,
};
