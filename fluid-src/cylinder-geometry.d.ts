export type CylinderOptions = {
  spacing?: number;
  wallMargin?: number;
  floor?: number;
  fillRatio?: number;
  jitter?: () => number;
};

export function generateCylinderParticlePositions(
  boxSize: number[],
  maxParticles: number,
  options?: CylinderOptions,
): number[][];

export function projectParticleToCylinder(
  position: number[],
  velocity: number[],
  boxSize: number[],
  wallMargin?: number,
): { position: number[]; velocity: number[] };
