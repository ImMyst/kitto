import { css } from "../../styled-system/css";
import TagChip from "./Tag";
import { cx } from "../../styled-system/css";
import Code from "../components/Code";
import { Snippet } from "../types/Snippet";

interface Props {
  snippet: Snippet;
}

function CodeCard(props: Props) {
  const { snippet, ...rest } = props;

  return (
    <div
      className={cx(
        css({
          borderWidth: 1,
          h: "full",
          p: 2,
          rounded: "md",
          borderColor: "neutral.700",
          ringOffset: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          _hover: {
            borderColor: "red.800",
            borderStyle: "dashed",
            bg: "red.950/15",
            cursor: "pointer",
            transitionDuration: "fast",
          },
        }),
        "card"
      )}
    >
      <Code
        code={snippet.code ?? "Test"}
        lang={snippet.lang}
        theme={"one-dark-pro"}
        {...rest}
      />
      <section
        className={css({
          w: "full",
          display: "flex",
          py: 2,
          alignSelf: "end",
          placeItems: "center",
          justifyContent: "end",
        })}
      >
        <span
          className={css({
            color: "white",
            w: "10/12",
          })}
        >
          {snippet.title}
        </span>
        <div
          className={css({
            display: "flex",
            justifyContent: "end",
            w: "full",
            gap: 1,
          })}
        >
          {snippet.tags.map((tag) => (
            <TagChip key={tag.libelle} tag={tag} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CodeCard;
