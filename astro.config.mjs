import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://raymondanadon.github.io',
  base: 'raymond-portfolio',
  trailingSlash: "always",
  integrations: [tailwind()],
});
