let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let logoBtn = document.querySelector('#logoBtn');
let spanScore = document.querySelector('#spanScore');
let spanTime = document.querySelector('#spanTime');

let masterObject = {
  currentBug: '',
  currentScore: 0,
  currentTime: 0,
  gameStart: false,
};

let insects = document.querySelectorAll('.insect');

for (let i = 0; i < insects.length; i++) {
  insects[i].addEventListener('click', e => {
    masterObject.currentBug =
      insects[i].firstElementChild.textContent.toLowerCase();
    masterObject.gameStart = true;
    container2.classList.remove('active');
    container2.classList.add('hidden');

    container3.classList.remove('hidden');
    container3.classList.add('active');
    startGame();
  });
}

function startGame() {
  let bugDiv = document.createElement('div');
  bugDiv.setAttribute('class', 'dynamicBug');

  let bugImg = document.createElement('img');
  bugImg.setAttribute('src', `images/${masterObject.currentBug}.png`);

  bugDiv.style.position = 'absolute';
  bugDiv.style.top = Math.floor(Math.random() * 800) + 'px';
  bugDiv.style.left = Math.floor(Math.random() * 1700) + 'px';

  bugDiv.appendChild(bugImg);

  container3.appendChild(bugDiv);

  setInterval(function () {
    masterObject.currentTime++;
    spanTime.innerHTML = masterObject.currentTime;
    console.log(masterObject.currentTime);
  }, 1000);

  bugDiv.addEventListener('click', e => {
    bugDiv.remove();
    createElement();
    createElement();
    masterObject.currentScore++;
    spanScore.innerHTML = masterObject.currentScore;
  });
}

function createElement() {
  let bugDiv = document.createElement('div');
  bugDiv.setAttribute('class', 'dynamicBug');

  let bugImg = document.createElement('img');
  bugImg.setAttribute('src', `images/${masterObject.currentBug}.png`);

  bugDiv.style.position = 'absolute';
  bugDiv.style.top = Math.floor(Math.random() * 800) + 'px';
  bugDiv.style.left = Math.floor(Math.random() * 1700) + 'px';

  bugDiv.appendChild(bugImg);

  container3.appendChild(bugDiv);

  bugDiv.addEventListener('click', e => {
    bugDiv.remove();
    createElement();
    createElement();
    masterObject.currentScore++;
    spanScore.innerHTML = masterObject.currentScore;
  });
}

logoBtn.addEventListener('click', e => {
  e.preventDefault();
  container1.classList.remove('active');
  container1.classList.add('hidden');

  container2.classList.remove('hidden');
  container2.classList.add('active');
});
