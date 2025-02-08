import { getHighlighter } from "./get-highlighter";
import { BundledLanguage, BundledTheme } from "shiki";

interface HtmlArgs {
  code: string;
  lang: BundledLanguage;
  theme: BundledTheme;
}

export async function highlightCode(args: HtmlArgs) {
  const { code, lang, theme } = args;
  const highlighter = await getHighlighter({ langs: [lang], themes: [theme] });
  const html = highlighter?.codeToHtml(code, { lang, theme });
  return String(html);
}
