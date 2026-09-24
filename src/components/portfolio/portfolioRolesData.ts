// 作品集总览共用的数据：角色 + 从 projects 集合里算出来的统计 + 自我介绍正文解析
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
    };
}

export type OverviewRole = Awaited<ReturnType<typeof getOverviewData>>["roles"][number];
export type Segment = { text: string; color?: string };

/**
 * 把自我介绍正文拆成段落，{role-id:文字} 染成该角色的颜色。
 * 前两段是总述（lead），其后每段依次对应一个角色。
 */
export function parseIntro(text: string, roles: OverviewRole[]) {
    const roleColor = new Map(roles.map((r) => [r.id, r.color.dark]));
    const paragraphs = text.split("\n\n").map((para) => {
        // split 带捕获组，结果按 [文字, id, 染色文字, 文字, …] 排列
        const parts = para.split(/\{([\w-]+):(.+?)\}/);
        const segments: Segment[] = [];
        for (let i = 0; i < parts.length; i += 3) {
            if (parts[i]) segments.push({ text: parts[i] });
            if (i + 2 < parts.length) segments.push({ text: parts[i + 2], color: roleColor.get(parts[i + 1]) });
        }
        return segments;
    });

    const leadCount = paragraphs.length - roles.length;
    return {
        lead: paragraphs.slice(0, leadCount),
        roleParagraphs: paragraphs.slice(leadCount).map((segments, i) => ({ role: roles[i], segments })),
    };
}
