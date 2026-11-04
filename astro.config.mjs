import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dormivegliafest.it",
  integrations: [sitemap({ filter: (page) => !page.includes("/archivio/") })],
  redirects: {
    "/info/": "/contatti/",
    "/gertie-animation-prize/": "/gertie-animation-prize/2026/",
  },
});