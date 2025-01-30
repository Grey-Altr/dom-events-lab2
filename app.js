/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNum = '';
let secNum = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/

let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
let divideButton = document.querySelector('.divide');
let multButton = document.querySelector('.multiply');
let subButton = document.querySelector('.subtract');
let clearButton = document.querySelector('.operator.C');
let eqButton = document.querySelector('.equals');
let addButton = document.querySelector('.add');
let display = document.querySelector('.display');

/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach((number) => {
    number.addEventListener('click', handleNumberClick);
});

opButtons.forEach((operator) => {
    operator.addEventListener('click', handleOpClick);
});

clearButton.addEventListener('click', handleClearButton);
eqButton.addEventListener('click', handleEqButton);

