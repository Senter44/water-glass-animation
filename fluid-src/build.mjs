import { build } from 'vite';
import glsl from 'vite-plugin-glsl';
await build({
  configFile: false,
  base: './',
  plugins: [glsl()],
  build: { outDir: '../dist/fluid', emptyOutDir: true },
});
