import { z } from "astro:content";

export const TagType = z.object({
  libelle: z.string(),
  color: z.string(),
});

export type Tag = z.infer<typeof TagType>;
