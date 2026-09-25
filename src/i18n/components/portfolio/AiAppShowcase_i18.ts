import type { Multilingual } from "@/i18n";

// Part 4 · AI 应用开发：卡片上的一句话和标签（标签用「·」分隔）。文案取自各项目详情页。
export interface AiWork {
    projectId: string;
    caption: Multilingual;
    tags: Multilingual;
}

export const aiWorks: AiWork[] = [
    {
        projectId: "technical-project-terraria-ai-teammate",
        caption: {
            en: "A Terraria AI teammate: a behavior tree keeps the classic game-AI shape, and the judgment calls go to an LLM.",
            zh: "泰拉瑞亚 AI 队友：行为树保留传统游戏 AI 的骨架，把需要判断的节点交给大模型。",
            ja: "テラリアの AI 仲間。ビヘイビアツリーで従来のゲーム AI の骨格を保ち、判断が必要なノードを LLM に任せる。",
            ko: "테라리아 AI 동료. 비헤이비어 트리로 전통적인 게임 AI의 뼈대를 유지하고, 판단이 필요한 노드는 LLM에 맡깁니다.",
        },
        tags: { en: "tModLoader · C# · LLM · Game AI", zh: "tModLoader · C# · LLM · 游戏 AI", ja: "tModLoader · C# · LLM · ゲーム AI", ko: "tModLoader · C# · LLM · 게임 AI" },
    },
    {
        projectId: "game-project-night-watch",
        caption: {
            en: "An AI-native card roguelike: the LLM generates content at runtime while rules and numbers stay in code.",
            zh: "AI 原生卡牌 Roguelike：大模型在运行时生成内容，规则与数值留在代码里约束。",
            ja: "AI ネイティブなカードローグライク。LLM が実行時にコンテンツを生成し、ルールと数値はコードで制約する。",
            ko: "AI 네이티브 카드 로그라이크. LLM이 런타임에 콘텐츠를 생성하고, 규칙과 수치는 코드에서 제약합니다.",
        },
        tags: { en: "NetEase · React · Three.js · LLM", zh: "网易 · React · Three.js · LLM", ja: "NetEase · React · Three.js · LLM", ko: "NetEase · React · Three.js · LLM" },
    },
    {
        projectId: "technical-project-blender-inverse-lighting",
        caption: {
            en: "Differentiable rendering with Mitsuba 3 solves the lighting from an AI repaint and writes it back into the Blender scene.",
            zh: "基于 Mitsuba 3 可微渲染，从 AI 重绘图反向求解灯光，并写回 Blender 场景。",
            ja: "Mitsuba 3 の微分可能レンダリングで AI リペイントからライティングを逆算し、Blender のシーンに書き戻す。",
            ko: "Mitsuba 3 미분 가능 렌더링으로 AI 리페인트에서 조명을 역산해 Blender 씬에 다시 기록합니다.",
        },
        tags: { en: "Blender · Mitsuba 3 · Python · Differentiable Rendering", zh: "Blender · Mitsuba 3 · Python · 可微渲染", ja: "Blender · Mitsuba 3 · Python · 微分可能レンダリング", ko: "Blender · Mitsuba 3 · Python · 미분 가능 렌더링" },
    },
    {
        projectId: "technical-project-ai-pixelart-repair-tool",
        caption: {
            en: "Cleans up AI-generated pixel art: pixelation, color quantization and edge repair, with optional GPU acceleration.",
            zh: "修复 AI 生成的像素画：像素化、颜色量化与边缘修复，支持 GPU 加速。",
            ja: "AI 生成のピクセルアートを修復。ピクセル化、減色、エッジ修復に対応し、GPU で高速化も可能。",
            ko: "AI로 생성한 픽셀 아트를 복원합니다. 픽셀화, 색상 양자화, 가장자리 복원을 지원하고 GPU 가속도 가능합니다.",
        },
        tags: { en: "Gradio · Scikit-learn · cuML", zh: "Gradio · Scikit-learn · cuML", ja: "Gradio · Scikit-learn · cuML", ko: "Gradio · Scikit-learn · cuML" },
    },
    {
        projectId: "technical-project-mario-ddqn",
        caption: {
            en: "Trains Mario to play on his own with DDQN: convolutional networks, experience replay and a target network.",
            zh: "用 DDQN 训练马里奥自主游玩：卷积网络、经验回放与目标网络同步。",
            ja: "DDQN でマリオを自律プレイさせる。畳み込みネットワーク、経験再生、ターゲットネットワーク。",
            ko: "DDQN으로 마리오가 스스로 플레이하도록 학습합니다. 합성곱 신경망, 경험 재생, 타깃 네트워크.",
        },
        tags: { en: "TensorFlow · Reinforcement Learning", zh: "TensorFlow · 强化学习", ja: "TensorFlow · 強化学習", ko: "TensorFlow · 강화 학습" },
    },
    {
        projectId: "technical-project-comfyui-ai-eco-film",
        caption: {
            en: "A ComfyUI video workflow: storyboards, first-and-last-frame video synthesis, upscaling, frame interpolation and AI voice.",
            zh: "搭建 ComfyUI 视频工作流：分镜生成、首尾帧视频合成、超分、插帧与 AI 配音。",
            ja: "ComfyUI の映像ワークフロー。絵コンテ生成、始点・終点フレームからの動画合成、超解像、フレーム補間、AI 音声。",
            ko: "ComfyUI 영상 워크플로. 콘티 생성, 첫·끝 프레임 영상 합성, 업스케일, 프레임 보간, AI 음성.",
        },
        tags: { en: "Team Lead · ComfyUI · WAN2.2", zh: "组长 · ComfyUI · WAN2.2", ja: "リーダー · ComfyUI · WAN2.2", ko: "팀장 · ComfyUI · WAN2.2" },
    },
    {
        projectId: "technical-project-smart-pot-joi",
        caption: {
            en: "An award-winning AI IoT plant pot: voice interaction, emotion detection and live plant monitoring.",
            zh: "获奖的 AI IoT 智能花盆：语音交互、情绪识别与植物状态实时监测。",
            ja: "受賞した AI IoT プランター。音声対話、感情認識、植物の状態のリアルタイム監視。",
            ko: "수상한 AI IoT 화분. 음성 상호작용, 감정 인식, 식물 상태 실시간 모니터링.",
        },
        tags: { en: "Tech Lead · Spring Boot · IoT", zh: "技术组长 · Spring Boot · IoT", ja: "テックリード · Spring Boot · IoT", ko: "기술 리드 · Spring Boot · IoT" },
    },
];

export const aiAppLabels = {
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
};
