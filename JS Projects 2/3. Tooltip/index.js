let spans = document.querySelectorAll('.tooltip-span');
let text = document.querySelector('.tooltip-text');

for (let i = 0; i < spans.length; i++) {
  let spanCurrentPosition = spans[i].getBoundingClientRect();
  let leftValue = spanCurrentPosition.left;
  let topValue = spanCurrentPosition.top;

  spans[i].addEventListener('mouseover', e => {
    text.style.left = leftValue + 72 + 'px';
    text.style.top = topValue + 1 + 'px';
    text.style.display = 'block';
  });

  spans[i].addEventListener('mouseout', e => {
    text.style.display = 'none';
  });
}
