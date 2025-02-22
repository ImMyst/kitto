import { ReactNode } from "react";

import { css, cx } from "@ui/css";

interface Props {
  children: ReactNode;
}

function Toast(props: Props) {
  const { children } = props;

  return (
    <div
      className={cx(
        "toast-button",
        css({
          rounded: "full",
          color: "green.300",
          w: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "green.950",
          borderColor: "green.800",
          borderWidth: 1,
          py: 1.5,
          px: 4,
        })
      )}
    >
      {children}
    </div>
  );
}

export default Toast;
