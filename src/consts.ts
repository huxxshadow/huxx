
import type { Multilingual } from "@/i18n.ts";

export const SITE_TITLE: string | Multilingual = {
    en: "huxx - Portfolio",
    ja: "huxx - ポートフォリオ",
    ko: "huxx - 포트폴리오",
    zh: "huxx - 作品集",
};

export const SITE_DESCRIPTION: string | Multilingual = {
    en: "ToDo",
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