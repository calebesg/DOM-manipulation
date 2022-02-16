const body = document.querySelector('body');
const switchButton = document.querySelector('.switch-container');

switchButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  body.classList.toggle('dark');
}