import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const emailSchema = z.object({
  title: z.string(),
  from: z.string(),
  fromEmail: z.string(),
  date: z.coerce.date(),
  preview: z.string(),
  pinned: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  attachments: z.array(z.object({
    name: z.string(),
    url: z.string(),
    size: z.string(),
  })).default([]),
});

const inbox = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/inbox' }),
  schema: emailSchema,
});

const sent = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sent' }),
  schema: emailSchema,
});

const drafts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/drafts' }),
  schema: emailSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: emailSchema,
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: emailSchema,
});

const starred = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/starred' }),
  schema: emailSchema,
});

const logSchema = z.object({
  title: z.string().default(''),
  date: z.coerce.date(),
  image: z.string().optional(),
  imageAlt: z.string().default(''),
});

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: logSchema,
});

export const collections = { inbox, sent, drafts, notes, archive, starred, logs };
