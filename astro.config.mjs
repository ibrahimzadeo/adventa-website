import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adventa.az',
  server: {
    host: true,
    port: 4321
  }
});