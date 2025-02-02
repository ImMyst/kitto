import { css } from "../../styled-system/css";
import TagChip from "./Tag";
// import type { ComponentProps } from "astro/types";
// import { Code } from "astro:components";
import type { Tag } from "../types/Tag";
import { cx } from "../../styled-system/css";

interface Props {
  title: string;
  tags: Tag[];
}

function CodeCard(props: Props) {
  const { code = `const default = 'Default';`, title, tags, ...rest } = props;

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
      {/* <Code wrap {code} theme={"one-dark-pro"} {...rest} /> */}
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
          {title}
        </span>
        <div
          className={css({
            display: "flex",
            justifyContent: "end",
            w: "full",
            gap: 1,
          })}
        >
          {tags.map((tag) => (
            <TagChip tag={tag} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CodeCard;
