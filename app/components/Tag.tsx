import type { Tag } from "../types/Tag";
import { css } from "../../styled-system/css";
import { token } from "../../styled-system/tokens";
import { CSSProperties } from "react";

interface Props {
  tag: Tag;
}

function Tag(props: Props) {
  const { tag } = props;
  return (
    <div
      key={tag.libelle}
      className={css({
        px: 2,
        py: 0.5,
        borderWidth: "1",
        rounded: "lg",
        fontSize: "xs",
        color: "var(--color)",
        bg: "var(--bg-color)",
        borderColor: "var(--border-color)",
      })}
      style={
        {
          "--color": token(`colors.${tag.color}.300` as never),
          "--bg-color": token(`colors.${tag.color}.950` as never),
          "--border-color": token(`colors.${tag.color}.800` as never),
        } as CSSProperties
      }
    >
      {tag.libelle}
    </div>
  );
}

export default Tag;
