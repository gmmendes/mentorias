const form = document.querySelector('form');
form.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = './game.html';
})