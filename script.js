const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.textContent = '☀️';
  }
});
