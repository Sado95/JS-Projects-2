let signs = document.querySelectorAll('.sign');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let screen = document.querySelector('#screen');

let num1 = {
  value: 0,
  inUse: false,
};

let num2 = {
  value: 0,
  inUse: false,
};

let currentSign = {
  value: '',
  inUse: false,
};

let result = {
  value: 0,
};

let tempArray = [];
let p1 = [];

for (let i = 0; i < signs.length; i++) {
  signs[i].addEventListener('click', function handleExample() {
    let newSign = String(signs[i].textContent);

    tempArray.push(newSign);
    if (
      !p1.includes(newSign == '+') ||
      !p1.includes(newSign == '-') ||
      !p1.includes(newSign == '*') ||
      !p1.includes(newSign == '/')
    ) {
      p1.push(newSign);
    }

    screen.innerHTML = p1.join('');

    if (newSign == 'C') {
      num1.value = 0;
      num2.value = 0;
      num1.inUse = false;
      num2.inUse = false;
      p1 = [];
      tempArray = [];
      screen.innerHTML = '';
    }

    if (
      newSign == '+' ||
      newSign == '-' ||
      newSign == '*' ||
      newSign == '/' ||
      newSign == '='
    ) {
      if (num1.inUse == false && newSign != '=') {
        let tp = tempArray.length - 1;
        tempArray.splice(tp, 1);
        currentSign.value = newSign;
        currentSign.inUse = true;
        num1.value = Number(tempArray.join(''));
        num1.inUse = true;
        tempArray = [];
      } else if (num1.inUse == true && num2.inUse == false) {
        let tp = tempArray.length - 1;
        tempArray.splice(tp, 1);
        num2.value = Number(tempArray.join(''));
        num2.inUse = true;
        tempArray = [];
        switch (currentSign.value) {
          case '+':
            result.value = num1.value + num2.value;
            break;
          case '-':
            result.value = num1.value - num2.value;
            break;
          case '*':
            result.value = num1.value * num2.value;
            break;
          case '/':
            result.value = num1.value / num2.value;
            break;
          default:
            result.value = 0;
        }

        console.log(result.value);
        console.log(num1.value);
        console.log(num2.value);
      }
      if (num1.inUse == true && num2.inUse == true) {
        num1.value = 0;
        num2.value = 0;
        num1.inUse = false;
        num2.inUse = false;
        p1 = [];
        tempArray = [];
        screen.innerHTML = result.value;
      }
    }
  });
}
