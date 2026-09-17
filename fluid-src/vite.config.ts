import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
export default defineConfig({
  base: '/fluid/',
  plugins: [glsl()],
  build: { outDir: '../dist/fluid', emptyOutDir: true },
});
