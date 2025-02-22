import { scan } from "react-scan"; // Must be imported before React/ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/pages/App";
import "./index.css";

scan({
  enabled: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
