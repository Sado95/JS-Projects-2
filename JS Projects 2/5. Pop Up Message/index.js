let items = document.querySelectorAll('.item');
let messageText = document.querySelector('#message-text');
let messageContainer = document.querySelector('.message-container');
let button = document.querySelector('.button');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', e => {
    e.preventDefault();
    messageText.innerText = 'Example message';
    messageContainer.style.display = 'block';
    console.log(i);
  });
}

button.addEventListener('click', e => {
  e.preventDefault();
  messageContainer.style.display = 'none';
});
