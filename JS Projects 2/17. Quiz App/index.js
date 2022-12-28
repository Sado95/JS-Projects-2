let masterArray = [
  {
    question: 'What CSS stands for?',
    option1: 'Tool',
    option2: 'Car',
    option3: 'Cascading style sheets',
    option4: 'Plane',
    correctAnswer: 'Cascading style sheets',
  },
  {
    question: 'What purpose browser serves?',
    option1: 'File storage',
    option2: 'Photo gallery',
    option3: 'Racing',
    option4: 'Browsing the internet',
    correctAnswer: 'Browsing the internet',
  },
];

let answers = document.querySelectorAll('.answer');
let labels = document.querySelectorAll('label');
let submitButton = document.querySelector('#submitButton');
let questionTitle = document.querySelector('#question');
let optionOne = document.querySelector('#option1');
let optionTwo = document.querySelector('#option2');
let optionThree = document.querySelector('#option3');
let optionFour = document.querySelector('#option4');
let label1 = document.querySelector('#label1Text');
let label2 = document.querySelector('#label2Text');
let label3 = document.querySelector('#label3Text');
let label4 = document.querySelector('#label4Text');
let currentScore = 0;
let masterScore = 0;
let container = document.querySelector('.container');

function loadQuestion() {
  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false;
  }
  questionTitle.innerHTML = masterArray[currentScore].question;
  label1.innerHTML = masterArray[currentScore].option1;
  label2.innerHTML = masterArray[currentScore].option2;
  label3.innerHTML = masterArray[currentScore].option3;
  label4.innerHTML = masterArray[currentScore].option4;
}

function getSelected() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked == true) {
      return i;
    }
  }
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  let answerNumber = getSelected();
  let fullAnswer = labels[answerNumber].textContent;
  console.log(fullAnswer);
  if (fullAnswer == masterArray[currentScore].correctAnswer) {
    masterScore++;
  }
  currentScore++;
  if (currentScore < masterArray.length) {
    loadQuestion();
  } else {
    container.innerHTML = `
        <h2 style="text-align: center">You answered ${masterScore}/${masterArray.length} questions correctly</h2>

        <button class="submitButton" onclick="location.reload()">Reload</button>
    `;
  }
});
