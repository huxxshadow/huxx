import type { Multilingual } from "@/i18n";

// Part 5 · 技术美术：吉祥物站在中间，左边「技术」、右边「美术」两个板块。
// 每项一句话和标签（标签用「·」分隔），文案取自各项目详情页。
export interface TechArtWork {
    projectId: string;
    side: "tech" | "art";
    /** 这一页卡片上的标题；不写就用项目本身的标题 */
    title?: Multilingual;
    /** 目前卡片上不显示说明，只留作备用 */
    caption?: Multilingual;
    tags: Multilingual;
}

export const techArtWorks: TechArtWork[] = [
    // ---------- 技术 ----------
    {
        projectId: "technical-project-element-workshop",
        side: "tech",
        title: { en: "Element Workshop", zh: "元素工坊", ja: "元素工房", ko: "원소 공방" },
        caption: {
            en: "A falling-sand physics and chemistry sandbox simulated on the GPU, lit by Radiance Cascades with layered materials.",
            zh: "在 GPU 上逐像素模拟的落沙物理化学沙盒，Radiance Cascades 光照与分层材质渲染。",
            ja: "GPU でピクセルごとにシミュレートするフォーリングサンドの物理・化学サンドボックス。Radiance Cascades のライティングとレイヤー構造のマテリアル。",
            ko: "GPU에서 픽셀 단위로 시뮬레이션하는 폴링 샌드 물리·화학 샌드박스, Radiance Cascades 조명과 레이어 머티리얼 렌더링.",
        },
        tags: { en: "GLSL · Physics Simulation", zh: "GLSL · 物理模拟", ja: "GLSL · 物理シミュレーション", ko: "GLSL · 물리 시뮬레이션" },
    },
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

    // ---------- 美术（01 Arcane Samurai、02 横版格斗特写、03 分形骷髅、04 失落领域、05 鳗、06 岛屿影视化）----------
    {
        projectId: "game-project-arcane-samurai",
        side: "art",
        tags: { en: "2D Shader · NPR", zh: "2D Shader · NPR", ja: "2D シェーダー · NPR", ko: "2D 셰이더 · NPR" },
    },
    {
        projectId: "art-project-black-flash-cut-in",
        side: "art",
        // 日文全称在卡片里会被截断，这一栏用短的
        title: { en: "Side-Scrolling Fighting Close-Up", zh: "横版格斗特写", ja: "格闘カットイン", ko: "횡스크롤 격투 클로즈업" },
        caption: {
            en: "Anime impact frames re-drawn from the real frame in post-process, plus Persona-style skill cut-ins in UE5.",
            zh: "UE5 里用后处理把真实画面重绘成动漫冲击帧「黑闪」，以及女神异闻录风格的技能特写。",
            ja: "UE5 で実際の画面をポストプロセスでアニメ調のインパクトフレーム「黒閃」に描き直し、ペルソナ風スキルカットインも実装。",
            ko: "UE5에서 실제 화면을 포스트 프로세스로 애니메이션 임팩트 프레임 '흑섬'으로 다시 그리고, 페르소나 스타일 스킬 컷인을 구현했습니다.",
        },
        tags: { en: "UE5 · Post-Process · NPR", zh: "UE5 · 后处理 · NPR", ja: "UE5 · ポストプロセス · NPR", ko: "UE5 · 포스트 프로세스 · NPR" },
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
        tags: { en: "Blender · Geometry Processing", zh: "Blender · 几何处理", ja: "Blender · ジオメトリ処理", ko: "Blender · 지오메트리 처리" },
    },
    {
        projectId: "game-project-lost-realm",
        side: "art",
        tags: { en: "2D Shader · NPR", zh: "2D Shader · NPR", ja: "2D シェーダー · NPR", ko: "2D 셰이더 · NPR" },
    },
    {
        projectId: "game-project-eel-on-mask",
        side: "art",
        tags: { en: "2D Shader · NPR", zh: "2D Shader · NPR", ja: "2D シェーダー · NPR", ko: "2D 셰이더 · NPR" },
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
        tags: { en: "UE5 · PBR", zh: "UE5 · PBR", ja: "UE5 · PBR", ko: "UE5 · PBR" },
    },
];

export const techArtLabels = {
    // 左栏大标题：本地语言的「技术」+ 英文 Technical（英文界面只显示 Technical）
    techHeading: { en: "Technical", zh: "技术 Technical", ja: "技術 Technical", ko: "기술 Technical" } as Multilingual,
    // 左栏大标题下面那条黄条上的字
    tech: { en: "PCG · Geometry Processing · Neural Rendering", zh: "PCG · 几何处理 · 神经渲染", ja: "PCG · ジオメトリ処理 · ニューラルレンダリング", ko: "PCG · 지오메트리 처리 · 뉴럴 렌더링" } as Multilingual,
    // 右栏大标题（和左栏对称）
    artHeading: { en: "Art", zh: "美术 Art", ja: "美術 Art", ko: "미술 Art" } as Multilingual,
    // 右栏大标题下面那条黄条上的字
    art: { en: "3D Scenes · 2D Scenes · NPR · PBR", zh: "3D 场景 · 2D 场景 · NPR · PBR", ja: "3D シーン · 2D シーン · NPR · PBR", ko: "3D 씬 · 2D 씬 · NPR · PBR" } as Multilingual,
};
