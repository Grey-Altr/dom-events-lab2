/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNum = '1';
let secNum = '1';
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

const calculateAndDisplay = () => {
    let total;
    if (operator === 'divide') {
        total = divide();
    }
    if (operator === 'mult') {
        total = mult();
    }
    if (operator === 'subtract') {
        total = subtract();
    }
    if (operator === 'add') {
        total = add();
    }
    display.innerHTML = total;
};

// deprecated
// const handleNumberClick = (event) => {

// };

const handleOpClick = (event) => {
    firstNum = parseInt(display.innerHTML);
    operator = event.target.class;
    display.innerHTML = 0;
};

const handleClearButton = () => {
    display.innerHTML = 0;
    firstNum = '';
    secNum = '';
    operator = null;
};

const handleEqButton = (event) => {

};

/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach((number) => {
    number.addEventListener('click', (event) => {
        display.textContent = Number(display.textContent + event.target.textContent);
    });
});

opButtons.forEach((operator) => {
    operator.addEventListener('click', handleOpClick);
});

clearButton.addEventListener('click', handleClearButton);
eqButton.addEventListener('click', handleEqButton);

