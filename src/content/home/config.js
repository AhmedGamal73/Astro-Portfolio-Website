import { z, defineCollection } from 'astro:content';

const docsCollectoin = defineCollection({ 
  type: 'data',
  schema: z.object({
    title: z.string(),
    subTitle: z.string()
  }),
});

export const collections = {
  'docs': docsCollectoin,
};
