let images = document.querySelectorAll('.img-container');
let leftButton = document.querySelector('#leftBtn');
let rightButton = document.querySelector('#rightBtn');

let statusInfo = {
  old: 0,
  new: 0,
};

leftButton.addEventListener('click', e => {
  e.preventDefault();
  moveLeft();
});

rightButton.addEventListener('click', e => {
  e.preventDefault();
  moveRight();
});

function moveRight() {
  statusInfo.old = statusInfo.new;
  images[statusInfo.old].classList.remove('active');
  images[statusInfo.old].classList.add('hide');
  statusInfo.new++;
  if (statusInfo.new > images.length - 1) {
    statusInfo.new = 0;
  }
  images[statusInfo.new].classList.remove('hide');
  images[statusInfo.new].classList.add('active');
  resetInterval();
}

function moveLeft() {
  statusInfo.old = statusInfo.new;
  images[statusInfo.old].classList.remove('active');
  images[statusInfo.old].classList.add('hide');
  statusInfo.new--;
  if (statusInfo.new < 0) {
    statusInfo.new = 2;
  }
  images[statusInfo.new].classList.remove('hide');
  images[statusInfo.new].classList.add('active');
  resetInterval();
}

let interval = setInterval(moveRight, 2000);
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(moveRight, 2000);
}
