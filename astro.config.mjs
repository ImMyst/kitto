import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  srcDir: "./app",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
