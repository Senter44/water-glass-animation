document.documentElement.classList.toggle('embed-study', new URLSearchParams(location.search).get('embed') === 'study');

const scene = document.querySelector('#water-scene');
if (document.documentElement.classList.contains('embed-study')) {
  scene.setAttribute('preserveAspectRatio', 'xMidYMid meet');
}
const button = document.querySelector('#motion');
const label = document.querySelector('#motion-label');
const icon = document.querySelector('#motion-icon');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let playing = !reducedMotion.matches;

function syncMotion() {
  const running = playing && !document.hidden;
  if (running) scene.unpauseAnimations();
  else scene.pauseAnimations();
  button.setAttribute('aria-pressed', String(playing));
  button.setAttribute('aria-label', playing ? 'Pause animation' : 'Play animation');
  label.textContent = playing ? 'Pause' : 'Play';
  icon.textContent = playing ? 'Ⅱ' : '▶';
}
button.addEventListener('click', () => { playing = !playing; syncMotion(); });
reducedMotion.addEventListener('change', () => { playing = !reducedMotion.matches; syncMotion(); });
document.addEventListener('visibilitychange', syncMotion);
syncMotion();
