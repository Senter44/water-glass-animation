(() => {
  // Shared GPU settings and a CPU reference for the density-isosurface equations.
  const cutoff=.4,falloff=3,layerBand=2.5,supportScale=2.1,fringeTag=1024;
  function kernel(r2){return r2>=1?0:Math.exp(-falloff*r2)-Math.exp(-falloff);}
  // The camera far plane is 220; the tag reserves a lower-priority fringe layer.
  function anchor(depth,r2){return depth+(kernel(r2)<cutoff?fringeTag:0);}
  function decodeAnchor(value){return value>=fringeTag?value-fringeTag:value;}
  function layerWeight(delta,sigma){return Math.abs(delta)>Math.max(layerBand,sigma*6)?0:1;}
  function resolve(m,near){
    if(m[0]<cutoff)return null;
    const mean=m[1]/m[0],sigma=Math.max(.08,m[3]/m[0]);
    const variance=Math.max(0,m[2]/m[0]-mean*mean);
    const offset=Math.min(sigma*2.5,Math.sqrt(variance+sigma*sigma)*Math.sqrt(2*Math.log(m[0]/cutoff)));
    return {depth:near+mean-offset,thickness:Math.min(8,.1*m[0]*sigma*2.5066)};
  }
  globalThis.FluidSurface={cutoff,falloff,layerBand,supportScale,fringeTag,kernel,anchor,decodeAnchor,layerWeight,resolve};
})();
