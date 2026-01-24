import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    image: z.string().optional(),
    image2: z.string().optional(),
    image3: z.string().optional(),
    image4: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishedDate: z.string().optional(),
    readTime: z.string().optional(),
    github: z.string().optional(),
    demoVideo: z.string().optional(),
    sectionTitle: z.string().optional(),
    sectionContent: z.string().optional(),
    sectionTitle2: z.string().optional(),
    sectionContent2: z.string().optional(),
  }),
});

export const collections = { projects };
