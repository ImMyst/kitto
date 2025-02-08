import { css } from "../../styled-system/css";

export default function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={css({
        w: "6",
        h: "6",
      })}
    >
      <path
        className={css({
          stroke: "neutral.500",
        })}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m10 10 4.25 4.25m-3-7.75a4.75 4.75 0 1 1-9.5 0 4.75 4.75 0 0 1 9.5 0Z"
      ></path>
    </svg>
  );
}
