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

const divide = () => {
    return firstNum / secNum;
}

const mult = () => {
    return firstNum * secNum;
};

const subtract = () => {
    return firstNum - secNum;
};

const add = () => {
    return firstNum + secNum;
};

/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach((number) => {
    number.addEventListener('click', handleNumberClick);
});

opButtons.forEach((operator) => {
    operator.addEventListener('click', handleOpClick);
});

clearButton.addEventListener('click', handleClearButton);
eqButton.addEventListener('click', handleEqButton);

