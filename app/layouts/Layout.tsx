import { ReactNode } from "react";

import { css } from "@ui/css";
import Header from "@/components/Header";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  return (
    <div
      className={css({
        backgroundColor: "secondary",
        h: "screen",
        overflow: "hidden",
      })}
    >
      <Header />
      <section
        className={css({
          pt: "65px",
          pb: "10px",
          px: 4,
          h: "full",
          minH: "full",
          display: "flex",
          overflowY: "auto",
          gap: 4,
        })}
      >
        {children}
      </section>
    </div>
  );
}

export default Layout;
