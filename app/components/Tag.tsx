import type { Tag } from "../types/Tag";
import { css } from "../../styled-system/css";
import { token } from "../../styled-system/tokens";

interface Props {
  tag: Tag;
}

function Tag(props: Props) {
  const { tag } = props;
  return (
    <div
      class={css({
        px: 2,
        py: 0.5,
        borderWidth: "1",
        rounded: "lg",
        fontSize: "xs",
        color: "var(--color)",
        bg: "var(--bg-color)",
        borderColor: "var(--border-color)",
      })}
      style={{
        "--color": token(`colors.${tag.color}.300` as any),
        "--bg-color": token(`colors.${tag.color}.950` as any),
        "--border-color": token(`colors.${tag.color}.800` as any),
      }}
    >
      {tag.libelle}
    </div>
  );
}

export default Tag;
