import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: "oklch(0.577 0.245 27.325)" },
          secondary: { value: "oklch(0.16 0 0)" },
          secondaryLight: { value: "oklch(0.21 0 0)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
