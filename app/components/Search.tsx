import { useEffect, useRef } from "react";
import { css } from "../../styled-system/css";

function Search() {
  //   const { onSearch } = props;

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  //   // onSearch(value.toLowerCase());
  // };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        ref.current?.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <input
      ref={ref}
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
    />
  );
}

export default Search;
