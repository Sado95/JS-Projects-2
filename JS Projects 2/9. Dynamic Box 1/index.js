let container = document.querySelector('.container');
let box = document.querySelector('#box');
let game = {
  condition: true,
  randomInt: 0,
  score: 0,
  numOfClicks: 0,
};
let numOfClicks = document.querySelector('#numOfClicks');
let finalScore = document.querySelector('#finalScore');
let text = document.querySelector('#x-osa');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function yourFunction() {
  if (game.score < 10) {
    game.randomInt = getRandomIntInclusive(20, 40);
    box.style.left = game.randomInt + 'px';
    setTimeout(yourFunction, 700);
  }

  if (game.score >= 10) {
    setTimeout(yourFunction, 700);
    game.score = -1;
  }
}

container.addEventListener('click', function tp1(e) {
  e.preventDefault();
  if (game.score == 10) {
    game.numOfClicks = -1;
    text.innerHTML = 'click on box again to start new game';
  }
  if (game.score >= 0 && game.score < 10) {
    game.numOfClicks++;
    numOfClicks.innerHTML = game.numOfClicks;
    console.log(game.numOfClicks);
    text.innerHTML = 'click on box to get a hit';
  }
});

box.addEventListener('click', e => {
  e.preventDefault();
  game.score++;
  finalScore.innerHTML = game.score;
});

yourFunction();
