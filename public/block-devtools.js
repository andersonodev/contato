// Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, botão direito e abre devtools
(function () {
  function blockEvent(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I/J/C/U
    if (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
  }
  document.addEventListener('keydown', blockEvent);
  // Botão direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  // Detecta DevTools aberto (básico)
  let threshold = 160;
  setInterval(function () {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#050816;color:#fff;font-size:2rem;z-index:9999;">Desculpe, as ferramentas de desenvolvedor estão bloqueadas.</div>';
    }
  }, 1000);
})();
