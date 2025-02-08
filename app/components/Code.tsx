import { useEffect, useState } from "react";
import { BundledLanguage, BundledTheme } from "shiki";
import { css } from "../../styled-system/css";
import { highlightCode } from "../lib/shiki";

interface Props {
  code: string;
  theme: BundledTheme;
  lang: BundledLanguage;
}

function Code(props: Props) {
  const { code, theme, lang } = props;
  const [htmlCode, setHtmlCode] = useState("");

  useEffect(() => {
    async function getHtml() {
      const htmlCode = await highlightCode({ code, lang, theme });
      setHtmlCode(htmlCode);
    }
    getHtml();
  }, [code, theme, lang]);

  return htmlCode.length > 0 ? (
    <div
      className={css({
        overflow: "scroll",
        display: "flex",
        width: "full",
      })}
      dangerouslySetInnerHTML={{ __html: htmlCode }}
    />
  ) : (
    <div className={css({ display: "flex", width: "full" })}>
      <span className={css({ w: "full", h: "full", color: "white" })}>
        Loading...
      </span>
    </div>
  );
}

export default Code;
