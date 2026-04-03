import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
