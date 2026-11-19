// Glas-Hintergrund vor dem ersten Rendern setzen (verhindert Flackern). Standard: an.
(function () {
  var on = true;
  try { if (localStorage.getItem('glass') === '0') on = false; } catch (e) {}
  if (on) document.documentElement.classList.add('glass');
})();
