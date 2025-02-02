import { z } from "zod";

export const TagType = z.object({
  libelle: z.string(),
  color: z.string(),
});

export type Tag = z.infer<typeof TagType>;
