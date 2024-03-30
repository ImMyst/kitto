import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "oklch(47.06% 0.155 27.51)" },
          secondary: { value: "oklch(20.46% 0 0)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
