const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('WebGPU builds use relative paths on a GitHub project site', () => {
  assert.match(read('fluid-src/vite.config.ts'), /base:\s*['"]\.\/['"]/);
  assert.match(read('fluid-src/build.mjs'), /base:\s*['"]\.\/['"]/);
  assert.match(read('fluid-src/build-bamboo.mjs'), /base:\s*['"]\.\/['"]/);
  assert.doesNotMatch(read('fluid-src/index.html'), /href=['"]\/['"]/);
});

test('GitHub Pages deploys the complete static dist directory', () => {
  const workflow = read('.github/workflows/pages.yml');
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /path:\s*dist/);
  assert.ok(fs.existsSync(path.join(root, 'dist/.nojekyll')));
});
