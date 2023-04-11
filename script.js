// const darkModeButton = document.querySelector('#dark-mode-button');
// const body = document.querySelector('body');

// darkModeButton.addEventListener('click', function() {
//   body.classList.toggle('dark-mode');
// });
const toggleButton = document.querySelector('#toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});