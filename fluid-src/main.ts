import { Camera } from './camera'
import { mlsmpmParticleStructSize, MLSMPMSimulator } from './mls-mpm/mls-mpm'
import { renderUniformsViews, renderUniformsValues } from './camera'
import { FluidRenderer } from './render/fluidRender'
import './style.css';
document.documentElement.classList.toggle('embed', new URLSearchParams(location.search).get('embed') === 'glass');
let fatalError = false;
function fail(error: unknown) {
 fatalError = true;
 const message = error instanceof Error ? error.message : String(error);
 console.error(error);
 document.getElementById('gpu-status')!.textContent = 'Unavailable';
 const panel = document.getElementById('loading')!; panel.hidden = false; panel.classList.add('failed');
 panel.querySelector('h2')!.textContent = 'The simulation could not start';
 document.getElementById('error-reason')!.textContent = message;
 document.getElementById('retry')!.hidden = false;
 (document.getElementById('controls') as HTMLFieldSetElement).disabled = true;
}
document.getElementById('retry')!.addEventListener('click', () => location.reload());

/// <reference types="@webgpu/types" />


async function init() {
	const canvas: HTMLCanvasElement = document.querySelector('canvas')!

	if (!navigator.gpu) {
		throw new Error('WebGPU is unavailable here. Open this page in a current Chrome or Edge browser with graphics acceleration enabled.')
	}

	const adapter = await navigator.gpu.requestAdapter()

	if (!adapter) {
		throw new Error('The browser could not access a compatible GPU. Try Chrome or Edge with graphics acceleration enabled.')
	}

	const device = await adapter.requestDevice()
 device.addEventListener('uncapturederror', event => fail(new Error((event as GPUUncapturedErrorEvent).error.message)));
	// const device = await adapter.requestDevice({
	// 	requiredFeatures: ["float32-filterable"],
	// });

	if (!device) {
		alert("float-32-filterable is not supported")
		throw new Error()
	}

	const context = canvas.getContext('webgpu') as GPUCanvasContext

	if (!context) {
		throw new Error()	
	}

	const devicePixelRatio = Math.min(0.7, 1000 / Math.max(canvas.clientWidth, canvas.clientHeight));
	canvas.width = Math.max(2, Math.floor(devicePixelRatio * canvas.clientWidth / 2) * 2)
	canvas.height = Math.max(2, Math.floor(devicePixelRatio * canvas.clientHeight / 2) * 2)

	console.log(canvas.width, canvas.height)

	const presentationFormat = navigator.gpu.getPreferredCanvasFormat()

	context.configure({
		device,
		format: presentationFormat,
	})

	return { canvas, device, presentationFormat, context }
}

function initGui(particleCountTexts: string[]) {
 const params = { running: !matchMedia('(prefers-reduced-motion: reduce)').matches, r:176, g:232, b:245, speed:0.8, colorDensity:0.035, numParticles:particleCountTexts[0], resetRequested:false };
 const pause = document.getElementById('pause') as HTMLButtonElement;
 const update = () => { pause.textContent = params.running ? 'Pause' : 'Resume'; pause.setAttribute('aria-pressed', String(!params.running)); };
 const toggle = () => { params.running = !params.running; update(); };
 pause.addEventListener('click', toggle);
 document.getElementById('reset')!.addEventListener('click', () => { params.resetRequested = true; });
 const quality = document.getElementById('quality') as HTMLSelectElement;
 particleCountTexts.forEach(text => quality.add(new Option(text, text)));
 quality.addEventListener('change', () => { params.numParticles = quality.value; });
 const speed = document.getElementById('speed') as HTMLInputElement;
 speed.addEventListener('input', () => { params.speed = Number(speed.value); document.getElementById('speed-value')!.textContent = speed.value + '×'; });
 document.addEventListener('keydown', event => { if (event.code === 'KeyP' && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLSelectElement) && !event.repeat) toggle(); });
 update();
 return params;
}

