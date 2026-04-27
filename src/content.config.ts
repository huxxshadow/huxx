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

const games = defineCollection({
    loader: file('src/assets/gameCard/gameCard.json'),
    schema: ({ image }) => z.object({
        order: z.number(),
        title: multilingualSchema,
        comment: multilingualSchema.optional(),
        image: image(),
        favorite: z.boolean().default(false),
    }),
});
export const collections = { games };