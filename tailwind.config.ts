import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#fff5ee",
          100: "#ffe5d0",
          200: "#ffd1a6",
          300: "#ffb47a",
          400: "#ff9a54",
          500: "#ff8b45", // base color
          600: "#e06e2e",
          700: "#b94f1d",
          800: "#8c3913",
          900: "#5c220a",
          950: "#2e1105"
        }
      },
      fontFamily: {
        sans: ["Arimo", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"]
      }
    }
  },
  plugins: [typography]
} satisfies Config;
