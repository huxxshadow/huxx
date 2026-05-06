// src/content.config.ts
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders'; // 引入 glob
import { z } from 'astro/zod';

const multilingualSchema = z.object({
    en: z.string().optional(),
    zh: z.string().optional(),
    ja: z.string().optional(),
    ko: z.string().optional(),
});

const multilingualArraySchema = z.object({
    en: z.array(z.string()).optional(),
    zh: z.array(z.string()).optional(),
    ja: z.array(z.string()).optional(),
    ko: z.array(z.string()).optional(),
});

const games = defineCollection({
    loader: file('src/content/gameCard.json'),
    schema: ({ image }) => z.object({
        order: z.number(),
        title: multilingualSchema,
        comment: multilingualSchema.optional(),
        image: image(),
        favorite: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: ({ image }) => z.object({
        order: z.number(),
        category: z.enum(['game', 'technical', 'art']),
        title: multilingualSchema,
        roles: multilingualArraySchema,
        desc: multilingualSchema,
        tags: multilingualArraySchema,
        colorText: z.string().optional(),
        colorBackground: z.string().optional(),
        coverImage: image().optional(),
        backupCoverImage: image().optional(),
        links: z.array(
            z.object({
                name: z.string(),
                url: z.string(),
                icon: z.string(),
            })
        ).optional(),
    }),
});


const projectDetails = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projectDetails" }),
    schema: z.object({
        // 这里可以为空，因为标题、标签等元数据已经都在 JSON 里了
        // 如果个别页面需要特殊的 MDX 组件配置，可以加在这里
    }).optional(),
});

export const collections = { games, projects, projectDetails };