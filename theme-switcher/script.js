const body = document.querySelector('body');
const switchButton = document.querySelector('.switch-container');

(function loadThemePreference() {
  const currentTheme = localStorage.getItem('@theme');

  if (currentTheme === 'dark') {
    toggleTheme();
  }
}());

switchButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  let updatingTheme = 'light';

  const isDark = body.classList.toggle('dark');

  if (isDark) {
    updatingTheme = 'dark';
  }

  store(updatingTheme);
}

function store(theme) {
  localStorage.setItem('@theme', theme);
}