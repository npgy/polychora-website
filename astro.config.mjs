// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [compress(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
