const tabs = [...document.querySelectorAll('[role="tab"]')];
const studies = [
  { panel: document.getElementById('pour-panel'), host: document.getElementById('pour-host'), id: 'pour-frame', src: '../?embed=study', title: 'Original Pour water animation with Play and Pause controls' },
  { panel: document.getElementById('physics-panel'), host: document.getElementById('physics-host'), id: 'fluid-frame', src: '../fluid/?embed=glass', title: 'Interactive Splash water in a 3D glass' },
];

function loadStudy(study) {
  const frame = document.createElement('iframe');
  frame.id = study.id;
  frame.title = study.title;
  frame.src = study.src;
  study.host.replaceChildren(frame);
}

function selectTab(index) {
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    const study = studies[tabIndex];
    study.panel.hidden = !active;
    // Removing the inactive frame releases its GPU context and stops its animations.
    if (!active) study.host.replaceChildren();
    else if (!study.host.firstElementChild) loadStudy(study);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(index));
  tab.addEventListener('keydown', event => {
    let target = index;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(target);
    tabs[target].focus();
  });
});

document.getElementById('reset-physics').addEventListener('click', () => loadStudy(studies[1]));
