// Part 2 · 游戏设计：把 GameDesignShowcase_i18 里列出的项目和 projects 集合对上，按当前语言取好文案
import { getCollection } from "astro:content";
import { useTranslations, type Lang } from "@/i18n";
import { designPillars, designWorks } from "@/i18n/components/portfolio/GameDesignShowcase_i18";

export async function getGameDesignShowcase(lang: Lang) {
    const t = useTranslations(lang);
    const projects = await getCollection("projects");
    const byId = new Map(projects.map((p) => [p.id, p]));

    const works = designWorks.flatMap((work) => {
        const project = byId.get(work.projectId);
        if (!project) return [];
        const d = project.data;
        return [{
            id: work.projectId,
            pillars: work.pillars,
            primary: work.pillars[0],
            title: d.title[lang] || d.title.en || d.title.zh || work.projectId,
            context: t(work.context),
            role: t(work.role),
            line: t(work.line),
            cover: d.coverImage || d.backupCoverImage,
            inDevelopment: !!d.inDevelopment,
            colorText: d.colorText,
            colorBackground: d.colorBackground,
        }];
    });

    const pillars = designPillars.map((pillar) => ({
        id: pillar.id,
        name: t(pillar.name),
        /** 以这个方向为主方向的项目 */
        works: works.filter((w) => w.primary === pillar.id),
    }));

    return { pillars, works };
}

export type GameDesignShowcase = Awaited<ReturnType<typeof getGameDesignShowcase>>;
export type DesignWorkView = GameDesignShowcase["works"][number];
