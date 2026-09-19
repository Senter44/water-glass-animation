const frame = document.getElementById('fluid-frame');
document.getElementById('reset-physics').addEventListener('click', () => {
  frame.src = '../fluid/?embed=glass&reset=' + Date.now();
});
