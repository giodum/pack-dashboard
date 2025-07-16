import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 3000
  },
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]"
      }
    }
  },
  publicDir: "static",
  resolve: {
    alias: {
      $src: "/src",
      $lib: "/src/lib"
    }
  },
  test: {
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          name: "client",
          environment: "browser",
          browser: {
            enabled: true,
            provider: "playwright",
            instances: [{ browser: "chromium" }]
          },
          include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          exclude: ["src/lib/server/**"],
          setupFiles: ["./vitest-setup-client.ts"]
        }
      },
      {
        extends: "./vite.config.ts",
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"]
        }
      }
    ]
  }
});
