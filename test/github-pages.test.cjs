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
  for (const action of ['checkout', 'configure-pages', 'upload-pages-artifact', 'deploy-pages']) {
    assert.match(workflow, new RegExp(`actions/${action}@[0-9a-f]{40}`));
  }
  assert.doesNotMatch(workflow, /uses:\s*actions\/[^@]+@v\d/);
  assert.match(workflow, /npm ci/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /node build-bamboo\.mjs/);
  assert.match(workflow, /node --test test\/\*\.test\.cjs/);
  assert.match(workflow, /git diff --exit-code -- dist/);
  assert.match(workflow, /path:\s*dist/);
  assert.ok(fs.existsSync(path.join(root, 'dist/.nojekyll')));
});
