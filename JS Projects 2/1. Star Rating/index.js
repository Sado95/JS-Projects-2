let msg = document.querySelector('#msg-alert');
let stars = document.querySelectorAll('.fa');

msg.innerHTML = `Please submit your review.`;

let starState = {
  old: 0,
  new: 0,
};

for (let i = 0; i < stars.length; i++) {
  let fullLength = stars.length;

  stars[i].addEventListener('mouseover', e => {
    for (let k = 0; k <= i; k++) {
      stars[k].classList.add('star-custom');
    }
  });

  stars[i].addEventListener('mouseout', e => {
    for (let k = 0; k <= i; k++) {
      stars[k].classList.remove('star-custom');
    }
  });

  stars[i].addEventListener('click', e => {
    if (stars[i].classList.contains('star-custom-2')) {
      for (let k = i + 1; k < fullLength; k++) {
        stars[k].classList.remove('star-custom-2');
        msg.innerHTML = `You rated this ${i + 1} stars.`;
        starState.new = i + 1;
      }
    } else {
      for (let k = 0; k <= i; k++) {
        stars[k].classList.add('star-custom-2');
        msg.innerHTML = `You rated this ${i + 1} stars.`;
        starState.new = i + 1;
      }
    }
    console.log(starState.new);
  });
}
