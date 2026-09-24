import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.coerce.date(),
    status: z.enum(['idea', 'in-progress', 'beta', 'released']).default('in-progress'),
    platforms: z.array(z.string()).default([]),   // e.g. ["iOS", "Web", "Windows"]
    tech: z.array(z.string()).default([]),        // e.g. ["Swift", "React"]
    builtWith: z.array(z.string()).default([]),   // AI tools: "Claude Code", "Gemini", "OpenAI Codex"
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),            // live "Try it" link
    download: z
      .object({ label: z.string(), url: z.string().url() })
      .optional(),
    cover: z.string().optional(),                 // path under /public, e.g. "/images/uscan3d.png"
    accent: z.string().default('#6d5efc'),        // card color when there's no cover image
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
