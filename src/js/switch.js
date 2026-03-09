const btns = document.querySelectorAll('#themeBtn, #themeBtnMob');
const labels = document.querySelectorAll('#themeBtnLabel, #themeBtnMobLabel');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  labels.forEach(l => (l.textContent = theme === 'light' ? 'ON' : 'OFF'));
}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const current =
      document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
});

applyTheme(localStorage.getItem('theme') || 'light');
