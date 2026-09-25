// Part 3 · 游戏开发：把 GameDevShowcase_i18 里列出的 8 个项目和 projects 集合对上，按当前语言取好文案。
// 如果这个项目在 Part 2 也出现了，说明文字和标签直接沿用 Part 2 的，两边不会写成两套；
// 想在这里单独写开发向的说明或标签，就在 GameDevShowcase_i18 里给它加 caption / tags
import { getCollection } from "astro:content";
import { useTranslations, type Lang } from "@/i18n";
import { devWorks } from "@/i18n/components/portfolio/GameDevShowcase_i18";
import { designWorks } from "@/i18n/components/portfolio/GameDesignShowcase_i18";

// 标签按「·」「/」拆开
const splitTags = (...parts: string[]) => parts.flatMap((x) => x.split(/\s*[·/]\s*/)).filter(Boolean);

// 九宫格外圈 8 格的顺序：左上、上、右上、左、右、左下、下、右下
const GRID = [
    "game-project-rephrased",
    "game-project-eel-on-mask",
    "game-project-empty-throne",
    "technical-project-parkour-motion-system",
    "game-project-speed-pixel",
    "game-project-lost-realm",
    "game-project-click-click-universe",
    "game-project-night-watch",
];

export async function getGameDevShowcase(lang: Lang) {
    const t = useTranslations(lang);
    const projects = await getCollection("projects");
    const byId = new Map(projects.map((p) => [p.id, p]));

    const works = GRID.flatMap((id) => devWorks.filter((w) => w.projectId === id)).flatMap((work) => {
        const project = byId.get(work.projectId);
        if (!project) return [];
        const d = project.data;
        // Part 2 里展示着的同一个项目（完整项目 + 下面那一行）
        const shown = designWorks.find((w) => w.projectId === work.projectId && w.tier !== "solo");
        const line = work.caption ? t(work.caption) : shown ? t(shown.caption ?? shown.line) : t(work.line);
        const tags = work.tags ? splitTags(t(work.tags)) : shown ? splitTags(t(shown.context), t(shown.role)) : [...splitTags(t(work.role)), ...work.stack];
        return [{
            id: work.projectId,
            title: d.title[lang] || d.title.en || d.title.zh || work.projectId,
            context: t(work.context),
            role: t(work.role),
            stack: work.stack,
            line,
            tags,
            systems: work.systems.map((s) => t(s)),
            cover: d.coverImage || d.backupCoverImage,
            inDevelopment: !!d.inDevelopment,
            colorText: d.colorText,
            colorBackground: d.colorBackground,
        }];
    });

    return { works };
}

export type GameDevShowcase = Awaited<ReturnType<typeof getGameDevShowcase>>;
export type DevWorkView = GameDevShowcase["works"][number];
