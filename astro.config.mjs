import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://AhmedGamal73.github.io',
  base: '/Astro-Portfolio-Website',
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});