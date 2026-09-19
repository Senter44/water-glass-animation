(() => {
  'use strict';
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const flowForHeight = height => Math.pow(clamp((88 - height) / 88, 0, 1), 1.35);

  class Simulation {
    constructor(random = Math.random) {
      this.random = random;
      this.reset();
    }

    reset() {
      this.drops = [];
      this.ripples = [];
      this.splashes = [];
      this.time = 0;
      this.emission = 0;
      this.lastImpact = -1;
    }

    step(delta, nozzle, flow, poolY) {
      const dt = clamp(delta, 0, 1 / 30);
      this.time += dt;
      const rate = flow > 0.001 ? 7 + 160 * flow : 0;
      this.emission += dt * rate;
      while (this.emission >= 1 && this.drops.length < 200) {
        this.emission -= 1;
        // Stagger emission within a frame so the stream does not become beads
        // synchronized to the display refresh rate.
        const age = this.emission / rate;
        const vx = -10 - 18 * flow + (this.random() - 0.5) * 8;
        const vy = 35 + flow * 65;
        this.drops.push({
          x: nozzle.x + vx * age + (this.random() - 0.5) * 1.2,
          y: nozzle.y + vy * age + 600 * age * age,
          vx, vy: vy + 1200 * age, age, size: 0.85 + this.random() * 0.7,
        });
      }
      if (!rate || this.drops.length >= 200) this.emission = 0;

      for (let i = this.drops.length - 1; i >= 0; i--) {
        const drop = this.drops[i];
        drop.x += drop.vx * dt;
        drop.y += drop.vy * dt + 600 * dt * dt;
        drop.vy += 1200 * dt;
        drop.age += dt;
        if (drop.y >= poolY) {
          if (this.time - this.lastImpact > 0.085) {
            this.lastImpact = this.time;
            if (this.ripples.length < 28) this.ripples.push({ x: drop.x, y: poolY, age: 0, strength: clamp(drop.vy / 900, 0.3, 1) });
            for (let j = 0; j < 3 && this.splashes.length < 80; j++) {
              this.splashes.push({ x: drop.x, y: poolY, vx: (this.random() - 0.5) * 150, vy: -40 - this.random() * 100, age: 0, size: 0.5 + this.random() * 0.6 });
            }
          }
          this.drops.splice(i, 1);
        }
      }
      for (let i = this.splashes.length - 1; i >= 0; i--) {
        const splash = this.splashes[i];
        splash.x += splash.vx * dt;
        splash.y += splash.vy * dt;
        splash.vy += 700 * dt;
        splash.age += dt;
        if (splash.y > poolY || splash.age > 0.55) this.splashes.splice(i, 1);
      }
      for (let i = this.ripples.length - 1; i >= 0; i--) {
        this.ripples[i].age += dt;
        if (this.ripples[i].age > 1.8) this.ripples.splice(i, 1);
      }
    }
  }
  globalThis.BambooPhysics = { Simulation, flowForHeight, clamp };
})();
