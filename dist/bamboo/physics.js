(() => {
  'use strict';
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const flowForHeight = height => Math.pow(clamp((88 - height) / 88, 0, 1), 1.35);
  const radiusForDrop = drop => clamp(drop.sourceRadius * Math.sqrt(drop.initialSpeed / drop.vy), 0.5, 4);

  function geometryForScene(worldWidth, poolY, height) {
    const width = clamp(worldWidth * 0.9, 350, 900);
    const pivot = { x: Math.max(worldWidth * 0.5 + width * 0.802, worldWidth + width * 0.1), y: 115 };
    const localX = (120 / 1536 - 0.88) * width;
    const localY = (722 / 1024 - 0.54) * width * 2 / 3;
    const highest = Math.max(70, pivot.y - width * 0.075);
    const lowest = Math.min(440, poolY - 80, pivot.y + width * 0.35);
    const travel = lowest - highest;
    const targetY = highest + travel * (1 - clamp(height, 0, 100) / 100);
    const angle = Math.atan2(localY, -localX) - Math.asin(clamp((targetY - pivot.y) / Math.hypot(localX, localY), -1, 1));
    const c = Math.cos(angle), s = Math.sin(angle);
    return { width, angle, pivot, travel, nozzle: { x: pivot.x + localX * c - localY * s, y: pivot.y + localX * s + localY * c } };
  }

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
      this.impactInterval = 0.09;
      this.sequence = 0;
      this.run = 0;
      this.lastNozzle = null;
      this.lastFlow = 0;
      this.nextDrip = 1;
    }

    step(delta, nozzle, flow, poolY) {
      const dt = clamp(delta, 0, 1 / 30);
      this.time += dt;
      // Advance existing water first. New samples below have only the age
      // remaining after their precise emission time, not another full frame.
      for (let i = this.drops.length - 1; i >= 0; i--) {
        const drop = this.drops[i];
        drop.age += dt;
        drop.vy = drop.initialSpeed + 1200 * drop.age;
        drop.x = drop.originX + drop.vx * drop.age;
        drop.y = drop.originY + drop.initialSpeed * drop.age + 600 * drop.age * drop.age;
        if (drop.y >= poolY) {
          if (this.time - this.lastImpact > this.impactInterval) {
            this.lastImpact = this.time;
            this.impactInterval = 0.08 + this.random() * 0.07;
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

      const running = flow > 0.001;
      if ((!running && this.lastFlow > 0.001) || (this.lastNozzle && Math.hypot(nozzle.x - this.lastNozzle.x, nozzle.y - this.lastNozzle.y) > 30)) this.run++;
      this.lastNozzle = { x: nozzle.x, y: nozzle.y };
      this.lastFlow = flow;
      const dripping = flow < 0.18;
      const rate = !running ? 0 : dripping ? 1 + 18 * Math.sqrt(flow) : 80 + 110 * flow;
      this.emission += dt * rate;
      let threshold = dripping ? this.nextDrip : 1;
      while (this.emission >= threshold && this.drops.length < 200) {
        this.emission -= threshold;
        const age = Math.min(dt, this.emission / rate);
        const bornAt = this.time - age;
        const vx = -10 - 18 * flow + 1.6 * Math.sin(bornAt * 5.3) + 0.7 * Math.sin(bornAt * 13.1);
        const initialSpeed = 40 + flow * 78 + 5 * Math.sin(bornAt * 9.2);
        this.drops.push({
          id: this.sequence++, run: this.run, bornAt, flow,
          originX: nozzle.x, originY: nozzle.y,
          x: nozzle.x + vx * age,
          y: nozzle.y + initialSpeed * age + 600 * age * age,
          vx, vy: initialSpeed + 1200 * age, initialSpeed, age,
          sourceRadius: dripping ? 2.3 + this.random() * 0.7 : 1.4 + 2.5 * Math.sqrt(flow),
          breakupAge: dripping ? 0 : 0.16 + 0.35 * Math.sqrt(flow) + 0.04 * Math.sin(bornAt * 7.7),
          size: 0.85 + this.random() * 0.7,
        });
        this.nextDrip = 0.7 + this.random() * 0.6;
        threshold = dripping ? this.nextDrip : 1;
      }
      if (!rate || this.drops.length >= 200) this.emission = 0;
    }
  }
  globalThis.BambooPhysics = { Simulation, flowForHeight, clamp, geometryForScene, radiusForDrop };
})();
