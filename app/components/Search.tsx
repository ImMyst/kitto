import { useState } from "react";
import { css } from "../../styled-system/css";

function Search() {
  //   const { onSearch } = props;
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // onSearch(value.toLowerCase());
  };

  return (
    <input
      className={css({
        w: "full",
        px: 2,
        py: 1.5,
        bg: "neutral.500/10",
        color: "neutral.50",
        rounded: "md",
        fontSize: "sm",
        border: 0,
        _placeholder: {
          color: "neutral.400",
          fontSize: "sm",
        },
        _focus: {
          outline: "none",
          bg: "neutral.500/20",
        },
      })}
      placeholder="Search snippets..."
      type="search"
      id="search"
      name="search"
      value={query}
      onChange={handleChange}
    />
  );
}

export default Search;
