// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

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