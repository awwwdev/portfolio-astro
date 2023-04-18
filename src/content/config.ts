import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    color: z.string(),
    bg: z.string(),
    logoSrc: z.string(),
    darkLogoSrc: z.string(),
    href: z.string(),
    features: z.array(z.string()).optional(),
    subtitle: z.string().optional(),
    img: z.string().optional(),
    stackLogos: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
        })
      )
      .optional(),
  }),
});
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = { blog, works };
