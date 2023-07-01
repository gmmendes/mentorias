const isStartedCorrect = () => {
  const gamesInfos = JSON.parse(localStorage.getItem('gameInfos'));

  if (!gamesInfos) {
    // window.alert('NO, NO!! YOU HAVE TO FILL IN THE FORM');
    // window.location.href = './index.html'

    //verificar pq nao ta funcionando essa budega
  }
};

window.onload = () => {
  isStartedCorrect();
}