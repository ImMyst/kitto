import {
  createHighlighter,
  type Highlighter,
  BundledLanguage,
  BundledTheme,
} from "shiki";

// ✅ Use Map to store Highlighter instance promises
const highlighterCache = new Map<string, Promise<Highlighter>>();

export async function getHighlighter({
  themes,
  langs,
}: {
  themes: BundledTheme[];
  langs: BundledLanguage[];
}) {
  const key = [themes, ...langs].join("-");
  const highlighter = highlighterCache.get(key);
  if (highlighter) return await highlighter;

  const highlighterPromise = createHighlighter({ themes, langs });

  highlighterCache.set(key, highlighterPromise);
  return await highlighterPromise;
}
