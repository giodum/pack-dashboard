import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    coverage: {
      provider: "istanbul",
      reporter: ["text", "html", "json"],
      include: ["src/lib/**/*.{ts,tsx}", "src/routes/**/*.{ts,tsx}"],
      exclude: [
        "tests/**/*",
        "src/lib/constants/**/*",
        "src/lib/schemas/**/*",
        "**/node_modules/**",
        "**/build/**",
        "**/.svelte-kit/**",
        "**/dist/**",
        "**/public/**",
        "server.js",
        "**/*.config.{js,ts}"
      ]
    },
    include: [
      "src/**/*.{test,spec}.{ts,tsx}",
      "tests/**/*.{test,spec}.{ts,tsx}"
    ],
    exclude: [
      "**/*.js",
      "**/node_modules/**",
      "**/build/**",
      "**/.svelte-kit/**",
      "**/dist/**",
      "**/public/**",
      "server.js",
      "**/*.config.{js,ts}",
      "src/lib/schemas/**/*"
    ],
    globals: true,
    environment: "jsdom"
  },
  resolve: {
    alias: {
      $src: path.resolve(__dirname, "src")
    }
  }
});
