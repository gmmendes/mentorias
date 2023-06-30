const getZombiesAndBullets = () => {
  const zombiesValue = document.getElementById('zombies').value;
  const bulletsValue = document.getElementById('bullets').value;

  return { zombies: zombiesValue, bullets: bulletsValue };
};

const form = document.querySelector('form');

form.addEventListener('click', (event) => {
  event.preventDefault();

  const gameInfos = getZombiesAndBullets();

  window.location.href = './game.html';
})