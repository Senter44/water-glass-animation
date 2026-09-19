(() => {
  'use strict';
  const { Simulation, flowForHeight, clamp, geometryForScene, radiusForDrop } = BambooPhysics;
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
  const gardenImage = document.querySelector('.garden-plate');
  const backdrop = document.createElement('canvas');
  const backdropContext = backdrop.getContext('2d');
  const crop = new Float32Array(4);
  const pondBounds = new Float32Array(2);
  let surface = null;
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
    return geometryForScene(worldWidth, poolY, height);
  }

  function updateControls() {
    const flow = flowForHeight(height);
    heightInput.value = String(Math.round(height));
    heightInput.setAttribute('aria-valuetext', `${Math.round(height)} percent raised`);
    flowState.textContent = paused ? 'Motion paused' : flow < 0.001 ? 'Flow stopped' : flow < 0.18 ? 'Slow drops' : flow < 0.5 ? 'Gentle flow' : 'Steady pour';
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
    if (!rect.width || !rect.height) return;
    scale = rect.height / 640;
    worldWidth = rect.width / scale;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(rect.width * pixelRatio);
    canvas.height = Math.round(rect.height * pixelRatio);
    context.setTransform(pixelRatio * scale, 0, 0, pixelRatio * scale, 0, 0);
    // Background is cover/bottom; track the actual pond plane after cropping.
    const backgroundScale = Math.max(worldWidth / 1536, 640 / 1024);
    const extraWide = worldWidth / 640 > 3;
    garden.classList.toggle('extra-wide', extraWide);
    poolY = extraWide ? 512 : 640 - 0.20 * 1024 * backgroundScale;
    crop.set(extraWide ? [0, 0, worldWidth, 640] : [(worldWidth - 1536 * backgroundScale) / 2, 640 - 1024 * backgroundScale, 1536 * backgroundScale, 1024 * backgroundScale]);
    pondBounds.set([crop[1] + crop[3] * 0.666, crop[1] + crop[3] * 0.885]);
    if (ready) {
      backdrop.width = canvas.width;
      backdrop.height = canvas.height;
      backdropContext.setTransform(pixelRatio * scale, 0, 0, pixelRatio * scale, 0, 0);
      backdropContext.drawImage(gardenImage, crop[0], crop[1], crop[2], crop[3]);
    }
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
    let chain = [];
    function flush() {
      if (chain.length > 1) drawRibbon(chain);
      else if (chain.length) drawBead(chain[0]);
      chain = [];
    }
    for (let i = 0; i < model.drops.length; i++) {
      const drop = model.drops[i];
      const cohesive = drop.flow >= 0.18 && drop.age < drop.breakupAge;
      if (!cohesive) { flush(); drawBead(drop); continue; }
      const previous = chain[chain.length - 1];
      if (previous && (previous.run !== drop.run || previous.id + 1 !== drop.id || Math.hypot(previous.x - drop.x, previous.y - drop.y) > 18)) flush();
      chain.push(drop);
    }
    const youngest = chain[chain.length - 1];
    const nozzle = geometry().nozzle;
    const currentFlow = flowForHeight(height);
    if (youngest && currentFlow >= 0.18 && youngest.run === model.run && Math.hypot(youngest.x - nozzle.x, youngest.y - nozzle.y) < 8) {
      chain.push({ ...youngest, x: nozzle.x, y: nozzle.y, age: 0, vy: youngest.initialSpeed });
    }
    flush();
    if (currentFlow > 0.001 && currentFlow < 0.18) {
      // A drip grows at the wet lip before detaching under gravity.
      const progress = clamp(model.emission / model.nextDrip, 0, 1);
      const radius = .4 + 2.3 * Math.cbrt(progress);
      drawBead({ x: nozzle.x, y: nozzle.y + radius * .45, sourceRadius: radius, initialSpeed: 1, vy: 1, size: 1 });
    }
    for (const splash of model.splashes) {
      context.globalAlpha = Math.max(0, 1 - splash.age / 0.55);
      drawBead({ ...splash, sourceRadius: splash.size, initialSpeed: 60, vy: Math.max(60, Math.abs(splash.vy)) });
    }
    context.globalAlpha = 1;
  }

  function drawRibbon(drops) {
    const samples = drops.map(drop => ({
      x: drop.x + Math.sin(drop.bornAt * 26 + drop.age * 5) * Math.min(0.65, drop.age * 2),
      y: drop.y,
      r: radiusForDrop(drop) * (1 + 0.10 * Math.sin(drop.bornAt * 47)),
    }));
    const path = new Path2D();
    path.moveTo(samples[0].x - samples[0].r, samples[0].y);
    samples.slice(1).forEach(p => path.lineTo(p.x - p.r, p.y));
    samples.slice().reverse().forEach(p => path.lineTo(p.x + p.r, p.y));
    path.closePath();
    context.save();
    context.clip(path);
    // The transparent core refracts the actual scene instead of painting a
    // solid white/blue hose. The small offset varies with the moving surface.
    const shift = 4 + 2 * Math.sin(model.time * 4.1);
    context.drawImage(backdrop, 0, 0, backdrop.width, backdrop.height, -shift, -1, worldWidth, 642);
    context.fillStyle = 'rgba(163,194,176,0.22)';
    context.fill(path);
    context.restore();
    for (const side of [-1, 1]) {
      context.beginPath();
      samples.forEach((p, i) => {
        const x = p.x + side * p.r * 0.8;
        if (i === 0) context.moveTo(x, p.y); else context.lineTo(x, p.y);
      });
      context.lineWidth = side < 0 ? 0.95 : 0.7;
      context.strokeStyle = side < 0 ? 'rgba(19,39,27,0.68)' : 'rgba(247,255,245,0.85)';
      context.stroke();
    }
    // Broken glints slide down the column; no uniformly bright center stripe.
    for (let i = 1; i < samples.length; i++) {
      if (Math.sin(drops[i].bornAt * 48) < 0.35) continue;
      context.beginPath();
      context.moveTo(samples[i - 1].x - samples[i - 1].r * .3, samples[i - 1].y);
      context.lineTo(samples[i].x - samples[i].r * .3, samples[i].y);
      context.strokeStyle = 'rgba(248,255,241,0.65)';
      context.lineWidth = 0.7;
      context.stroke();
    }
  }

  function drawBead(drop) {
    const radius = radiusForDrop(drop) * (drop.size || 1);
    const stretch = 1 + Math.min(0.65, Math.abs(drop.vy) / 900);
    context.save();
    context.translate(drop.x, drop.y);
    context.scale(radius, radius * stretch);
    const shine = context.createRadialGradient(-0.3, -0.4, 0.05, 0, 0, 1);
    shine.addColorStop(0, 'rgba(254,255,242,.93)');
    shine.addColorStop(.28, 'rgba(218,237,220,.48)');
    shine.addColorStop(.60, 'rgba(88,130,101,.16)');
    shine.addColorStop(.87, 'rgba(10,37,25,.76)');
    shine.addColorStop(1, 'rgba(230,249,230,.65)');
    context.beginPath();
    context.arc(0, 0, 1, 0, Math.PI * 2);
    context.fillStyle = shine;
    context.fill();
    context.restore();
  }

  function drawImpacts() {
    for (const ripple of model.ripples) {
      if (ripple.age > .28) continue;
      const fade = 1 - ripple.age / .28;
      context.beginPath();
      context.ellipse(ripple.x, ripple.y, 3 + ripple.age * 17, 1.1 + ripple.age * 4, 0, 0, Math.PI * 2);
      context.strokeStyle = `rgba(228,245,208,${fade * .45})`;
      context.lineWidth = 0.8;
      context.stroke();
    }
  }

  function draw() {
    context.clearRect(0, 0, worldWidth, 640);
    const refracting = surface?.render(worldWidth, crop, pondBounds, model);
    if (!refracting) drawRipples();
    drawImpacts();
    drawDrops();
    const g = geometry();
    context.save();
    context.translate(g.pivot.x, g.pivot.y);
    context.rotate(g.angle);
    context.filter = 'saturate(0.9) brightness(0.96)';
    context.drawImage(bamboo, -g.width * 0.88, -g.width * 2 / 3 * 0.54, g.width, g.width * 2 / 3);
    context.restore();
  }

  function animate(now) {
    frame = 0;
    if (!ready || paused || document.hidden) return;
    let remaining = lastTime ? Math.min((now - lastTime) / 1000, 0.12) : 1 / 60;
    lastTime = now;
    // Fixed small steps keep gravity consistent on lower-refresh displays.
    const nozzle = geometry().nozzle;
    const flow = flowForHeight(height);
    while (remaining > 0) {
      const dt = Math.min(remaining, 1 / 60);
      model.step(dt, nozzle, flow, poolY);
      remaining -= dt;
    }
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
      const travel = geometry().travel;
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
  window.addEventListener('pageshow', syncPlayback);

  function fail() {
    ready = false;
    cancelAnimationFrame(frame);
    handle.disabled = heightInput.disabled = pauseButton.disabled = true;
    loadState.hidden = false;
    loadState.textContent = 'The garden images could not load. Please reload this page to try again.';
  }

  if (!context || !backdropContext) { fail(); return; }
  gardenImage.addEventListener('error', fail);
  bamboo.onerror = fail;
  function startWhenLoaded() {
    if (ready || !bamboo.complete || !gardenImage.complete) return;
    if (!bamboo.naturalWidth || !gardenImage.naturalWidth) { fail(); return; }
    ready = true;
    surface = new PondSurface(document.getElementById('pond'), gardenImage);
    loadState.hidden = true;
    handle.disabled = heightInput.disabled = pauseButton.disabled = false;
    resize();
    syncPlayback();
  }
  bamboo.onload = startWhenLoaded;
  gardenImage.addEventListener('load', startWhenLoaded);
  new ResizeObserver(resize).observe(garden);
  bamboo.src = 'assets/bamboo.png';
})();