async function main() {
	const { canvas, device, presentationFormat, context } = await init();
	
	console.log("initialization done")

	context.configure({
		device,
		format: presentationFormat,
	})

	let cubemapTexture: GPUTexture;
	{
		// The order of the array layers is [+X, -X, +Y, -Y, +Z, -Z]
		const imgSrcs = [
			'cubemap/posx.png',
			'cubemap/negx.png',
			'cubemap/posy.png',
			'cubemap/negy.png',
			'cubemap/posz.png',
			'cubemap/negz.png',
		];
		const promises = imgSrcs.map(async (src) => {
			const response = await fetch(src);
 if (!response.ok) throw new Error('Unable to load water lighting textures. Reload to retry.');
			return createImageBitmap(await response.blob());
		});
		const imageBitmaps = await Promise.all(promises);

		cubemapTexture = device.createTexture({
			dimension: '2d',
			// Create a 2d array texture.
			// Assume each image has the same size.
			size: [imageBitmaps[0].width, imageBitmaps[0].height, 6],
			format: 'rgba8unorm',
			usage:
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST |
			GPUTextureUsage.RENDER_ATTACHMENT,
		});

		for (let i = 0; i < imageBitmaps.length; i++) {
			const imageBitmap = imageBitmaps[i];
			device.queue.copyExternalImageToTexture(
				{ source: imageBitmap },
				{ texture: cubemapTexture, origin: [0, 0, i] },
				[imageBitmap.width, imageBitmap.height]
			);
		}
	}

	const cubemapTextureView = cubemapTexture.createView({
		dimension: 'cube',
	});
	console.log("cubemap initialization done")


	interface simulationParam {
		particleCount: number, 
		initBoxSize: number[], 
		initDistance: number, 
		mouseRadius: number,
		cameraTargetY: number, 
		guiText: string, 
	}

	const simulationParams: simulationParam[] = [
 { particleCount: 24000, initBoxSize:[28,38,28], initDistance:43, mouseRadius:7, cameraTargetY:21, guiText:'Glass · 24,000' },
 { particleCount: 16000, initBoxSize:[36,48,36], initDistance:56, mouseRadius:10, cameraTargetY:26, guiText:'Balanced · 16,000' },
 { particleCount: 30000, initBoxSize:[46,60,46], initDistance:72, mouseRadius:14, cameraTargetY:33, guiText:'Detailed · 30,000' }
 ]
	const particleCountTexts = simulationParams.map(param => param.guiText)
	const guiParams = initGui(particleCountTexts)
	const maxParticleCount = Math.max(...simulationParams.map(param => param.particleCount));
	const maxGridCount = Math.max(...simulationParams.map(param => param.initBoxSize[0] * param.initBoxSize[1] * param.initBoxSize[2]));

	// シミュレーションとレンダリングで使いまわすバッファ
	const maxParticleStructSize = mlsmpmParticleStructSize
	const particleBuffer = device.createBuffer({
		label: 'particles buffer', 
		size: maxParticleStructSize * maxParticleCount, 
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	})
	const posvelBuffer = device.createBuffer({
		label: 'posvel buffer', 
		size: 32 * maxParticleCount,  
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
	})
	const renderUniformBuffer = device.createBuffer({
		label: 'filter uniform buffer', 
		size: renderUniformsValues.byteLength, 
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
	})
	const initBoxSizeBuffer = device.createBuffer({
		label: 'init box size buffer', 
		size: 12,  // vec3f
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
	})

	// texture for depthmap
	const depthMapTexture = device.createTexture({
		label: 'depth map texture', 
		size: [canvas.width, canvas.height, 1],
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
		format: 'r32float',
	});
	const depthMapTextureView = depthMapTexture.createView()

	// texture for density grid
	// const densityGridSizeX = Math.ceil(Math.max(...simulationParams.map(param => param.initBoxSize[0])) / 64) * 64; // コピーのために切り上げ
	const densityGridSizeX = Math.max(...simulationParams.map(param => param.initBoxSize[0])); // コピーのために切り上げ
	const densityGridSizeY = Math.max(...simulationParams.map(param => param.initBoxSize[1]));
	const densityGridSizeZ = Math.ceil(Math.max(...simulationParams.map(param => param.initBoxSize[2])) / 128) * 128;
	const densityGridSize = [densityGridSizeX, densityGridSizeY, densityGridSizeZ]
	const densityGridBuffer = device.createBuffer({
		label: 'density grid buffer', 
		size: 4 * densityGridSizeX * densityGridSizeY * densityGridSizeZ, 
		usage: GPUBufferUsage.STORAGE, // コピー元
	})
	const castedDensityGridBuffer = device.createBuffer({
		label: 'casted density grid buffer', 
		size: 2 * densityGridSizeX * densityGridSizeY * densityGridSizeZ, 
		usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC, // コピー元
	})
	const densityGridSizeBuffer = device.createBuffer({
		label: 'density grid size buffer', 
		size: 12, 
		usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST, 
	})
	const densityGridSizeDataArray = new Float32Array(densityGridSize)
	device.queue.writeBuffer(densityGridSizeBuffer, 0, densityGridSizeDataArray)
	const densityGridTexture = device.createTexture({ 
		label: 'density grid texture', 
		size: [densityGridSizeZ, densityGridSizeY, densityGridSizeX], // これでいい？
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST, // コピー先
		format: 'r16float',
		dimension: '3d'
	})
	const densityGridTextureView = densityGridTexture.createView()
	console.log("buffer allocating done")

	const canvasElement = document.getElementById("fluidCanvas") as HTMLCanvasElement;
	// シミュレーション，カメラの初期化
	const mlsmpmFov = 60 * Math.PI / 180
	const mlsmpmRadius = 0.6
	const mlsmpmDiameter = 2 * mlsmpmRadius
	const mlsmpmZoomRate = 0.7
	const fixedPointMultiplier = 1e7
	const mlsmpmSimulator = new MLSMPMSimulator(
		particleBuffer, posvelBuffer, renderUniformBuffer, densityGridBuffer, castedDensityGridBuffer, 
		initBoxSizeBuffer, densityGridSizeBuffer, 
		device, depthMapTextureView, canvas, 
		maxGridCount, maxParticleCount, fixedPointMultiplier, mlsmpmDiameter
	)
	const mlsmpmRenderer = new FluidRenderer(
		renderUniformBuffer, posvelBuffer, densityGridSizeBuffer, initBoxSizeBuffer, 
		device, 
		depthMapTextureView, cubemapTextureView, densityGridTextureView, 
		canvas, 
		presentationFormat, 
		mlsmpmRadius, mlsmpmFov, fixedPointMultiplier
	)

	console.log("simulator initialization done")

	const camera = new Camera(canvasElement)

	// デバイスロストの監視
	let errorLog = document.getElementById('error-reason') as HTMLSpanElement
	errorLog.textContent = ""
	device.lost.then(info => {
		const reason = info.reason ? `reason: ${info.reason}` : 'unknown reason';
		fail(new Error('Graphics device disconnected (' + reason + '). Reload to retry.'));
	});

	let paramsIdx = -1
	let realBoxSize = [0, 0, 0]
	let initBoxSize = [0, 0, 0]
	let simulationParam = simulationParams[0]

	let sphereRenderFl = false
	let rotateFl = false
	console.log("simulation start")

	
	let firstFrame = true;
 let fpsStart = performance.now(), frameCount = 0;
 async function frame() {
  if (fatalError) return;
  if (document.hidden) { requestAnimationFrame(frame); return; }
  try {
		const selectedValue = particleCountTexts.indexOf(guiParams.numParticles);
		let resetThisFrame = false;
 if (Number(selectedValue) != paramsIdx || guiParams.resetRequested) {
  resetThisFrame = true; guiParams.resetRequested = false;
			paramsIdx = Number(selectedValue)
			simulationParam = simulationParams[paramsIdx]
			initBoxSize = simulationParam.initBoxSize
			mlsmpmSimulator.reset(initBoxSize, simulationParam.particleCount)
			camera.reset(simulationParam.initDistance, [initBoxSize[0] / 2, simulationParam.cameraTargetY, initBoxSize[2] / 2], 
				mlsmpmFov, mlsmpmZoomRate)
			realBoxSize = [...initBoxSize]
		}

		const particle = document.getElementById("particle") as HTMLInputElement
		sphereRenderFl = particle.checked
		mlsmpmSimulator.changeBoxSize(realBoxSize)

		// matrices are written by camera.ts
		renderUniformsViews.texelSize.set([1.0 / canvas.width, 1.0 / canvas.height]);
		renderUniformsViews.sphereSize.set([mlsmpmDiameter])
		device.queue.writeBuffer(renderUniformBuffer, 0, renderUniformsValues) 

		const commandEncoder = device.createCommandEncoder()

		let maxDt = 0.4;
		mlsmpmSimulator.execute(commandEncoder, 
			[camera.currentHoverX / canvas.clientWidth, camera.currentHoverY / canvas.clientHeight], 
			camera.calcMouseVelocity(), simulationParam.mouseRadius, sphereRenderFl, maxDt * guiParams.speed, guiParams.running || resetThisFrame,
			densityGridSize
		)	
		let normalizedDiffuseColor = [guiParams.r / 255, guiParams.g / 255, guiParams.b / 255];
		mlsmpmRenderer.execute(context, commandEncoder, mlsmpmSimulator.numParticles, sphereRenderFl, normalizedDiffuseColor, 
			guiParams.colorDensity)

		device.queue.submit([commandEncoder.finish()])

		if (sphereRenderFl) {
			const copyCommandEncoder = device.createCommandEncoder()
			// グリッドをテクスチャへコピー
			copyCommandEncoder.copyBufferToTexture(
				{
					buffer: castedDensityGridBuffer,
					bytesPerRow: densityGridSize[2] * 2,
					rowsPerImage: densityGridSize[1]
				},
				{
					texture: densityGridTexture
				},
				{
					width: densityGridSize[2],
					height: densityGridSize[1],
					depthOrArrayLayers: densityGridSize[0]
				}
			);
			device.queue.submit([copyCommandEncoder.finish()])
		}


		camera.setNewPrevMouseCoord();
		if (rotateFl) {
			camera.stepAngle();
		}

		await device.queue.onSubmittedWorkDone();
  if (fatalError) return;
  if (firstFrame) { firstFrame = false; document.getElementById('loading')!.hidden = true; document.getElementById('gpu-status')!.textContent = 'WebGPU ready'; (document.getElementById('controls') as HTMLFieldSetElement).disabled = false; }
  frameCount++; const now = performance.now();
  if (now - fpsStart > 1000) { document.getElementById('fps')!.textContent = Math.round(frameCount * 1000 / (now - fpsStart)) + ' FPS'; frameCount = 0; fpsStart = now; }
  requestAnimationFrame(frame);
  } catch (error) { fail(error); }
 } 
	requestAnimationFrame(frame)
}

main().catch(fail)
