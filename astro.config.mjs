import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dormivegliafest.it",
  redirects: {
    "/info/": "/contatti/",
    "/gertie-animation-prize/": "/gertie-animation-prize/2026/",
  },
});