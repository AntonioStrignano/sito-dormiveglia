import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dormivegliafest.it",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/archivio/"),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  redirects: {
    "/info/": "/contatti/",
    "/gertie-animation-prize/": "/gertie-animation-prize/2026/",
  },
});