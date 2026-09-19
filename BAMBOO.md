# Interactive bamboo study

Serve `dist` with a static web server and open `/compare/#bamboo`.
The standalone `dist/bamboo/index.html` also works when opened directly.
Drag the bamboo or circular handle up/down. Lower it to pour, raise it to slow
the flow, and raise it above 88% to stop. The height slider and arrow keys work
too; Home lowers fully and End raises fully. Pause freezes motion.

The page is static HTML/CSS/JavaScript with no third-party runtime dependencies or backend.
The bamboo moves independently over the garden photograph. The water is drawn
and simulated in Canvas, with gravity, moving emission points, impact splashes
and expanding ripples. Dense flow forms a transparent, refractive ribbon that
narrows as gravity accelerates it, then breaks into droplets. Low flow produces
separate drips. Newborn samples use their precise emission age, so the jet does
not jump away from the lip at lower refresh rates.

A moving shallow water film is visible on the inside floor of the bamboo. It
refracts the inner texture and flows over the cut rim to the same anchor as the
falling stream. Lifting the bamboo stops the overflow, leaving a faint wet lining.
The drag handle sits on the shaft so it does not hide the opening.

A small WebGL optical layer displaces the existing pond reflections using the
eight latest impact waves, with subtle ambient surface motion. It falls back
to the Canvas ripple rendering when WebGL is unavailable. This is a lightweight
2D interaction with water-surface shading, not a 3D fluid
solver or a baked video. The existing Splash/WebGPU tab is unchanged.

Buffers are bounded at 200 falling drops, 80 splash particles, and 28 ripples;
pixel ratio is capped at 1.5. The pond layer is capped at 1100 × 900 pixels,
with one photo texture and eight wave sources. Only the selected tab is mounted. Hidden documents
stop scheduling animation frames, and reduced-motion users start paused.

## Asset provenance

Two assets were generated with the built-in image generation tool, one call per
asset, no variants. They are stored in the project at:

- `dist/bamboo/assets/garden.png` — 1536 × 1024 background plate.
- `dist/bamboo/assets/bamboo.png` — 1536 × 1024 transparent bamboo sprite.

The source photo supplied by the user guided the subject and composition. Water
is not part of either generated image. The measured lip anchor in the sprite
is (120, 722) pixels. Both sprite rendering and water emission use this anchor.

### Garden prompt

Use case: photorealistic-natural
Asset type: background plate for an interactive bamboo-water scene, landscape 1536x1024.
Primary request: A photorealistic close Japanese garden with softly blurred green foliage, and a still shallow green reflective pond across the BOTTOM approximately 25% of the frame. A subtle dark weathered mossy stone edge runs along the very bottom.
Composition/framing: Camera nearly level with the low pond, shallow depth of field. Spacious quiet garden center, unoccupied. The pond begins approximately y=75%, spans the full width, and is visually flat and completely still. Background occupies upper 75% with natural foliage bokeh, a muted gray stone or garden-path blur in the lower background, green and ochre plant tones.
Lighting/mood: Soft natural daylight, calm Japanese garden atmosphere, dappled soft warm highlights and moss greens, like close garden photography.
Materials/textures: Realistic green water reflections and dark rough stone at bottom edge.
Constraints: This is the empty environmental background only. Absolutely no bamboo, no spout, no water stream, no drops, no splash, no ripples, no circular wave patterns, no people, no text, no logos, no borders. One continuous photograph, no collage.

### Bamboo prompt

Use case: photorealistic-natural
Asset type: standalone bamboo spout SPRITE for interactive compositing, landscape 1536x1024 with a genuinely transparent alpha background.
Primary request: One long green hollow bamboo tube, HORIZONTALLY oriented from right toward left, with an open diagonal cut end at the LEFT. The entire single bamboo tube must be visible and contained well inside the image, with transparent padding around all sides. It does NOT touch or crop any image edge. The cut-end low lip, where water would emerge, is approximately x=15% and y=65% of the canvas.
Composition/framing: Bamboo occupies about the central 70% of the image width and about 30% of the image height. Its long center axis runs horizontally. A long tube extends rightward from its open LEFT end. View from slightly above so the tan fibrous cut rim and dark hollow opening at the left are plainly visible. Oval diagonal-cut opening is photorealistic, with its low lip near the requested location. The opposite right end stays inside the image with generous padding. No water is present.
Lighting/mood: Natural softly dappled Japanese-garden daylight from upper left, realistic deep organic green bamboo surface and subtle glossy highlight, one natural bamboo node ring toward the right, tan dry fibers along the cut rim, dark hollow interior.
Constraints: TRUE TRANSPARENT BACKGROUND with alpha channel; do not paint a checkerboard or any backdrop. Only one isolated bamboo object. No water, no droplets, no stream, no pond, no foliage, no cast shadows outside the object, no ground, no collage, no diagram, no text, no labels, no borders. Preserve detailed clean bamboo silhouette and cut rim.

## Verification

Run `node --test test/bamboo-physics.test.cjs test/bamboo-mouth.test.cjs` for flow,
gravity, moving nozzle, interior-to-outlet alignment, particle lifetime, and
responsive geometry checks. Browser checks cover dragging,
keyboard height control, Pause/Play, 390px and 1400px layouts, and switching tabs.
