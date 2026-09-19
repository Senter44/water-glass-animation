(() => {
  'use strict';
  // Pixel coordinates in the original bamboo sprite. Keep the inset boundary
  // inside the cut rim; the overflow is deliberately drawn across that rim.
  const hollowShape = 'M338 438 C355 435 368 447 368 465 C369 501 347 543 312 581 C270 630 219 666 168 682 C146 689 126 691 119 678 C120 649 140 616 174 575 C215 526 268 479 309 452 C321 444 331 440 338 438 Z';
  let hollow;
  const isSpilling = flow => flow > .001;

  function sample(t, angle) {
    const u = 1 - t;
    const endControl = { x: 120 - Math.sin(angle) * 40, y: 722 - Math.cos(angle) * 40 };
    return {
      x: u * u * u * 250 + 3 * u * u * t * 195 + 3 * u * t * t * endControl.x + t * t * t * 120,
      y: u * u * u * 590 + 3 * u * u * t * 620 + 3 * u * t * t * endControl.y + t * t * t * 722,
    };
  }

  function toWorld(g, point) {
    const x = (point.x / 1536 - .88) * g.width;
    const y = (point.y / 1024 - .54) * g.width * 2 / 3;
    return { x: g.pivot.x + x * Math.cos(g.angle) - y * Math.sin(g.angle), y: g.pivot.y + x * Math.sin(g.angle) + y * Math.cos(g.angle) };
  }

  function draw(context, bamboo, g, flow, time) {
    hollow ||= new Path2D(hollowShape);
    context.save();
    context.translate(g.pivot.x, g.pivot.y);
    context.rotate(g.angle);
    context.translate(-g.width * .88, -g.width * 2 / 3 * .54);
    context.scale(g.width / 1536, g.width / 1536);

    // A faint wet lining remains when lifted; it does not produce an overflow.
    context.save();
    context.clip(hollow);
    const wet = context.createLinearGradient(200, 570, 150, 695);
    wet.addColorStop(0, 'rgba(16,43,31,0)');
    wet.addColorStop(1, 'rgba(39,77,66,.22)');
    context.fillStyle = wet;
    context.fill(hollow);
    context.restore();
    if (!isSpilling(flow)) { context.restore(); return; }

    const strength = Math.sqrt(flow);
    const exitRadius = (flow < .18 ? 1.4 : 3 + 7 * strength) * 1536 / g.width;
    const points = [];
    for (let i = 0; i <= 36; i++) {
      const t = i / 36;
      const p = sample(t, g.angle);
      const before = sample(Math.max(0, t - .01), g.angle);
      const after = sample(Math.min(1, t + .01), g.angle);
      const dx = after.x - before.x, dy = after.y - before.y;
      const length = Math.hypot(dx, dy);
      points.push({ ...p, nx: -dy / length, ny: dx / length, r: (45 + 35 * strength) * (1 - t) + exitRadius * t });
    }

    function ribbon(list) {
      const path = new Path2D();
      list.forEach((p, index) => {
        const x = p.x + p.nx * p.r, y = p.y + p.ny * p.r;
        if (index) path.lineTo(x, y); else path.moveTo(x, y);
      });
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        path.lineTo(p.x - p.nx * p.r, p.y - p.ny * p.r);
      }
      path.closePath();
      return path;
    }

    function film(path) {
      const liquid = context.createLinearGradient(245, 580, 120, 722);
      liquid.addColorStop(0, 'rgba(25,63,50,.28)');
      liquid.addColorStop(.48, 'rgba(85,142,136,.44)');
      liquid.addColorStop(1, 'rgba(190,227,220,.56)');
      context.fillStyle = liquid;
      context.fill(path);
    }

    const interior = ribbon(points);
    context.save();
    context.clip(hollow);
    context.clip(interior);
    context.save();
    context.clip(interior);
    // Refract the actual inner bamboo texture through a moving shallow film.
    context.globalAlpha = .7;
    context.drawImage(bamboo, Math.sin(time * 3.3) * 3, -2);
    context.globalAlpha = 1;
    film(interior);
    context.restore();
    for (let i = 0; i < 5; i++) {
      const t = ((time * (.45 + flow * .65) + i / 5) % 1) * .85;
      const p = points[Math.floor(t * 36)];
      const extent = p.r * .8;
      context.beginPath();
      context.moveTo(p.x + p.nx * extent, p.y + p.ny * extent);
      context.quadraticCurveTo(p.x + 6, p.y + 8, p.x - p.nx * extent, p.y - p.ny * extent);
      context.strokeStyle = `rgba(233,255,239,${.10 + .3 * Math.sin(t * Math.PI)})`;
      context.lineWidth = 1.6;
      context.stroke();
    }
    context.restore();

    // The short film over the tan lip is foreground, unlike the falling water.
    // Clipping this to the hollow would reintroduce the dry-rim gap.
    const overflow = points.slice(24);
    film(ribbon(overflow));
    for (const side of [-1, 1]) {
      context.beginPath();
      overflow.forEach((p, index) => {
        const x = p.x + p.nx * p.r * side * .82;
        const y = p.y + p.ny * p.r * side * .82;
        if (index) context.lineTo(x, y); else context.moveTo(x, y);
      });
      context.strokeStyle = side < 0 ? 'rgba(20,52,37,.52)' : 'rgba(240,255,240,.83)';
      context.lineWidth = 1.3;
      context.stroke();
    }
    context.restore();
  }

  globalThis.BambooMouth = { draw, sample, toWorld, isSpilling };
})();
