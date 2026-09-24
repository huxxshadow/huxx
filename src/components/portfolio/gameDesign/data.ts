// Part 2 · 游戏设计：把 GameDesignShowcase_i18 里列出的项目和 projects 集合对上，按当前语言取好文案，并按层分组
import { getCollection } from "astro:content";
import { useTranslations, type Lang } from "@/i18n";
import { designPillars, designWorks, type DesignTier } from "@/i18n/components/portfolio/GameDesignShowcase_i18";

// 每层里的展示顺序（同层内按分量排）
const ORDER = [
    "game-project-yuanmengstar-shanhai-xunling",
    "game-project-floodsong",
    "game-project-empty-throne",
    "game-project-eel-on-mask",
    "game-project-fractal-shelter",
    "game-project-follyblind-age",
    "technical-project-parkour-motion-system",
    "game-project-lost-realm",
    "game-project-speed-pixel",
    "game-project-click-click-universe",
    "game-project-night-watch",
];

export async function getGameDesignShowcase(lang: Lang) {
    const t = useTranslations(lang);
    const projects = await getCollection("projects");
    const byId = new Map(projects.map((p) => [p.id, p]));
    const pillarName = new Map(designPillars.map((p) => [p.id, t(p.name)]));

    const works = designWorks
        .slice()
        .sort((a, b) => ORDER.indexOf(a.projectId) - ORDER.indexOf(b.projectId))
        .flatMap((work) => {
            const project = byId.get(work.projectId);
            if (!project) return [];
            const d = project.data;
            return [{
                id: work.projectId,
                tier: work.tier,
                pillars: work.pillars,
                pillarNames: work.pillars.map((id) => pillarName.get(id)!),
                title: d.title[lang] || d.title.en || d.title.zh || work.projectId,
                context: t(work.context),
                role: t(work.role),
                line: t(work.line),
                highlights: (work.highlights ?? []).map((h) => t(h)),
                cover: d.coverImage || d.backupCoverImage,
                inDevelopment: !!d.inDevelopment,
                colorText: d.colorText,
                colorBackground: d.colorBackground,
            }];
        });

    const tier = (id: DesignTier) => works.filter((w) => w.tier === id);
    return {
        works,
        featured: tier("featured"),
        selected: tier("selected"),
        solo: tier("solo"),
        pillars: designPillars.map((p) => ({ id: p.id, name: t(p.name) })),
    };
}

export type GameDesignShowcase = Awaited<ReturnType<typeof getGameDesignShowcase>>;
export type DesignWorkView = GameDesignShowcase["works"][number];
