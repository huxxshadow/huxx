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
            en: "Uses physically based differentiable rendering to solve 3D lighting back from a 2D image.",
            zh: "基于物理可微渲染，将 2D 图像反向求解为 3D 灯光。",
            ja: "物理ベースの微分可能レンダリングで、2D 画像から 3D ライティングを逆算。",
            ko: "물리 기반 미분 가능 렌더링으로 2D 이미지에서 3D 조명을 역으로 풀어냅니다.",
        },
        tags: { en: "Neural Rendering · Technical Art", zh: "神经渲染 · 技术美术", ja: "ニューラルレンダリング · テクニカルアート", ko: "뉴럴 렌더링 · 테크니컬 아트" },
    },
    {
        projectId: "game-project-night-watch",
        caption: {
            en: "Designed an LLM agent framework for concurrent, real-time game content generation.",
            zh: "设计支持并发实时游戏生成的 LLM Agent 框架。",
            ja: "並行してリアルタイムにゲームを生成できる LLM エージェントのフレームワークを設計。",
            ko: "동시에 실시간으로 게임을 생성할 수 있는 LLM 에이전트 프레임워크를 설계했습니다.",
        },
        tags: { en: "NetEase · Harness Engineering", zh: "网易 · Harness Engineering", ja: "NetEase · Harness Engineering", ko: "NetEase · Harness Engineering" },
    },
    {
        projectId: "technical-project-smart-pot-joi",
        caption: {
            en: "An award-winning entry in the Hong Kong AI Application Development Competition: a physical AI product.",
            zh: "香港 AI 应用开发大赛获奖作品，AI 实体产品。",
            ja: "香港 AI アプリケーション開発コンテストの受賞作。AI を搭載した実物のプロダクト。",
            ko: "홍콩 AI 애플리케이션 개발 대회 수상작. AI를 탑재한 실물 제품입니다.",
        },
        tags: { en: "Tech Lead · IoT · RAG", zh: "技术组长 · IoT · RAG", ja: "テックリード · IoT · RAG", ko: "기술 리드 · IoT · RAG" },
    },
    {
        projectId: "technical-project-vbgmm",
        title: { en: "VB-GMM", zh: "VB-GMM", ja: "VB-GMM", ko: "VB-GMM" },
        caption: {
            en: "Derived and implemented variational Bayesian inference for Gaussian mixture models from scratch.",
            zh: "从零推导并实现高斯混合模型的变分贝叶斯推断。",
            ja: "ガウス混合モデルの変分ベイズ推論を一から導出・実装。",
            ko: "가우시안 혼합 모델의 변분 베이즈 추론을 처음부터 유도하고 구현했습니다.",
        },
        tags: { en: "Python · Variational Inference", zh: "Python · 变分推断", ja: "Python · 変分推論", ko: "Python · 변분 추론" },
    },
    {
        projectId: "technical-project-dog-breed-classification",
        caption: {
            en: "Top score in the Oxford machine learning summer programme: a dog-breed image recognition model.",
            zh: "牛津机器学习暑期项目最高分，犬种图像识别模型。",
            ja: "オックスフォード機械学習サマープログラムで最高得点を獲得した犬種画像認識モデル。",
            ko: "옥스퍼드 머신러닝 여름 프로그램 최고점, 견종 이미지 인식 모델.",
        },
        tags: { en: "Oxford · Transfer Learning", zh: "牛津 · 迁移学习", ja: "オックスフォード · 転移学習", ko: "옥스퍼드 · 전이 학습" },
    },
    {
        projectId: "technical-project-variational-applications",
        caption: {
            en: "Model design based on variational methods, developed into applications on real-world data.",
            zh: "基于变分方法的模型设计，与真实数据应用开发。",
            ja: "変分法にもとづくモデル設計と、実データへの応用開発。",
            ko: "변분 방법 기반의 모델 설계와 실제 데이터 응용 개발.",
        },
        tags: { en: "Team Lead · VAE · Transformer", zh: "组长 · VAE · Transformer", ja: "リーダー · VAE · Transformer", ko: "팀장 · VAE · Transformer" },
    },
    {
        projectId: "technical-project-comfyui-ai-eco-film",
        title: { en: "ComfyUI AI Video Workflow", zh: "ComfyUI AI视频工作流", ja: "ComfyUI AI 動画ワークフロー", ko: "ComfyUI AI 영상 워크플로" },
        caption: {
            en: "Storyboard generation, first-and-last-frame video synthesis, upscaling, frame interpolation and AI voice.",
            zh: "分镜生成、首尾帧视频合成、超分、插帧与 AI 配音。",
            ja: "絵コンテ生成、始点・終点フレームからの動画合成、超解像、フレーム補間、AI 音声。",
            ko: "콘티 생성, 첫·끝 프레임 영상 합성, 업스케일, 프레임 보간, AI 음성.",
        },
        tags: { en: "Team Lead · ComfyUI · WAN2.2", zh: "组长 · ComfyUI · WAN2.2", ja: "リーダー · ComfyUI · WAN2.2", ko: "팀장 · ComfyUI · WAN2.2" },
    },
    {
        projectId: "technical-project-online-shoppers-intention",
        title: { en: "Shopper Data Analysis", zh: "购物者数据分析", ja: "購買者データ分析", ko: "구매자 데이터 분석" },
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
