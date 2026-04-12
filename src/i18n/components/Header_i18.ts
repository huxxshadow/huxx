// src/i18n/components/Header_i18.ts
import type { Multilingual } from "@/i18n";

export const navTranslations: Record<string, Multilingual> = {
    home: {
        en: "Home",
        zh: "首页",
        ja: "ホーム",
        ko: "홈",
    },
    blog: {
        en: "Blog",
        zh: "博客",
        ja: "ブログ",
        ko: "블로그",
    },
    portfolio: {
        en: "Portfolio",
        zh: "作品集",
        ja: "ポートフォリオ",
        ko: "포트폴리오",
    },
    about: {
        en: "About Me",
        zh: "关于我",
        ja: "私について",
        ko: "내 소개",
    },
};

export const headerTooltipsTranslations: Record<string, Multilingual> = {
    levelTooltip: {
        en: "Gain EXP every second. Level up to unlock features!",
        zh: "每秒获得经验，升级解锁更多功能！",
        ja: "毎秒経験値を獲得。レベルアップで機能解放！",
        ko: "매초 경험치 획득. 레벨업으로 기능 해제!",
    },
    expTooltipPrefix: {
        en: "EXP:",
        zh: "经验值:",
        ja: "経験値:",
        ko: "EXP:",
    },
    expRateSuffix: {
        en: "/s",
        zh: "/秒",
        ja: "/秒",
        ko: "/초",
    },
};

// ========== 通用 badge 翻译注册表 ==========
// 新增 badge 只需在此追加一个 key 即可
export const badgeTranslations: Record<string, any> = {
    pong: {
        label: "Pong",
        bonusPrefix: {
            en: "Bonus: +",
            zh: "经验加成: +",
            ja: "ボーナス: +",
            ko: "경험치 보너스: +",
        },
        unit: {
            en: " EXP/s",
            zh: " 经验/秒",
            ja: " 経験値/秒",
            ko: " EXP/초",
        },
        levels: {
            1: {
                name: { en: "Pong Junior", zh: "Pong 初级", ja: "Pong 初級", ko: "Pong 초급" },
                desc: { en: "Reached Level 1", zh: "已达到第 1 级", ja: "レベル 1 に到達", ko: "레벨 1 달성" },
            },
            2: {
                name: { en: "Pong Intermediate", zh: "Pong 中级", ja: "Pong 中級", ko: "Pong 중급" },
                desc: { en: "Reached Level 2", zh: "已达到第 2 级", ja: "レベル 2 に到達", ko: "레벨 2 달성" },
            },
            3: {
                name: { en: "Pong Senior", zh: "Pong 高级", ja: "Pong 上級", ko: "Pong 고급" },
                desc: { en: "Reached Level 3", zh: "已达到第 3 级", ja: "レベル 3 に到達", ko: "레벨 3 달성" },
            },
            4: {
                name: { en: "Pong Elite", zh: "Pong 精英", ja: "Pong エリート", ko: "Pong 엘리트" },
                desc: { en: "Reached Level 4", zh: "已达到第 4 级", ja: "レベル 4 に到達", ko: "레벨 4 달성" },
            },
            5: {
                name: { en: "Pong Master", zh: "Pong 大师", ja: "Pong マスター", ko: "Pong 마스터" },
                desc: { en: "Reached Level 5", zh: "已达到第 5 级", ja: "レベル 5 に到達", ko: "레벨 5 달성" },
            },
            6: {
                name: { en: "Pong Peak", zh: "Pong 巅峰", ja: "Pong 頂上", ko: "Pong 정점" },
                desc: { en: "Reached Level 6", zh: "已达到第 6 级", ja: "レベル 6 に到達", ko: "레벨 6 달성" },
            },
        },
    },

    brick: {
        label: "Brick",
        bonusPrefix: {
            en: "Bonus: +",
            zh: "经验加成: +",
            ja: "ボーナス: +",
            ko: "경험치 보너스: +",
        },
        unit: {
            en: " EXP/s",
            zh: " 经验/秒",
            ja: " 経験値/秒",
            ko: " EXP/초",
        },
        levels: {
            1: {
                name: { en: "Brick Junior", zh: "打砖块 初级", ja: "ブロック崩し 初級", ko: "벽돌깨기 초급" },
                desc: { en: "Reached Level 1", zh: "已达到第 1 级", ja: "レベル 1 に到達", ko: "레벨 1 달성" },
            },
            2: {
                name: { en: "Brick Intermediate", zh: "打砖块 中级", ja: "ブロック崩し 中級", ko: "벽돌깨기 중급" },
                desc: { en: "Reached Level 2", zh: "已达到第 2 级", ja: "レベル 2 に到達", ko: "레벨 2 달성" },
            },
            3: {
                name: { en: "Brick Senior", zh: "打砖块 高级", ja: "ブロック崩し 上級", ko: "벽돌깨기 고급" },
                desc: { en: "Reached Level 3", zh: "已达到第 3 级", ja: "レベル 3 に到達", ko: "레벨 3 달성" },
            },
            4: {
                name: { en: "Brick Elite", zh: "打砖块 精英", ja: "ブロック崩し エリート", ko: "벽돌깨기 엘리트" },
                desc: { en: "Reached Level 4", zh: "已达到第 4 级", ja: "レベル 4 に到達", ko: "레벨 4 달성" },
            },
            5: {
                name: { en: "Brick Master", zh: "打砖块 大师", ja: "ブロック崩し マスター", ko: "벽돌깨기 마스터" },
                desc: { en: "Reached Level 5", zh: "已达到第 5 级", ja: "レベル 5 に到達", ko: "레벨 5 달성" },
            },
            6: {
                name: { en: "Brick Peak", zh: "打砖块 巅峰", ja: "ブロック崩し 頂上", ko: "벽돌깨기 정점" },
                desc: { en: "Reached Level 6", zh: "已达到第 6 级", ja: "レベル 6 に到達", ko: "레벨 6 달성" },
            },
        },
    },
};