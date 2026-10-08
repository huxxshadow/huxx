import type { CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n";

/** The cover to show for a project in the given language: per-language cover, then the shared one, then the backup. */
export function projectCover(data: CollectionEntry<"projects">["data"], lang: Lang) {
    return data.coverImageByLang?.[lang] ?? data.coverImage ?? data.backupCoverImage;
}
