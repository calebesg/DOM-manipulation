const body = document.querySelector('body');
const switchButton = document.querySelector('.switch-container');

(function loadThemePreference() {
  const savedTheme = localStorage.getItem('@theme');

  if (savedTheme === 'dark') {
    toggleTheme();
  }
}());

switchButton.addEventListener('click', function () {
  const existDarkClass = toggleTheme();
  
  let updatingTheme;

  if (existDarkClass) {
    updatingTheme = 'dark';
  }

  store(updatingTheme);
});

function toggleTheme() {
  return body.classList.toggle('dark');
}

function store(value = 'light') {
  localStorage.setItem('@theme', value);
}