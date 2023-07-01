const getZombiesAndBullets = () => {
  const zombiesValue = document.getElementById('zombies').value;
  const bulletsValue = document.getElementById('bullets').value;

  return { zombies: zombiesValue, bullets: bulletsValue };
};

// const isFormComplete = (infos) => infos.zombies && infos.bullets;

function isFormComplete(infos) {
  if (infos.zombies && infos.bullets) {
    return true;
  }
};

// const isFormComplete = (infos) => {
//   if (infos.zombies && infos.bullets) {
//     return true;
//   }
// };

const submit = (event) => {
  event.preventDefault();
  const gameInfos = getZombiesAndBullets();
  if (isFormComplete(gameInfos)) {
    localStorage.setItem('gamesInfo', JSON.stringify(gameInfos));
    window.location.href = './game.html';
  } else {
    window.alert('Fill the form');
  }
};

function setSubmitButton() {
  const form = document.querySelector('form');

  form.addEventListener('submit', submit);
}

window.onload = () => {
  setSubmitButton();
}
