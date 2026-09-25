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
        projectId: "technical-project-smart-pot-joi",
        caption: {
            en: "An award-winning AI IoT plant pot: voice interaction, emotion detection and live plant monitoring.",
            zh: "获奖的 AI IoT 智能花盆：语音交互、情绪识别与植物状态实时监测。",
            ja: "受賞した AI IoT プランター。音声対話、感情認識、植物の状態のリアルタイム監視。",
            ko: "수상한 AI IoT 화분. 음성 상호작용, 감정 인식, 식물 상태 실시간 모니터링.",
        },
        tags: { en: "Tech Lead · Spring Boot · IoT", zh: "技术组长 · Spring Boot · IoT", ja: "テックリード · Spring Boot · IoT", ko: "기술 리드 · Spring Boot · IoT" },
    },
    {
        projectId: "technical-project-vbgmm",
        caption: {
            en: "Hand-derived variational Bayesian inference for a Gaussian mixture model, checked against Scikit-learn's implementation.",
            zh: "从零推导并实现高斯混合模型的变分贝叶斯推断，并与 Scikit-learn 的实现对照验证。",
            ja: "ガウス混合モデルの変分ベイズ推論を一から導出・実装し、Scikit-learn の実装と照らし合わせて検証。",
            ko: "가우시안 혼합 모델의 변분 베이즈 추론을 처음부터 유도·구현하고 Scikit-learn 구현과 대조해 검증했습니다.",
        },
        tags: { en: "Python · Variational Inference · Machine Learning", zh: "Python · 变分推断 · 机器学习", ja: "Python · 変分推論 · 機械学習", ko: "Python · 변분 추론 · 머신러닝" },
    },
    {
        projectId: "technical-project-dog-breed-classification",
        caption: {
            en: "An Oxford AI summer programme project: dog-breed image classification with transfer learning and data augmentation.",
            zh: "牛津 AI 暑期课程项目：用迁移学习与数据增强做犬种图像识别。",
            ja: "オックスフォード AI サマープログラムの課題。転移学習とデータ拡張による犬種の画像認識。",
            ko: "옥스퍼드 AI 여름 프로그램 프로젝트. 전이 학습과 데이터 증강으로 견종 이미지를 분류합니다.",
        },
        tags: { en: "Oxford · Team Lead · Transfer Learning", zh: "牛津 · 组长 · 迁移学习", ja: "オックスフォード · リーダー · 転移学習", ko: "옥스퍼드 · 팀장 · 전이 학습" },
    },
];

export const aiAppLabels = {
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
};
