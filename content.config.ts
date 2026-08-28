import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        draft: z.boolean().default(false),
      }),
    }),
  },
});
