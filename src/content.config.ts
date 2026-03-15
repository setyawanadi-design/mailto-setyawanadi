import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.enum(['inbox', 'sent', 'drafts', 'notes', 'archive']),
  image: z.string().optional(),
  pinned: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  attachments: z.array(z.object({
    name: z.string(),
    url: z.string(),
    size: z.string(),
  })).default([]),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const logSchema = z.object({
  title: z.string().default(''),
  date: z.coerce.date(),
});

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: logSchema,
});

export const collections = { posts, logs };
