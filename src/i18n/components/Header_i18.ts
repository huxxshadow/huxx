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
                name: { en: "Novice", zh: "初学者", ja: "初心者", ko: "초보자" },
                desc: { en: "Reached Level 1", zh: "已达到第 1 关", ja: "レベル 1 に到達", ko: "레벨 1 도달" }
            },
            2: {
                name: { en: "Learner", zh: "见习生", ja: "見習い", ko: "견습생" },
                desc: { en: "Reached Level 2", zh: "已达到第 2 关", ja: "レベル 2 に到達", ko: "레벨 2 도달" }
            },
            3: {
                name: { en: "Player", zh: "正式玩家", ja: "プレイヤー", ko: "플레이어" },
                desc: { en: "Reached Level 3", zh: "已达到第 3 关", ja: "レベル 3 に到達", ko: "레벨 3 도달" }
            },
            4: {
                name: { en: "Expert", zh: "专家", ja: "エキスパート", ko: "전문가" },
                desc: { en: "Reached Level 4", zh: "已达到第 4 关", ja: "レベル 4 に到達", ko: "레벨 4 도달" }
            },
            5: {
                name: { en: "Master", zh: "大师", ja: "マスター", ko: "마스터" },
                desc: { en: "Reached Level 5", zh: "已达到第 5 关", ja: "レベル 5 に到達", ko: "레벨 5 도달" }
            },
            6: {
                name: { en: "Legend", zh: "传奇", ja: "レジェンド", ko: "레전드" },
                desc: { en: "Reached Level 6", zh: "已达到第 6 关", ja: "レベル 6 に到達", ko: "레벨 6 도달" }
            }
        }
    }
};