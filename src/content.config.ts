// src/content.config.ts
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
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
        // colorText / colorBackground:
        // 项目卡片的前景色与背景色。若不指定，默认继承所在 section 的主题色。
        colorText: z.string().optional(),
        colorBackground: z.string().optional(),
        coverImage: image().optional(),
    }),
});

export const collections = { games, projects };