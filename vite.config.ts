import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";

const ReactCompilerConfig = {};

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: [".vite"],
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "@ui": path.resolve(__dirname, "./styled-system"),
      "@lib": path.resolve(__dirname, "./app/lib"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@layouts": path.resolve(__dirname, "./app/layouts"),
      "@content": path.resolve(__dirname, "./app/content"),
      "@types": path.resolve(__dirname, "./app/types"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});
