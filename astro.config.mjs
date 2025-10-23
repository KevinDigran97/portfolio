import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  alias: {
    '@cv': './src/components/cv' // Cambia la ruta al directorio correcto
  }
});