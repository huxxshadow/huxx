import type { Multilingual } from "@/i18n";

// Part 4 · AI 应用开发：卡片上的一句话和标签（标签用「·」分隔）。文案取自各项目详情页。
export interface AiWork {
    projectId: string;
    /** 这一页卡片上的标题；不写就用项目本身的标题 */
    title?: Multilingual;
    caption: Multilingual;
    tags: Multilingual;
}

export const aiWorks: AiWork[] = [
    {
        projectId: "technical-project-terraria-ai-teammate",
        caption: {
            en: "Combines the JEV model with a classic behavior tree to strengthen game-AI decision-making.",
            zh: "融合 JEV 模型与传统行为树，增强游戏 AI 决策能力。",
            ja: "JEV モデルと従来のビヘイビアツリーを組み合わせ、ゲーム AI の意思決定を強化。",
            ko: "JEV 모델과 전통적인 비헤이비어 트리를 결합해 게임 AI의 의사결정을 강화했습니다.",
        },
        tags: { en: "Game AI · LLM · C#", zh: "游戏AI · LLM · C#", ja: "ゲーム AI · LLM · C#", ko: "게임 AI · LLM · C#" },
    },
    {
        projectId: "technical-project-blender-inverse-lighting",
        title: { en: "AI Neural Inverse Lighting with Mitsuba 3", zh: "基于Mitsuba3的灯光逆向AI神经渲染", ja: "Mitsuba 3 による AI ニューラル逆ライティング", ko: "Mitsuba 3 기반 AI 뉴럴 조명 역렌더링" },
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
    {
        projectId: "technical-project-variational-applications",
        caption: {
            en: "Applies variational methods to real data: a temporal VAE and a Transformer forecast dengue in Hong Kong, plus land-use reconstruction and photo restoration.",
            zh: "把变分方法用在真实数据上：时序 VAE 与 Transformer 预测香港登革热，并尝试土地利用重建与老照片修复。",
            ja: "変分法を実データに応用。時系列 VAE と Transformer で香港のデング熱を予測し、土地利用の再構成や古写真の修復も試した。",
            ko: "변분 방법을 실제 데이터에 적용. 시계열 VAE와 Transformer로 홍콩 뎅기열을 예측하고, 토지 이용 복원과 옛 사진 복원도 시도했습니다.",
        },
        tags: { en: "Team Lead · VAE · Transformer", zh: "组长 · VAE · Transformer", ja: "リーダー · VAE · Transformer", ko: "팀장 · VAE · Transformer" },
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
        projectId: "technical-project-online-shoppers-intention",
        caption: {
            en: "End-to-end purchase-intent modelling: EDA, feature engineering, classification with threshold tuning, SHAP explanations and K-Means segments.",
            zh: "端到端的购买意图建模：EDA、特征工程、分类与阈值优化，SHAP 可解释性分析与 K-Means 客户分群。",
            ja: "購買意図のエンドツーエンドな分析。EDA、特徴量設計、分類としきい値の最適化、SHAP による解釈、K-Means による顧客セグメント。",
            ko: "구매 의도를 끝까지 모델링. EDA, 특성 공학, 분류와 임계값 최적화, SHAP 해석, K-Means 고객 세분화.",
        },
        tags: { en: "Team Lead · Scikit-learn · SHAP", zh: "组长 · Scikit-learn · SHAP", ja: "リーダー · Scikit-learn · SHAP", ko: "팀장 · Scikit-learn · SHAP" },
    },
];

export const aiAppLabels = {
    projects: { en: "projects", zh: "个项目", ja: "件", ko: "개 프로젝트" } as Multilingual,
};
