import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  alias: {
    '@cv': './src/components/cv' // Cambia la ruta al directorio correcto
  }
});