// Part 1 三个变体共用的数据：角色 + 从 projects 集合里算出来的统计
import { getCollection } from "astro:content";
import { COLORS } from "@/consts";
import { PORTFOLIO_ROLES } from "@/i18n/components/portfolio/PortfolioRoles_i18";

export async function getOverviewData() {
    const projects = await getCollection("projects");
    const byId = new Map(projects.map((p) => [p.id, p]));

    const roles = PORTFOLIO_ROLES.map((role) => ({
        ...role,
        color: COLORS[role.colorKey],
        count: role.projectIds.filter((id) => byId.has(id)).length,
        flagship: byId.get(role.flagshipId),
    }));

    return {
        roles,
        maxCount: Math.max(...roles.map((r) => r.count)),
        totalProjects: projects.length,
        steamCount: projects.filter((p) => (p.data.tags.en ?? []).includes("Steam")).length,
    };
}
