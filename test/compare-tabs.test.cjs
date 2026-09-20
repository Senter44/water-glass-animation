const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

function page(hash='') {
  const root=path.join(__dirname,'../dist/compare');
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  const elements=new Map();
  function element(id='') {
    return {id,attrs:{},children:[],events:{},hidden:false,
      setAttribute(key,value){this.attrs[key]=value;},
      addEventListener(event,callback){this.events[event]=callback;},
      replaceChildren(...children){this.children=children;},
      get firstElementChild(){return this.children[0];},
      focus(){this.focused=true;}};
  }
  for(const match of html.matchAll(/\bid="([^"]+)"/g)) elements.set(match[1],element(match[1]));
  const tabs=[...html.matchAll(/<button\b[^>]*\bid="([^"]+)"[^>]*\brole="tab"[^>]*>/g)].map(match=>elements.get(match[1]));
  const location={hash};
  const context={location,history:{replaceState(_state,_title,next){location.hash=next;}},document:{
    querySelectorAll(){return tabs;},getElementById(id){return elements.get(id);},createElement(){return element();},
  }};
  const script=path.join(root,'compare.js');
  vm.runInNewContext(fs.readFileSync(script,'utf8'),context,{filename:script});
  return {html,tabs,elements,location,
    click(id){elements.get(id).events.click();},
    key(id,key){elements.get(id).events.keydown({key,preventDefault(){}});},
    frames(){return [...elements.values()].flatMap(el=>el.children);},
  };
}

test('3D water has its own accessible, directly linkable tab',()=>{
  const p=page('#water-3d');
  assert.equal(p.tabs.length,4);
  assert.match(p.html, /id="water-3d-tab"[^>]*aria-controls="water-3d-panel"/);
  assert.match(p.html, /id="water-3d-panel"[^>]*aria-labelledby="water-3d-tab"/);
  assert.equal(p.elements.get('water-3d-tab').attrs['aria-selected'],'true');
  assert.equal(p.frames()[0].src,'../bamboo-3d/');
});

test('switching Bamboo, 3D water and physics keeps only the active scene loaded',()=>{
  const p=page('#bamboo');
  assert.equal(p.frames()[0].src,'../bamboo/');
  p.click('water-3d-tab');
  assert.equal(p.frames().length,1);
  assert.equal(p.frames()[0].src,'../bamboo-3d/');
  assert.equal(p.elements.get('bamboo-panel').hidden,true);
  const existing=p.frames()[0];p.click('water-3d-tab');
  assert.equal(p.frames()[0],existing,'reselecting a tab does not restart its animation');
  p.click('physics-tab');
  assert.equal(p.frames().length,1);
  assert.equal(p.elements.get('water-3d-host').children.length,0);
  p.click('reset-physics');
  assert.equal(p.frames().length,1);
  assert.equal(p.frames()[0].src,'../fluid/?embed=glass');
});

test('keyboard navigation reaches and wraps around the fourth tab',()=>{
  const p=page();
  p.key('pour-tab','End');assert.equal(p.location.hash,'#water-3d');
  assert.equal(p.elements.get('water-3d-tab').focused,true);
  p.key('water-3d-tab','ArrowRight');assert.equal(p.location.hash,'#pour');
  p.key('pour-tab','ArrowLeft');assert.equal(p.location.hash,'#water-3d');
  p.key('water-3d-tab','Home');assert.equal(p.location.hash,'#pour');
  p.key('pour-tab','Escape');assert.equal(p.location.hash,'#pour');
});

test('unknown fragments fall back to the original animation',()=>{
  const p=page('#unknown');assert.equal(p.location.hash,'#pour');
  assert.equal(p.frames().length,1);assert.equal(p.frames()[0].src,'../?embed=study');
});
