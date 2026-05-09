import type { Multilingual } from "@/i18n.ts";
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
    // --- Experience 1: Timi Studio ---
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

    // --- Experience 2: Medmind ---
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
                en: "Deploy text to speech (TTS) pipelines for generating unity in-game audio for 50+ mini games.",
                zh: "部署文本转语音（TTS）管线，为50余款迷你游戏生成Unity游戏内音频。",
                ja: "50以上のミニゲームのUnityゲーム内オーディオを生成するためのTTSパイプラインを展開。",
                ko: "50개 이상의 미니 게임을 위한 Unity 게임 내 오디오를 생성하기 위해 TTS 파이프라인 배포."
            },
            {
                en: "Rapid-prototype concepts into programs, such as Cantonese AI doll and end-of-life care application in one week.",
                zh: "快速将概念制作成程序原型，例如在一周内开发出粤语AI玩偶和临终关怀应用。",
                ja: "広東語AI人形や終末期ケアアプリなどのコンセプトを1週間でプロトタイプ化。",
                ko: "광둥어 AI 인형 및 임종 돌봄 애플리케이션과 같은 개념을 1주일 만에 프로그램으로 신속하게 프로토타입 제작."
            },
            {
                en: "Deploy machine learning models for AI tools to streamline workflows, reducing costs and enhancing efficiency.",
                zh: "为AI工具部署机器学习模型以精简工作流，降低成本并提升效率。",
                ja: "ワークフローを合理化するAIツール用の機械学習モデルを展開し、コスト削減と効率向上を実現。",
                ko: "AI 도구를 위한 기계 학습 모델을 배포하여 워크플로우를 간소화하고 비용을 절감하며 효율성 향상."
            }
        ],
        tags: [
            { en: "Unity", zh: "Unity", ja: "Unity", ko: "Unity" },
            { en: "Text-to-Speech (TTS)", zh: "文本转语音 (TTS)", ja: "音声合成 (TTS)", ko: "텍스트 음성 변환 (TTS)" },
            { en: "Rapid Prototyping", zh: "快速原型开发", ja: "ラピッドプロトタイピング", ko: "신속한 프로토타이핑" },
            { en: "Machine Learning", zh: "机器学习", ja: "機械学習", ko: "기계 학습" }
        ]
    },

    // --- Experience 3: SoftenGravity ---
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
                en: "Lead tech team to build full-stack architecture including hardware, features, testing and system design.",
                zh: "带领技术团队构建全栈架构，涵盖硬件、功能特性、测试及系统设计。",
                ja: "技術チームを率いて、ハードウェア、機能、テスト、システム設計を含むフルスタックアーキテクチャを構築。",
                ko: "하드웨어, 기능, 테스트 및 시스템 설계를 포함한 풀스택 아키텍처를 구축하기 위해 기술 팀 리드."
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