document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleButton = document.querySelector('.theme-toggle');

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '🌙';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '🌙' : '☀️';
  });
});


















































































