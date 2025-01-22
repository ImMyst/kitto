import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { SnippetType } from "app/types/Snippet";

const snippets = defineCollection({
  loader: file("app/content/snippets/snippets.json"),
  schema: SnippetType,
});

export const collections = { snippets };
