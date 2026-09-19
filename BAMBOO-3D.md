# Real-time 3D bamboo

The separate `/bamboo-3d/` route preserves the previous `/bamboo/` experiment.
It uses an actual hollow Blender model and a custom integration of Splash's
WebGPU MLS-MPM fluid solver. It is not a video, a clipped demo, or a painted
water overlay. The garden background is still an image-based environment.

## Controls

- Drag vertically (or use Bamboo height) to tilt the spout.
- Choose Orbit camera and drag to inspect the 3D opening.
- Arrow keys/Home/End work when the scene is focused.
- Pause freezes simulation; Reset water restores the reservoir and basin.

## Source and model

`tools/make-bamboo.py` creates the hollow, diagonally cut mesh in Blender.
`tools/bamboo.blend` is the editable model. `bamboo.glb` is the downloadable model.
`bamboo-mesh.json` is the same Blender-exported triangulated geometry, consumed
directly by the lightweight WebGPU renderer. The inner radius, outer radius,
cut plane, length and pivot match the analytic collider in `boundary.wgsl` and
its testable reference in `geometry.js`.

The live water is simulated with Splash, not Blender's offline FLIP solver.
Splash's MIT license is retained in the source and published assets.
The imported p2g pressure/mass-transfer kernels and narrow-range fluid surface
filter are from https://github.com/matsuoka-601/Splash (matsuoka-601, 2025).
Grid/particle bamboo collision, continuous reservoir recycling, scene renderer,
depth composition, controls, and model are custom work for this scene.

## Rendering and limitations

The bamboo and stone basin write actual scene depth. The fluid depth surface is
reconstructed from velocity-aligned overlapping ellipsoids and smoothed using
Splash's narrow-range filter. A shallow reservoir, low inlet speed and fractional
fixed-step emission budget produce a gentler pour. Water shading reconstructs normals,
refracts the scene and reflects the garden environment, with a water Fresnel term.
Water behind bamboo is occluded; water in the mouth and falling in front is visible.
The environment is a reused generated garden photograph (see BAMBOO.md).
This is a real-time prototype, not an offline photorealistic Cycles/FLIP render.
The approximate collider, particle resolution and screen-space reflections place
limits on small droplets, thin films and refracted objects outside the screen.

Eight thousand particles are reused; only pool particles are recycled into the
hidden rear reservoir. No particle arrays grow over time. The GPU grid is
72×60×36, render size is capped at 1000 pixels on its longest side and DPR 1.25.
The simulation uses fixed .12-unit substeps at 120 substeps per real second,
with a capped catch-up budget. Hidden tabs stop scheduling frames; reduced motion
starts paused. GPU resources are released on resize or page exit.

## Build and checks

From `fluid-src`, run `npm ci` then `node build-bamboo.mjs`.
This builds only `dist/bamboo-3d` and preserves the previous pages.
From the project root run `node --test test/bamboo-3d.test.cjs`.
Serve `dist` over localhost/HTTPS; WebGPU cannot be assumed on `file://`.
`canvas#scene[data-liquid]` exposes periodic read-only GPU counts of particles
inside the bamboo, falling, in the pool, and invalid, for verification.

Blender 4.5.11 LTS portable was used for authoring. Its distribution checksum
was verified against Blender's official SHA256 manifest. Blender is needed to
edit/re-export the model, not to visit the website.
