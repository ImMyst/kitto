import Search from "./Search";
import type { Tag } from "../types/Tag";
import { css } from "../../styled-system/css";

interface Props {
  tags: Tag[];
}

function Sidebar(props: Props) {
  const { tags } = props;

  const tagCounts = tags.reduce((acc: { [key: string]: number }, tag) => {
    acc[tag.libelle] = (acc[tag.libelle] || 0) + 1;
    return acc;
  }, {});

  const uniqueTagsWithCounts = Object.keys(tagCounts).map((libelle) => {
    const originalTag = tags.find((tag) => tag.libelle === libelle);
    return {
      ...originalTag,
      count: tagCounts[libelle],
    };
  });

  const Kbd = css({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "medium",
    backgroundColor: "gray-a4",
    letterSpacing: "0.1px",
    width: "auto",
    color: "gray-a10",
    height: "28px",
    px: 2,
    fontSize: "text-xs",
    rounded: "md",
    minWidth: "28px",
  });

  return (
    <aside
      className={css({
        bg: "secondaryLight",
        h: "72",
        rounded: "md",
        position: "sticky",
        top: 0,
        display: "flex",
        p: 4,
        minWidth: "56",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "neutral.700",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 3,
        })}
      >
        <div>
          <label
            htmlFor="search"
            className={css({
              fontSize: "sm",
              color: "neutral.400",
            })}
          >
            Search
          </label>
          <div
            className={css({
              position: "relative",
              w: "full",
            })}
          >
            <Search />
            <span
              className={css({
                position: "absolute",
                right: 2,
                top: "50%",
                display: "flex",
                pointerEvents: "none",
                fontSize: "xs",
                transform: "translateY(-50%)",
                py: 0.5,
                px: 1,
                rounded: "md",
                bg: "neutral.500/20",
                color: "neutral.400",
              })}
            >
              <kbd className={Kbd}>/</kbd>
            </span>
          </div>
        </div>
        <span
          className={css({
            fontSize: "sm",
            color: "neutral.400",
          })}
        >
          Tags
        </span>
      </div>
      <div
        className={css({
          mt: 2,
          display: "flex",
          flexDirection: "column",
          mx: -2,
          gap: 0.5,
        })}
      >
        {uniqueTagsWithCounts.map((tag) => (
          <div
            className={css({
              fontSize: "sm",
              display: "flex",
              py: 1.5,
              px: 2,
              rounded: "md",
              _hover: {
                bg: "neutral.500/10",
                cursor: "pointer",
                transitionDuration: "fast",
              },
              justifyContent: "space-between",
              alignItems: "center",
              color: "neutral.50",
            })}
          >
            <span>{tag.libelle}</span>
            <span>{tag.count}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
