(() => {
  'use strict';
  const { Simulation, flowForHeight, clamp } = BambooPhysics;
  const garden = document.getElementById('garden');
  const canvas = document.getElementById('water');
  const context = canvas.getContext('2d');
  const handle = document.getElementById('spout-handle');
  const heightInput = document.getElementById('height');
  const pauseButton = document.getElementById('pause');
  const flowState = document.getElementById('flow-state');
  const loadState = document.getElementById('load-state');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const bamboo = new Image();
  const model = new Simulation();
  let height = Number(heightInput.value);
  let worldWidth = 1000;
  let scale = 1;
  let poolY = 510;
  let ready = false;
  let paused = reducedMotion.matches;
  let frame = 0;
  let lastTime = 0;
  let drag = null;

  // All geometry and particles share one coordinate system. The source is the
  // measured low lip of the transparent sprite, not a fixed screen position.
  function geometry() {
    const width = clamp(worldWidth * 0.9, 350, 900);
    const angle = -0.33 + height * 0.0056;
    const pivot = { x: worldWidth * 0.5 + width * 0.802, y: 115 };
    const localX = (120 / 1536 - 0.88) * width;
    const localY = (722 / 1024 - 0.54) * width * 2 / 3;
    const c = Math.cos(angle), s = Math.sin(angle);
    return { width, angle, pivot, nozzle: { x: pivot.x + localX * c - localY * s, y: pivot.y + localX * s + localY * c } };
  }

  function updateControls() {
    const flow = flowForHeight(height);
    heightInput.value = String(Math.round(height));
    heightInput.setAttribute('aria-valuetext', `${Math.round(height)} percent raised`);
    flowState.textContent = paused ? 'Motion paused' : flow < 0.001 ? 'Flow stopped' : flow < 0.18 ? 'Slow drops' : flow < 0.65 ? 'Gentle flow' : 'Steady pour';
    pauseButton.textContent = paused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', paused ? 'Play water animation' : 'Pause water animation');
    const g = geometry();
    handle.style.left = `${(g.nozzle.x + 55) * scale}px`;
    handle.style.top = `${(g.nozzle.y - 48) * scale}px`;
  }

  function setHeight(value) {
    height = clamp(value, 0, 100);
    updateControls();
    if (ready && paused) draw();
  }

  function resize() {
    const rect = garden.getBoundingClientRect();
    scale = rect.height / 640;
    worldWidth = rect.width / scale;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(rect.width * pixelRatio);
    canvas.height = Math.round(rect.height * pixelRatio);
    context.setTransform(pixelRatio * scale, 0, 0, pixelRatio * scale, 0, 0);
    // Background is cover/bottom; track the actual pond plane after cropping.
    const backgroundScale = Math.max(worldWidth / 1536, 640 / 1024);
    poolY = 640 - 0.20 * 1024 * backgroundScale;
    model.reset();
    updateControls();
    if (ready) draw();
  }

  function drawRipples() {
    for (const ripple of model.ripples) {
      const alpha = Math.sin(Math.PI * ripple.age / 1.8) * 0.45 * ripple.strength;
      const radius = 3 + ripple.age * 63;
      context.beginPath();
      context.ellipse(ripple.x, ripple.y, radius, radius * 0.125, 0, 0, Math.PI * 2);
      context.strokeStyle = `rgba(18,38,17,${alpha})`;
      context.lineWidth = 2;
      context.stroke();
      context.beginPath();
      context.ellipse(ripple.x, ripple.y - 1, radius, radius * 0.125, 0, 0, Math.PI * 2);
      context.strokeStyle = `rgba(229,240,192,${alpha * 0.8})`;
      context.lineWidth = 0.75;
      context.stroke();
    }
  }

  function drawDrops() {
    context.lineCap = 'round';
    for (const drop of model.drops) {
      const trail = Math.min(14, drop.vy * 0.011);
      context.beginPath();
      context.moveTo(drop.x, drop.y - trail);
      context.lineTo(drop.x, drop.y);
      context.strokeStyle = 'rgba(29,54,40,0.52)';
      context.lineWidth = drop.size * 2.8;
      context.stroke();
      context.beginPath();
      context.moveTo(drop.x - 0.4, drop.y - trail);
      context.lineTo(drop.x - 0.4, drop.y);
      context.strokeStyle = 'rgba(236,249,235,0.76)';
      context.lineWidth = drop.size * 0.9;
      context.stroke();
    }
    for (const splash of model.splashes) {
      context.beginPath();
      context.ellipse(splash.x, splash.y, splash.size, splash.size * 1.6, 0, 0, Math.PI * 2);
      context.fillStyle = `rgba(240,250,223,${0.65 * (1 - splash.age / 0.55)})`;
      context.fill();
    }
  }

  function draw() {
    context.clearRect(0, 0, worldWidth, 640);
    drawRipples();
    drawDrops();
    const g = geometry();
    context.save();
    context.translate(g.pivot.x, g.pivot.y);
    context.rotate(g.angle);
    context.drawImage(bamboo, -g.width * 0.88, -g.width * 2 / 3 * 0.54, g.width, g.width * 2 / 3);
    context.restore();
  }

  function animate(now) {
    frame = 0;
    if (!ready || paused || document.hidden) return;
    const dt = lastTime ? Math.min((now - lastTime) / 1000, 1 / 30) : 1 / 60;
    lastTime = now;
    model.step(dt, geometry().nozzle, flowForHeight(height), poolY);
    draw();
    frame = requestAnimationFrame(animate);
  }

  function syncPlayback() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    updateControls();
    if (ready && !paused && !document.hidden) frame = requestAnimationFrame(animate);
  }

  function point(event) {
    const rect = garden.getBoundingClientRect();
    return { x: (event.clientX - rect.left) / scale, y: (event.clientY - rect.top) / scale };
  }

  function hitsBamboo(position) {
    const g = geometry();
    const x = position.x - g.pivot.x, y = position.y - g.pivot.y;
    const localX = (x * Math.cos(g.angle) + y * Math.sin(g.angle)) / g.width + 0.88;
    const localY = (-x * Math.sin(g.angle) + y * Math.cos(g.angle)) / (g.width * 2 / 3) + 0.54;
    return localX > 0.055 && localX < 0.96 && localY > 0.37 && localY < 0.72;
  }

  function startDrag(event) {
    if (!ready || (event.pointerType === 'mouse' && event.button !== 0)) return;
    if (event.currentTarget === canvas && !hitsBamboo(point(event))) return;
    event.preventDefault();
    drag = { pointer: event.pointerId, startY: point(event).y, startHeight: height };
    event.currentTarget.setPointerCapture(event.pointerId);
    handle.focus({ preventScroll: true });
  }

  function moveDrag(event) {
    if (drag && event.pointerId === drag.pointer) {
      const travel = geometry().width * 0.802 * 0.56;
      setHeight(drag.startHeight - (point(event).y - drag.startY) / travel * 100);
    } else if (event.currentTarget === canvas) canvas.style.cursor = hitsBamboo(point(event)) ? 'grab' : 'default';
  }

  function endDrag(event) {
    if (drag && event.pointerId === drag.pointer) drag = null;
  }

  [canvas, handle].forEach(element => {
    element.addEventListener('pointerdown', startDrag);
    element.addEventListener('pointermove', moveDrag);
    element.addEventListener('pointerup', endDrag);
    element.addEventListener('pointercancel', endDrag);
    element.addEventListener('lostpointercapture', endDrag);
  });
  handle.addEventListener('keydown', event => {
    const change = event.shiftKey ? 10 : 3;
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') setHeight(height + change);
    else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') setHeight(height - change);
    else if (event.key === 'Home') setHeight(0);
    else if (event.key === 'End') setHeight(100);
    else return;
    event.preventDefault();
  });
  heightInput.addEventListener('input', () => setHeight(Number(heightInput.value)));
  pauseButton.addEventListener('click', () => { paused = !paused; syncPlayback(); });
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener('change', event => { paused = event.matches; syncPlayback(); });
  window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); model.reset(); });

  function fail() {
    ready = false;
    cancelAnimationFrame(frame);
    handle.disabled = heightInput.disabled = pauseButton.disabled = true;
    loadState.hidden = false;
    loadState.textContent = 'The garden images could not load. Please reload this page to try again.';
  }

  if (!context) { fail(); return; }
  const gardenImage = document.querySelector('.garden-plate');
  gardenImage.addEventListener('error', fail);
  bamboo.onerror = fail;
  bamboo.onload = () => {
    if (gardenImage.complete && !gardenImage.naturalWidth) { fail(); return; }
    ready = true;
    loadState.hidden = true;
    handle.disabled = heightInput.disabled = pauseButton.disabled = false;
    resize();
    syncPlayback();
  };
  new ResizeObserver(resize).observe(garden);
  bamboo.src = 'assets/bamboo.png';
})();
