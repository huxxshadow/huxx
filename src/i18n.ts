import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./locales.ts";
import { getRelativeLocaleUrl } from "astro:i18n";


/**
 * User-defined locales list
 * @constant @readonly
 */
export const LOCALES = LOCALES_SETTING as Record<string, LocaleConfig>;
type LocaleConfig = {
    readonly label: string;
    readonly lang?: string;
};


/**
 * Type for the language code
 * @example
 * "en" | "ja" | ...
 */
export type Lang = keyof typeof LOCALES;


/**
 * Default locale code
 * @constant @readonly
 */
export const DEFAULT_LOCALE = DEFAULT_LOCALE_SETTING as Lang;


/**
 * Type for the multilingual object
 * @example
 * { en: "Hello", ja: "こんにちは", ... }
 */
export type Multilingual = { [key in Lang]?: string };


/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
    return function t(multilingual: Multilingual | string): string {
        if (typeof multilingual === "string") {
            return multilingual;
        } else {
            return multilingual[lang] || multilingual[DEFAULT_LOCALE] || "";
        }
    };
}


/**
 * Helper to get corresponding path list for all locales
 * @param url - The current URL object
 * @returns - The list of locale paths
 */
export function getLocalePaths(url: URL): LocalePath[] {
    const basePath = import.meta.env.BASE_URL;

    return Object.keys(LOCALES).map((lang) => {
        let pathWithoutBase = url.pathname;

        // 1. 如果存在 base 配置，先从 URL 中剔除 base (例如剔除 /huxx)
        if (basePath !== '/' && pathWithoutBase.startsWith(basePath)) {
            pathWithoutBase = pathWithoutBase.slice(basePath.length);
            if (!pathWithoutBase.startsWith('/')) {
                pathWithoutBase = '/' + pathWithoutBase;
            }
        }

        // 2. 剔除语言前缀 (例如剔除 /en 或 /zh)
        const pathWithoutLocale = pathWithoutBase.replace(/^\/[a-zA-Z-]+/, '');

        return {
            lang: lang as Lang,
            path: getRelativeLocaleUrl(lang, pathWithoutLocale)
        };
    });
}

type LocalePath = {
    lang: Lang;
    path: string;
};


/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
    params: { lang },
}));