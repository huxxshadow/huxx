// 首页统一主题色：整页（Hero、弹球、经历、技能打砖块，以及跟随它们的 Header / Footer）同一时间只用一种主题色。
// 弹球或打砖块任意一个升级都会推进到下一种颜色，两个游戏共用这一个进度，所以颜色始终同步。
// 进度存在 sessionStorage / localStorage，刷新或回到首页时沿用。
import { COLORS } from "@/consts";

export type HomeTheme = { light: string; dark: string };

export const HOME_THEMES: HomeTheme[] = [
    COLORS.blue,
    COLORS.green,
    COLORS.yellow,
    COLORS.orange,
    COLORS.purple,
    COLORS.red,
];

const STORAGE_KEY = "homeThemeIndex";
export const HOME_THEME_EVENT = "home-theme-change";

const read = (store: Storage) => {
    try { return store.getItem(STORAGE_KEY); } catch { return null; }
};
const write = (value: string) => {
    for (const store of [sessionStorage, localStorage]) {
        try { store.setItem(STORAGE_KEY, value); } catch { /* 隐私模式等情况下存不了，忽略 */ }
    }
};

export function getHomeThemeIndex(): number {
    const n = HOME_THEMES.length;
    const v = parseInt(read(sessionStorage) ?? read(localStorage) ?? "0", 10);
    return Number.isFinite(v) ? ((v % n) + n) % n : 0;
}

export function getHomeTheme(): HomeTheme {
    return HOME_THEMES[getHomeThemeIndex()];
}

// 把主题色写到所有标了 data-home-theme 的区块上，并通知 Header / Footer 跟着变
export function applyHomeTheme(theme: HomeTheme = getHomeTheme()) {
    document.querySelectorAll<HTMLElement>("[data-home-theme]").forEach((el) => {
        el.style.setProperty("--theme-light", theme.light);
        el.style.setProperty("--theme-dark", theme.dark);
        el.style.setProperty("--theme-bg", theme.light);
        el.style.setProperty("--theme-text", theme.dark);
        el.style.backgroundColor = theme.light;
        el.style.color = theme.dark;
        el.setAttribute("data-theme-bg", theme.light);
        el.setAttribute("data-theme-text", theme.dark);
        document.dispatchEvent(new CustomEvent("section-theme-change", {
            detail: { bg: theme.light, text: theme.dark, source: el },
        }));
    });
}

// 推进到下一种颜色（由升级的那个游戏调用），整页立即换色，并广播给另一个游戏
export function advanceHomeTheme(source: string): HomeTheme {
    const index = (getHomeThemeIndex() + 1) % HOME_THEMES.length;
    write(String(index));
    const theme = HOME_THEMES[index];
    applyHomeTheme(theme);
    document.dispatchEvent(new CustomEvent(HOME_THEME_EVENT, { detail: { theme, index, source } }));
    return theme;
}
