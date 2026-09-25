// Part 3 · 游戏开发：把 GameDevShowcase_i18 里列出的 8 个项目和 projects 集合对上，按当前语言取好文案
import { getCollection } from "astro:content";
import { useTranslations, type Lang } from "@/i18n";
import { devWorks } from "@/i18n/components/portfolio/GameDevShowcase_i18";

export async function getGameDevShowcase(lang: Lang) {
    const t = useTranslations(lang);
    const projects = await getCollection("projects");
    const byId = new Map(projects.map((p) => [p.id, p]));

    const works = devWorks.flatMap((work) => {
        const project = byId.get(work.projectId);
        if (!project) return [];
        const d = project.data;
        return [{
            id: work.projectId,
            title: d.title[lang] || d.title.en || d.title.zh || work.projectId,
            context: t(work.context),
            role: t(work.role),
            stack: work.stack,
            line: t(work.line),
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
