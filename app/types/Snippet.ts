import { TagType } from "./Tag";
import { z } from "zod";

export const SnippetType = z.object({
  id: z.number(),
  title: z.string(),
  tags: z.array(TagType),
  code: z.string(),
  lang: z.enum(["typescript", "javascript"]),
});

export type Snippet = z.infer<typeof SnippetType>;
