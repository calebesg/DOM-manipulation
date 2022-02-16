const body = document.querySelector('body');
const switchButton = document.querySelector('.switch-container');
const label = body.querySelector('h3');

switchButton.addEventListener('click', function () {
  let current = toggleTheme();

  localStorage.setItem('@theme', current);
});

function toggleTheme() {
  let updatingTheme = 'light';

  const existDarkClass = body.classList.toggle('dark');
  
  let textLabel = 'Light Theme';

  if (existDarkClass) {
    updatingTheme = 'dark';
    textLabel = 'Dark Theme';
  }

  label.textContent = textLabel;

  return updatingTheme;
}

(function loadThemePreference() {
  const savedTheme = localStorage.getItem('@theme');

  if (savedTheme === 'dark') {
    toggleTheme();
  }
}());
