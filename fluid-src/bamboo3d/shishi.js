(() => {
  class ShishiMechanism {
    rest = -.30;
    limit = .78;
    constructor() { this.reset(); }
    reset() {
      this.angle = this.rest;
      this.velocity = 0;
      this.cycles = 0;
      this.tipped = false;
      this.phase = 'Filling';
    }
    step(dt, count, waterMoment) {
      let remaining = Math.max(0, Math.min(.05, dt));
      while (remaining > 1e-9) {
        const h = Math.min(remaining, 1 / 120);
        // Moment is measured from live particles: sum(pivot.x - particle.x).
        // The sealed rear node counterbalances the dry scoop. Units are scaled.
        const dryMoment = 1400 * Math.cos(this.angle);
        const inertia = 1600 + Math.max(0, count) * 2.4;
        const acceleration = (waterMoment - dryMoment) / inertia - this.velocity * 1.5;
        this.velocity = Math.max(-.85, Math.min(.85, this.velocity + acceleration * h));
        this.angle += this.velocity * h;
        if (this.angle > .45) this.tipped = true;
        if (this.angle >= this.limit) { this.angle = this.limit; this.velocity = Math.min(0, this.velocity); }
        if (this.angle <= this.rest) {
          this.angle = this.rest;
          this.velocity = 0;
          if (this.tipped) { this.cycles++; this.tipped = false; }
        }
        this.phase = this.angle <= this.rest + .02 ? 'Filling' : this.velocity < -.025 ? 'Returning' : 'Tipping';
        remaining -= h;
      }
      return this.angle;
    }
  }
  globalThis.ShishiMechanism = ShishiMechanism;
})();
