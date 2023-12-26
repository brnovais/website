import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
