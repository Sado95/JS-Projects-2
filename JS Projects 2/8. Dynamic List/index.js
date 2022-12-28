let editButtons = document.querySelectorAll('.edit-container');
let deleteButtons = document.querySelectorAll('.delete-container');
// let itemContainer = document.querySelector('.item-container');
let addNewItem = document.querySelector('#addNewItem');
let submitButton = document.querySelector('#submitButton');
let container = document.querySelector('#container');
let inputField;

let oldValue = {
  value: '',
};

for (let i = 0; i < editButtons.length; i++) {
  editButtons[i].addEventListener('click', () => {
    generic(editButtons[i]);
  });
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', () => {
    generic2(deleteButtons[i]);
  });
}

function handleEdit(itemName) {
  itemName.innerText = '';
  inputField = document.createElement('input');
  inputField.setAttribute('type', 'text');
  itemName.appendChild(inputField);
  inputField.classList.add('inputActive');
}

function generic2(deleteItem) {
  let currentParent = deleteItem.parentElement;
  currentParent.remove();
  deleteButtons = document.querySelectorAll('.delete-container');
}

function generic(edit) {
  if (edit.textContent == 'Edit') {
    oldValue.value = edit.parentElement.firstElementChild.innerHTML;
    handleEdit(edit.parentElement.firstElementChild);
    edit.parentElement.classList.add('active');
    edit.innerHTML = 'Done';
  } else {
    let lp = inputField.value;

    if (lp.length == 0) {
      edit.parentElement.firstElementChild.innerHTML = oldValue.value;
    } else {
      edit.parentElement.firstElementChild.innerHTML = lp;
    }

    inputField.remove();
    edit.parentElement.classList.remove('active');
    edit.innerHTML = 'Edit';
  }
}

submitButton.addEventListener('click', e => {
  e.preventDefault();

  let div = document.createElement('div');
  div.setAttribute('class', 'item-container');

  let div1 = document.createElement('div');
  div1.setAttribute('class', 'item-name');
  div1.innerHTML = addNewItem.value;

  let div2 = document.createElement('div');
  div2.setAttribute('class', 'delete-container');
  div2.setAttribute('id', 'delete-container');
  div2.innerHTML = 'Delete';

  let div3 = document.createElement('div');
  div3.setAttribute('class', 'edit-container');
  div3.setAttribute('id', 'edit-container');
  div3.innerHTML = 'Edit';

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);

  container.appendChild(div);

  editButtons = document.querySelectorAll('.edit-container');
  deleteButtons = document.querySelectorAll('.delete-container');

  let tempLength = editButtons.length - 1;
  editButtons[tempLength].addEventListener('click', () => {
    generic(editButtons[tempLength]);
  });
  deleteButtons[tempLength].addEventListener('click', () => {
    generic2(deleteButtons[tempLength]);
  });
});
