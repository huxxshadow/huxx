// src/i18n/components/PongGame_i18.ts
import type { Multilingual } from "@/i18n.ts";

// 首屏标题位随机轮播的颜文字，与语言无关，因此不走 Multilingual
export const KAOMOJI: string[] = [
    "( ^ω^)",
    "( ºΔº )",
    "(≧∀≦)ゞ",
    "(っ´ω`c)",
    "(๑´ڡ`๑)",
    "=ᗜωᗜ=",
    "( ˘ω˘ )",
    "( •̀ω•́ )✧",
    "(・∀・)",
    "ヽ(*⌒▽⌒*)ﾉ",
    "(*ﾉ∀`*)",
    "( ๑>ᴗ<๑ )",
];

export const pongTranslations: Record<string, Multilingual> = {
    startGame: {
        en: "Start Game",
        zh: "开始游戏",
        ja: "ゲーム開始",
        ko: "게임 시작",
    },
    tryNow: {
        en: "Try now",
        zh: "立即体验",
        ja: "今すぐプレイ",
        ko: "지금 플레이",
    },
    resumeGame: {
        en: "Resume Game",
        zh: "继续游戏",
        ja: "ゲーム再開",
        ko: "게임 재개",
    },
    pressWS: {
        en: "Press WS",
        zh: "按下 WS 键",
        ja: "WSキーを押す",
        ko: "WS 키를 누르세요",
    },
    level: {
        en: "LV ",
        zh: "关卡 ",
        ja: "LV ",
        ko: "LV ",
    },
    touchScreen: {
        en: "Swipe Screen",
        zh: "滑动屏幕",
        ja: "スワイプ",
        ko: "화면 스와이프",
    },
};