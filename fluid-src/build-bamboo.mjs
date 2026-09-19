import { build } from 'vite';
import glsl from 'vite-plugin-glsl';
await build({
  configFile: false,
  root: 'bamboo3d',
  base: '/bamboo-3d/',
  plugins: [glsl()],
  build: { outDir: '../../dist/bamboo-3d', emptyOutDir: true },
});
