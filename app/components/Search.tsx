import { useEffect, useRef } from "react";
import { css } from "../../styled-system/css";

interface Props {
  setSearchQuery: (searchQuery: string) => void;
}

function Search(props: Props) {
  const { setSearchQuery } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

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
      onChange={handleChange}
      className={css({
        ring: "none",
        ringOffset: "none",
        w: "full",
        bgColor: "transparent",
        color: "inherit",
      })}
      placeholder="Search snippets..."
      type="search"
      id="search"
      name="search"
    />
  );
}

export default Search;
