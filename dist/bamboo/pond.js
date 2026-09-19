// A small optical surface, not a second fluid simulation. The eight most recent
// impacts bend the existing garden reflection at a bounded render resolution.
(() => {
  'use strict';
  const vertex = `attribute vec2 a_position;
    varying vec2 v_uv;
    void main() { v_uv = vec2(a_position.x * .5 + .5, .5 - a_position.y * .5); gl_Position = vec4(a_position, 0., 1.); }`;
  const fragment = `precision highp float;
    varying vec2 v_uv;
    uniform sampler2D u_photo;
    uniform vec2 u_world;
    uniform vec4 u_crop;
    uniform vec2 u_bounds;
    uniform float u_time;
    uniform vec4 u_ripples[8];
    vec3 photo(vec2 p) { return texture2D(u_photo, (p - u_crop.xy) / u_crop.zw).rgb; }
    void main() {
      vec2 p = v_uv * u_world;
      float mask = smoothstep(u_bounds.x, u_bounds.x + 12., p.y) * (1. - smoothstep(u_bounds.y - 12., u_bounds.y, p.y));
      if (mask < .001) { gl_FragColor = vec4(0.); return; }
      vec2 slope = vec2(.12 * sin(p.x * .055 + u_time * .75) * sin(p.y * .12 - u_time),
        .20 * cos(p.x * .022 - p.y * .18 + u_time * .85) + .08 * sin(p.y * .35 + u_time));
      for (int i = 0; i < 8; i++) {
        vec4 ripple = u_ripples[i];
        vec2 d = (p - ripple.xy) * vec2(1., 6.5);
        float r = max(length(d), .1);
        float phase = r - ripple.z * 86.;
        float envelope = exp(-phase * phase / 650.) * exp(-ripple.z * 1.25) * ripple.w;
        slope += d / r * cos(phase * .27) * envelope * 1.3;
      }
      vec2 offset = slope * vec2(5.5, 2.4) * mask;
      vec3 color = photo(p + offset);
      float lighting = clamp(dot(slope, vec2(-.08, .055)), -.12, .12) * mask;
      color = color * (1. + lighting) + max(lighting, 0.) * vec3(.13, .14, .10);
      gl_FragColor = vec4(color, mask);
    }`;

  class PondSurface {
    constructor(canvas, image) {
      this.canvas = canvas;
      this.image = image;
      this.active = false;
      this.impacts = new Float32Array(32);
      this.gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power' });
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.active = false; canvas.hidden = true; });
      canvas.addEventListener('webglcontextrestored', () => { this.initialize(); });
      if (this.gl) this.initialize();
    }

    initialize() {
      const gl = this.gl;
      const shaders = [];
      try {
        for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
          const shader = gl.createShader(type);
          shaders.push(shader);
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
          if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
        }
        this.program = gl.createProgram();
        shaders.forEach(shader => gl.attachShader(this.program, shader));
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(this.program));
        gl.useProgram(this.program);
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(this.program, 'a_position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
        this.uniforms = Object.fromEntries(['world', 'crop', 'bounds', 'time', 'ripples[0]'].map(name => [name, gl.getUniformLocation(this.program, `u_${name}`)]));
        this.active = true;
        this.canvas.hidden = false;
        this.canvas.dataset.surface = 'refraction';
      } catch (error) {
        this.active = false;
        this.canvas.hidden = true;
        this.canvas.dataset.surface = 'fallback';
        console.warn('Pond reflections unavailable; using the 2D water view.', error.message);
        this.release();
      } finally {
        shaders.forEach(shader => gl.deleteShader(shader));
      }
    }

    render(worldWidth, crop, bounds, model) {
      if (!this.active) return false;
      const gl = this.gl;
      const width = Math.min(1100, Math.round(this.canvas.clientWidth));
      const height = Math.max(1, Math.round(width * 640 / worldWidth));
      if (this.canvas.width !== width || this.canvas.height !== height) {
        this.canvas.width = width;
        this.canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.useProgram(this.program);
      gl.uniform2f(this.uniforms.world, worldWidth, 640);
      gl.uniform4fv(this.uniforms.crop, crop);
      gl.uniform2fv(this.uniforms.bounds, bounds);
      gl.uniform1f(this.uniforms.time, model.time);
      this.impacts.fill(0);
      model.ripples.slice(-8).forEach((ripple, index) => this.impacts.set([ripple.x, ripple.y, ripple.age, ripple.strength], index * 4));
      gl.uniform4fv(this.uniforms['ripples[0]'], this.impacts);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      return true;
    }

    release() {
      const gl = this.gl;
      if (!gl) return;
      if (this.buffer) gl.deleteBuffer(this.buffer);
      if (this.texture) gl.deleteTexture(this.texture);
      if (this.program) gl.deleteProgram(this.program);
      this.active = false;
    }
  }
  globalThis.PondSurface = PondSurface;
})();
