const btn = document.getElementById('themeBtn');
const label = document.getElementById('themeBtnLabel');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  label.textContent = theme === 'light' ? 'ON' : 'OFF';
}

btn.addEventListener('click', () => {
  const current =
    document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

applyTheme(localStorage.getItem('theme') || 'light');
