(() => {
  const grid = [72, 60, 36];
  const pivot = [54, 35, 18];
  const length = 26, outer = 4.7, inner = 4.05, cut = .85;
  const angleForHeight = h => .24 - Math.max(0, Math.min(100, h)) * .0046;
  function toWorld(p, a) {
    const x = p[0] - length, c = Math.cos(a), s = Math.sin(a);
    return [pivot[0] + c * x - s * p[1], pivot[1] + s * x + c * p[1], pivot[2] + p[2]];
  }
  function toLocal(p, a) {
    const x = p[0] - pivot[0], y = p[1] - pivot[1], c = Math.cos(a), s = Math.sin(a);
    return [c * x + s * y + length, -s * x + c * y, p[2] - pivot[2]];
  }
  function solidDistance(p) {
    const r = Math.hypot(p[1], p[2]);
    const shell = Math.max(r - outer, inner - r, (cut * p[1] - p[0]) / Math.hypot(1, cut), p[0] - length);
    const back = Math.max(r - outer, Math.abs(p[0] - length) - .4);
    return Math.min(shell, back);
  }
  function projectOut(point) {
    const p = [...point];
    for (let i = 0; i < 5; i++) {
      const d = solidDistance(p);
      if (d >= .15) break;
      const gradient = p.map((_, axis) => {
        const a = [...p], b = [...p]; a[axis] += .001; b[axis] -= .001;
        return solidDistance(a) - solidDistance(b);
      });
      const n = Math.hypot(...gradient) || 1;
      for (let j = 0; j < 3; j++) p[j] += gradient[j] / n * (.151 - d);
    }
    return p;
  }
  function initialParticles(count, angle) {
    const points = [], step = .68;
    for (let x = 1; x < 24.8; x += step) {
      for (let y = -3.65; y < -1.35; y += step) {
        for (let z = -3.6; z < 3.7; z += step) {
          const p = [x, y, z];
          if (solidDistance(p) > .3 && Math.hypot(y, z) < 3.7) points.push(toWorld(p, angle));
        }
      }
    }
    for (let y = 3.6; points.length < count && y < 12; y += step) {
      for (let x = -12.8; x < 13; x += step) {
        for (let z = -12.8; z < 13 && points.length < count; z += step) {
          if (Math.hypot(x, z) < 12.8) points.push([24 + x, y, 18 + z]);
        }
      }
    }
    if (points.length < count) throw new Error('Particle count exceeds the basin capacity');
    return points.slice(0, count);
  }
  class EmissionBudget {
    credit = 0;
    take(flow, steps) {
      this.credit += Math.max(0, Math.min(1, flow)) * 10 * Math.max(0, Math.min(6, steps));
      const count = Math.floor(this.credit + 1e-9);
      this.credit = Math.max(0, this.credit - count);
      return count;
    }
  }
  globalThis.BambooGeometry = { grid, pivot, length, outer, inner, cut, angleForHeight, toWorld, toLocal, solidDistance, projectOut, initialParticles, EmissionBudget };
})();
