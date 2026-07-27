
import type { Multilingual } from "@/i18n.ts";

export const SITE_TITLE: string | Multilingual = {
    en: "huxx - Portfolio",
    ja: "huxx - ポートフォリオ",
    ko: "huxx - 포트폴리오",
    zh: "huxx - 作品集",
};

export const SITE_DESCRIPTION: string | Multilingual = {
    en: "A portfolio of game design, game development, technical art, and full-stack projects by huxx.",
    zh: "huxx 的作品集网站，展示游戏设计、游戏开发、技术美术与全栈开发等方向的项目实践。",
    ja: "huxx のポートフォリオサイト。ゲームデザイン、ゲーム開発、テクニカルアート、フルスタック開発に関するプロジェクトを紹介しています。",
    ko: "huxx의 포트폴리오 사이트로, 게임 디자인, 게임 개발, 테크니컬 아트, 풀스택 개발 프로젝트를 소개합니다."
};

export const X_ACCOUNT: string | Multilingual = "@huxxshadow";

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
    en: "This page is not available in your language.",
    ja: "このページはご利用の言語でご覧いただけません。",
    ko: "이 페이지는 사용자의 언어로 제공되지 않습니다.",
    zh: "此页面不支持您的语言。",
};

export interface SocialLink {
    name: string;
    href: string;
    icon: string;
}

export const SOCIALS: SocialLink[] = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/zhenyuhuxx/",
        icon: "fa-linkedin-in",
    },
    {
        name: "GitHub",
        href: "https://github.com/huxxshadow",
        icon: "fa-github",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@huxx_",
        icon: "fa-youtube",
    },
    {
        name: "Bilibili",
        href: "https://space.bilibili.com/197808848",
        icon: "fa-bilibili",
    },
];


export interface ColorShade {
    light: string;
    dark: string;
}

export interface ColorPalette {
    red: ColorShade;
    yellow: ColorShade;
    blue: ColorShade;
    orange: ColorShade;
    green: ColorShade;
    purple: ColorShade;
    black: string;
    white: string;
    khakiMilan: string;
}

export const COLORS: ColorPalette = {
    red: {
        light: "#FFCABD",
        dark: "#D30000",
    },
    yellow: {
        light: "#FEF8BB",
        dark: "#F6A200",
    },
    blue: {
        light: "#CFE1EF",
        dark: "#0058C0",
    },
    orange: {
        light: "#FDCEA4",
        dark: "#F06E1C",
    },
    green: {
        light: "#BDF1CD",
        dark: "#16A062",
    },
    purple: {
        light: "#E8D6F4",
        dark: "#7B1897",
    },
    black: "#494949",
    white: "#FFFFFF",
    khakiMilan: "#F6EBD8",
};

/**
 * Monochrome blue scale (Material Blue 50→900) used for single-hue pages.
 * Keys go pale → deep. A single-hue page draws all of its color from here.
 */
export const BLUE: Record<number, string> = {
    50: "#e3f2fd",  // alice_blue
    100: "#bbdefb", // icy_blue
    200: "#90caf9", // sky_blue
    300: "#64b5f6", // cool_sky
    400: "#42a5f5",
    500: "#2196f3", // dodger_blue
    600: "#1e88e5", // brilliant_azure
    700: "#1976d2", // twitter_blue
    800: "#1565c0", // ocean_deep
    900: "#0d47a1", // cobalt_blue
};

/**
 * Deep navy tints (from the provided scale) for high-contrast text / borders / shadows.
 */
export const BLUE_INK = {
    navy: "#0a2f54", // twitter_blue 200 — deepest navy, for text/borders/shadows
    cobalt: "#0d47a1",
    ocean: "#1565c0",
};

/**
 * Homepage theme pairs, all within the blue family. `light` is the surface,
 * `dark` is the ink. Backgrounds vary across the pale end of the scale while ink
 * stays deep, so every pair keeps strong contrast. The two interactive games
 * cycle through this list; the static sections pick fixed entries.
 */
export const BLUE_THEMES: ColorShade[] = [
    { light: "#e3f2fd", dark: "#0d47a1" }, // alice  / cobalt
    { light: "#bbdefb", dark: "#0a2f54" }, // icy    / navy
    { light: "#d2eafd", dark: "#1565c0" }, // pale   / ocean
    { light: "#c1d8fa", dark: "#0d47a1" }, // cobalt tint / cobalt
    { light: "#90caf9", dark: "#0a2f54" }, // sky    / navy
    { light: "#cae0f9", dark: "#1565c0" }, // ocean tint  / ocean
];

/** Primary blue pair — the page's default surface + ink. */
export const BLUE_PRIMARY: ColorShade = BLUE_THEMES[0];