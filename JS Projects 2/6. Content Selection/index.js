let originalText = document.querySelector('#originalText');
let cloneText = document.querySelector('#cloneText');
let finalText = document.querySelector('#finalText');

let moveButton = document.querySelector('#moveButton');
let copyButton = document.querySelector('#copyButton');

moveButton.addEventListener('click', e => {
  e.preventDefault();
  handleDuplication();
  originalText.value = '';
});

copyButton.addEventListener('click', e => {
  e.preventDefault();
  handleDuplication();
});

function handleDuplication() {
  let rawTextValue = originalText.value;
  cloneText.value = rawTextValue;
  finalText.value = rawTextValue;
  finalText.innerHTML = finalText.value;
}
