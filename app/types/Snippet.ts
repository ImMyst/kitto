import { TagType } from "app/types/Tag";
import { z } from "astro:content";
import { bundledLanguages } from "shiki";

export const SnippetType = z.object({
  id: z.number(),
  title: z.string(),
  tags: z.array(TagType),
  code: z.string(),
  lang: z.enum(["typescript", "javascript"]),
});

export type Snippet = z.infer<typeof SnippetType>;
