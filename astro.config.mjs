// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.zenparke.com.tr',
  integrations: [sitemap()],
  image: {
    service: passthroughImageService(),
  },
  devToolbar: {
    enabled: false,
  },
});

