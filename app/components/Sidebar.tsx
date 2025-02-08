import Search from "./Search";
import type { Tag } from "../types/Tag";
import { css } from "../../styled-system/css";
import SearchIcon from "../icons/SearchIcon";

interface Props {
  tags: Tag[];
  setSearchQuery: (searchQuery: string) => void;
  handleSetFilteredTags: (tags: Tag[]) => void;
  filteredTags: Tag[];
}

interface TagWithCount extends Tag {
  count: number;
}

const Kbd = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "medium",
  backgroundColor: "neutral.400/10",
  letterSpacing: "0.1px",
  pointerEvents: "none",
  userSelect: "none",
  width: "auto",
  color: "neutral.50/40",
  height: "28px",
  fontSize: "text-xs",
  rounded: "md",
  minWidth: "28px",
});

const Label = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  rounded: "md",
  fontSize: "sm",
  lineHeight: "sm",
  cursor: "text",
  fontWeight: "normal",
  transitionProperty:
    "color, background-color, border-color, text-decoration-color, fill, stroke",
  transitionTimingFunction: "colors",
  transitionDuration: "100",
  overflow: "hidden",
  _focusVisible: {
    ring: "none",
    ringOffset: "none",
    shadow: "1",
    outline: "none",
    bg: "neutral.500/20",
  },
  _disabled: { pointerEvents: "none", opacity: "0.5" },
  bgColor: "neutral.500/10",
  color: "neutral.50",
  _placeholder: {
    color: "neutral.400",
    fontSize: "sm",
  },
  borderWidth: "1px",
  borderColor: "neutral.600",
  _hover: { borderColor: "neutral.500" },
  _focusWithin: { borderColor: "neutral.500" },
  h: "9",
  pl: "3",
  pr: "1",
  pt: "2",
  pb: "2",
  gap: "3",
  mb: "6",
});

function Sidebar(props: Props) {
  const { tags, setSearchQuery, handleSetFilteredTags, filteredTags } = props;

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
  }) as TagWithCount[];

  const handleSetTags = (tag: Tag) => {
    const isTagInFilteredTags = filteredTags.some(
      (t) => t.libelle === tag.libelle
    );

    const updatedTags = isTagInFilteredTags
      ? filteredTags.filter((t) => t.libelle !== tag.libelle)
      : [...filteredTags, tag];

    handleSetFilteredTags(updatedTags);
  };

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
        minWidth: "64",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "neutral.700",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
        })}
      >
        <label className={Label}>
          <SearchIcon />
          <Search setSearchQuery={setSearchQuery} />

          <kbd className={Kbd}>/</kbd>
        </label>
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
            key={tag.libelle}
            onClick={() => handleSetTags(tag)}
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
              bg: filteredTags.find((t) => t.libelle === tag.libelle)
                ? "neutral.500/20"
                : "transparent",
              _active: {
                bg: "neutral.500/30",
              },
              justifyContent: "space-between",
              alignItems: "center",
              color: filteredTags.find((t) => t.libelle === tag.libelle)
                ? "red.400"
                : "neutral.50",
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
