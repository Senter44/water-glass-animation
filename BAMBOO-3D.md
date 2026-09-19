# Real-time 3D shishi-odoshi

The separate `/bamboo-3d/` route preserves the previous `/bamboo/` experiment.
It uses an actual hollow Blender tipping fountain and a custom integration of Splash's
WebGPU MLS-MPM fluid solver. It is not a video, a clipped demo, or a painted
water overlay. The garden background is still an image-based environment.

## Controls

- Automatic mode: water fills the scoop, its weight tips it, and the dry rear
  counterbalance returns it to the stone after it drains. No cycle timer is used.
- Water flow controls the fixed feeder; Off stops new water entering the scene.
- Drag to orbit. Choose Manual to tilt the scoop directly instead.
- Arrow keys operate the camera/manual tilt; Home resets the camera.
- Pause freezes water and automatic movement; Reset fountain empties the scoop
  and restores its resting balance. A cycle counter records completed returns.

## Coupled mechanism

The axle is at local x=17, world (42,28,18). A sealed node at x=18 holds water
in the front chamber. Every 100 ms, a reused GPU readback buffer measures the
particles actually inside the scoop and their horizontal lever arms. That load
drives a damped angular equation with a dry counterbalance and hard angle stops.
The resulting angle and wall velocity are sent back to the fluid collider.
Reset generations reject stale load samples; paused time advances neither solver.
The mass/inertia constants are tuned prototype units, not a calibrated rigid-body
solver. The posts, axle, fixed feeder and return stone are Blender meshes. The
stone contact is represented by the resting angle stop, not mesh contact solving.

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

The bamboo and stone basin write actual scene depth. Velocity-aligned particles
contribute additive Gaussian density and relative depth moments to one shared
screen-space surface, rather than retaining each particle's round outline.
A nearest-layer gate avoids merging unrelated fluid layers. Visible kernel cores
have priority over transparent fringes, preventing a fringe from erasing deeper
water. When only fringes overlap, they can still form a shared contour. The resolved surface
is smoothed using Splash's narrow-range filter. Depth moments are relative to the
nearest layer to avoid precision loss in the half-float accumulation texture.
A shallow reservoir, low inlet speed and fractional
fixed-step emission budget produce a gentler pour. Water shading reconstructs normals,
refracts the scene and reflects the garden environment, with a water Fresnel term.
Water behind bamboo is occluded; water in the mouth and falling in front is visible.
The environment is a reused generated garden photograph (see BAMBOO.md).
This is a real-time prototype, not an offline photorealistic Cycles/FLIP render.
The approximate collider, particle resolution and screen-space reflections place
limits on small droplets, thin films and refracted objects outside the screen.
Physically separated drops can remain visible at low flow; this reconstruction
does not turn empty gaps into a simulated continuous water sheet.
Layer selection remains approximate: a deeper core can win over a foreground
surface composed entirely of overlapping fringes.

Eight thousand particles are reused; only pool particles are recycled into the
fixed feeder above the scoop. No particle arrays grow over time. The GPU grid is
bounded, and feeder emission is capped with a prescribed downward inlet velocity
to avoid overpacking the small inlet with particles. The GPU grid is
72×60×36, render size is capped at 1000 pixels on its longest side and DPR 1.25.
The simulation uses fixed .12-unit substeps at 120 substeps per real second,
with a capped catch-up budget. Hidden tabs stop scheduling frames; reduced motion
starts paused. GPU resources are released on resize or page exit.
Surface reconstruction adds one bounded RGBA16F texture (8 bytes per render pixel);
the existing temporary depth texture is reused for its nearest-layer pass.

## Build and checks

From `fluid-src`, run `npm ci` then `node build-bamboo.mjs`.
This builds only `dist/bamboo-3d` and preserves the previous pages.
From the project root run `node --test test/bamboo-3d.test.cjs test/shishi.test.cjs test/fluid-surface.test.cjs`.
The surface tests cover a CPU reference of the kernel and resolve math; actual
WGSL compilation and visual output must also be checked in a WebGPU browser.
Serve `dist` over localhost/HTTPS; WebGPU cannot be assumed on `file://`.
`canvas#scene[data-liquid]` exposes periodic read-only GPU counts of particles
inside the bamboo, falling, in the pool, and invalid, for verification.
`data-mechanism` reports angle, phase, completed cycles and measured water load.

Blender 4.5.11 LTS portable was used for authoring. Its distribution checksum
was verified against Blender's official SHA256 manifest. Blender is needed to
edit/re-export the model, not to visit the website.
