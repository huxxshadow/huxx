import type { Multilingual } from "@/i18n.ts";
import NeteaseLogo from "@/assets/netease.svg";
import TimiLogo from "@/assets/timi.svg";
import MedmindLogo from "@/assets/Medmind.svg";
import SoftenLogo from "@/assets/softengravity.svg";
export interface ExperienceData {
    logo: any; // 对应组件内的 Logo 映射
    logoSize: string;
    company: Multilingual;
    fullName: Multilingual;
    role: Multilingual;
    date: Multilingual;
    bullets: Multilingual[];
    tags: Multilingual[];
}

export const experienceListData: ExperienceData[] = [
    // --- Experience 1: NetEase Games ---
    {
        logo: NeteaseLogo,
        logoSize: "w-36 h-36 lg:w-44 lg:h-44",
        company: { en: "NetEase Games", zh: "网易互娱", ja: "NetEase Games", ko: "NetEase Games" },
        fullName: {
            en: "NetEase Interactive Entertainment (Guangzhou) Co., Ltd. — Technology Center",
            zh: "网易互娱（广州）有限公司 技术中心",
            ja: "網易互娯（広州）有限公司 テクノロジーセンター",
            ko: "넷이즈 게임즈 (광저우) — 기술 센터"
        },
        role: {
            en: "AI Application Engineer Intern",
            zh: "AI应用工程师实习生",
            ja: "AIアプリケーションエンジニアインターン",
            ko: "AI 애플리케이션 엔지니어 인턴"
        },
        date: {
            en: "Jun 2026 – Aug 2026",
            zh: "2026年6月 – 2026年8月",
            ja: "2026年6月 – 2026年8月",
            ko: "2026년 6월 – 2026년 8월"
        },
        bullets: [
            {
                en: "Contributed to building an AI agent toolchain for game development, covering the programming, design, art, and audio stages of the 2D game production pipeline.",
                zh: "参与游戏研发智能体工具链建设，面向 2D 游戏研发流程中的开发、策划、美术、音频等环节。",
                ja: "ゲーム開発向けAIエージェントツールチェーンの構築に参加し、2Dゲーム開発フローにおけるプログラミング、企画、アート、オーディオの各工程をカバーしました。",
                ko: "게임 개발용 AI 에이전트 툴체인 구축에 참여하여, 2D 게임 개발 파이프라인의 개발·기획·아트·오디오 단계를 지원했습니다."
            },
            {
                en: "Designed and implemented a general-purpose 2D game screen understanding agent tool, enabling LLMs to perform game state recognition, behavioral decision-making, and automated testing.",
                zh: "设计并实现通用性 2D 游戏画面理解 Agent 工具，辅助大模型进行游戏状态判断、行为决策与自动化测试。",
                ja: "汎用的な2Dゲーム画面理解エージェントツールを設計・実装し、大規模言語モデルによるゲーム状態の判定、行動判断、自動テストを支援しました。",
                ko: "범용 2D 게임 화면 이해 Agent 툴을 설계 및 구현하여, 대규모 언어 모델의 게임 상태 판단, 행동 결정 및 자동화 테스트를 지원했습니다."
            },
            {
                en: "Prototyped game demos built around AI-native gameplay concepts.",
                zh: "围绕 AI 原生玩法进行游戏Demo原型开发。",
                ja: "AIネイティブなゲームプレイを軸としたゲームデモのプロトタイプ開発を行いました。",
                ko: "AI 네이티브 게임플레이를 중심으로 게임 데모 프로토타입을 개발했습니다."
            }
        ],
        tags: [
            { en: "AI Agent", zh: "AI Agent", ja: "AIエージェント", ko: "AI 에이전트" },
            { en: "Dev Toolchain", zh: "游戏研发工具链", ja: "開発ツールチェーン", ko: "개발 툴체인" },
            { en: "2D Screen Understanding", zh: "2D画面理解", ja: "2D画面理解", ko: "2D 화면 이해" },
            { en: "AI-Native Gameplay", zh: "AI原生玩法", ja: "AIネイティブなゲームプレイ", ko: "AI 네이티브 게임플레이" }
        ]
    },

    // --- Experience 2: Timi Studio ---
    {
        logo: TimiLogo,
        logoSize: "w-32 h-32 lg:w-40 lg:h-40",
        company: { en: "Timi Studio", zh: "天美工作室", ja: "TiMi Studio", ko: "TiMi Studio" },
        fullName: {
            en: "Tencent Technology (Shanghai) Limited",
            zh: "腾讯科技（上海）有限公司",
            ja: "テンセント・テクノロジー（上海）",
            ko: "텐센트 테크놀로지 (상하이)"
        },
        role: {
            en: "Combat Designer Intern",
            zh: "战斗策划实习生",
            ja: "コンバットデザインインターン",
            ko: "전투 기획 인턴"
        },
        date: {
            en: "May 2025 – Aug 2025",
            zh: "2025年5月 – 2025年8月",
            ja: "2025年5月 – 2025年8月",
            ko: "2025년 5월 – 2025년 8월"
        },
        bullets: [
            {
                en: "Optimized core combat experience and combat mechanics design, contributing to the 3C design, skill system, and behavior tree AI for the World Boss.",
                zh: "优化核心战斗体验与机制设计，参与世界BOSS的战斗3C设计、技能系统以及行为树AI。",
                ja: "コアとなる戦闘体験と戦闘メカニクスの設計を最適化し、ワールドボスの3C設計、スキルシステム、ビヘイビアツリーAIに携わりました。",
                ko: "핵심 전투 경험과 전투 메커니즘 설계를 최적화하고, 월드 보스의 3C 설계, 스킬 시스템 및 행동 트리 AI 개발에 참여했습니다."
            },
            {
                en: "Served as the PO for a new combat mechanic, overseeing the full process from concept design and gameplay logic construction to integration, validation, and implementation.",
                zh: "作为新战斗机制的PO，负责该机制从方案设计、逻辑链搭建到联调验证与落地实现的完整流程。",
                ja: "新たな戦闘メカニクスのPOとして、企画設計、ロジック構築から結合検証、実装への落とし込みまでの一連のプロセスを担当しました。",
                ko: "신규 전투 메커니즘의 PO로서, 기획 설계와 로직 구조 설계부터 통합 검증 및 실제 구현까지의 전체 과정을 담당했습니다."
            },
            {
                en: "Rapidly developed and deployed Python-based automated data processing scripts, optimizing configuration logic to meet special requirements and improve workflow efficiency.",
                zh: "快速开发部署Python数据处理自动化脚本，优化配置逻辑，满足特殊需求，提升配置效率。",
                ja: "Pythonベースのデータ処理自動化スクリプトを迅速に開発・導入し、設定ロジックを最適化することで、特殊要件への対応と設定効率の向上を実現しました。",
                ko: "Python 기반 데이터 처리 자동화 스크립트를 신속하게 개발 및 배포하고, 설정 로직을 최적화하여 특수 요구사항을 충족시키고 작업 효율을 향상시켰습니다."
            }
        ],
        tags: [
            { en: "Combat Design", zh: "战斗设计", ja: "コンバットデザイン", ko: "전투 기획" },
            { en: "3C Design", zh: "3C设计", ja: "3Cデザイン", ko: "3C 설계" },
            { en: "Behavior Tree AI", zh: "行为树AI", ja: "ビヘイビアツリーAI", ko: "행동 트리 AI" },
            { en: "Python Tools", zh: "Python工具开发", ja: "Pythonツール開発", ko: "Python 툴 개발" }
        ]
    },

    // --- Experience 3: Medmind ---
    {
        logo: MedmindLogo,
        logoSize: "w-32 h-32 lg:w-40 lg:h-40",
        company: { en: "Medmind", zh: "Medmind", ja: "Medmind", ko: "Medmind" },
        fullName: {
            en: "Medmind Technology Limited",
            zh: "Medmind Technology Limited",
            ja: "Medmind Technology Limited",
            ko: "Medmind Technology Limited"
        },
        role: {
            en: "Game Developer Intern",
            zh: "游戏开发实习生",
            ja: "ゲーム開発インターン",
            ko: "게임 개발 인턴"
        },
        date: {
            en: "Jun 2024 – Aug 2024",
            zh: "2024年6月 – 2024年8月",
            ja: "2024年6月 – 2024年8月",
            ko: "2024년 6월 – 2024년 8월"
        },
        bullets: [
            {
                en: "Deployed a Unity in-game text-to-speech (TTS) workflow for 50+ mini-games.",
                zh: "部署了用于50余款小游戏的 Unity 游戏内文本转语音（TTS）工作流。",
                ja: "50本以上のミニゲーム向けに、Unityゲーム内テキスト読み上げ（TTS）ワークフローを導入。",
                ko: "50개 이상의 미니 게임을 위해 Unity 게임 내 텍스트 음성 변환(TTS) 워크플로를 구축했습니다."
            },
            {
                en: "Rapidly prototyped concepts such as an AI Cantonese doll and a voice-cloning AI conversation application.",
                zh: "短时间内快速原型化了如 AI 粤语玩偶和音色提取 AI 对话应用程序等概念。",
                ja: "AI広東語人形や音声特徴抽出を活用したAI会話アプリなどのコンセプトを短期間でプロトタイプ化。",
                ko: "AI 광둥어 인형과 음색 추출 기반 AI 대화 애플리케이션 등의 개념을 단기간에 신속히 프로토타이핑했습니다."
            },
            {
                en: "Applied machine learning models and AI tools to optimize workflows, reducing costs and improving efficiency.",
                zh: "应用机器学习模型，利用 AI 工具优化工作流，降低成本并提高效率。",
                ja: "機械学習モデルとAIツールを活用してワークフローを最適化し、コスト削減と効率向上を実現。",
                ko: "기계 학습 모델과 AI 도구를 활용해 워크플로를 최적화하고 비용을 절감하며 효율을 향상시켰습니다."
            }
        ],
        tags: [
            { en: "Unity", zh: "Unity", ja: "Unity", ko: "Unity" },
            { en: "Text-to-Speech (TTS)", zh: "文本转语音 (TTS)", ja: "音声合成 (TTS)", ko: "텍스트 음성 변환 (TTS)" },
            { en: "Rapid Prototyping", zh: "快速原型开发", ja: "ラピッドプロトタイピング", ko: "신속한 프로토타이핑" },
            { en: "Machine Learning", zh: "机器学习", ja: "機械学習", ko: "기계 학습" }
        ]
    },

    // --- Experience 4: SoftenGravity ---
    {
        logo: SoftenLogo,
        logoSize: "w-32 h-32 lg:w-40 lg:h-40",
        company: { en: "SoftenGravity", zh: "SoftenGravity", ja: "SoftenGravity", ko: "SoftenGravity" },
        fullName: {
            en: "SoftenGravity Limited",
            zh: "SoftenGravity Limited",
            ja: "SoftenGravity Limited",
            ko: "SoftenGravity Limited"
        },
        role: {
            en: "Developer Team Leader",
            zh: "开发团队负责人",
            ja: "開発チームリーダー",
            ko: "개발 팀 리더"
        },
        date: {
            en: "Sep 2023 - Jan 2025",
            zh: "2023年9月 - 2025年1月",
            ja: "2023年9月 - 2025年1月",
            ko: "2023년 9월 - 2025년 1월"
        },
        bullets: [
            {
                en: "Co-found AI technology company operating with (HKU, McGill, HKBU) students.",
                zh: "与（香港大学、麦吉尔大学、香港浸会大学）的学生共同创立AI科技公司。",
                ja: "（HKU、McGill、HKBU）の学生と共にAIテクノロジー企業を共同設立。",
                ko: "(홍콩대, 맥길대, 홍콩 침례대) 학생들과 함께 AI 기술 회사 공동 창립."
            },
            {
                en: "Design and implement smart AI pot that enables plants to \"talk\" and integrates AI planting caring system.",
                zh: "设计并实现智能AI花盆，让植物能够“说话”，并集成AI植物养护系统。",
                ja: "植物が「話す」ことができるスマートAIポットを設計・実装し、AI植栽ケアシステムを統合。",
                ko: "식물이 '말'할 수 있게 하고 AI 식물 관리 시스템을 통합하는 스마트 AI 화분 설계 및 구현."
            },
            {
                en: "Led the technical team in building full-stack architecture, developing frontend and backend systems, and overseeing the product lifecycle from hardware design to feature development, testing, and system architecture.",
                zh: "领导技术团队构建全栈架构，开发前后端系统，并负责从硬件设计、功能开发到测试与系统架构设计的完整产品生命周期。",
                ja: "技術チームを率いてフルスタックアーキテクチャを構築し、フロントエンド・バックエンドを開発。さらに、ハードウェア設計、機能開発、テスト、システムアーキテクチャ設計まで製品ライフサイクル全体を統括。",
                ko: "기술 팀을 이끌며 풀스택 아키텍처를 구축하고 프론트엔드 및 백엔드 시스템을 개발했으며, 하드웨어 설계부터 기능 개발, 테스트, 시스템 아키텍처 설계까지 제품 라이프사이클 전반을 총괄했습니다."
            }
        ],
        tags: [
            { en: "Full-Stack Architecture", zh: "全栈架构", ja: "フルスタック開発", ko: "풀스택 아키텍처" },
            { en: "Hardware Integration", zh: "硬件集成", ja: "ハードウェア統合", ko: "하드웨어 통합" },
            { en: "Team Leadership", zh: "团队管理", ja: "チームリーダーシップ", ko: "팀 리더십" },
            { en: "System Design", zh: "系统设计", ja: "システム設計", ko: "시스템 설계" }
        ]
    }
];