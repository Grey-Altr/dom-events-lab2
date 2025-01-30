/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let firstNum = null;
let secNum = null;
let operator = null;

/*------------------------ Cached Element References ------------------------*/

let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.operator');
let eqButton = document.querySelector('.equals');
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
        console.log(firstNum);
        console.log(secNum);
        console.log(operator);
    if (operator === '/') {
        total = divide();
    }
    if (operator === '*') {
        total = mult();
    }
    if (operator === '-') {
        total = subtract();
    }
    if (operator === '+') {
        total = add();
    }
    display.innerHTML = total;
};

// deprecated
// const handleNumberClick = (event) => {

// };

const handleOpClick = (event) => {
    firstNum = parseInt(display.innerText);
    operator = event.target.innerText;
    display.innerHTML = 0;
};

const handleClearButton = () => {
    display.innerText = 0;
};

const handleEqButton = () => {
    secNum = parseInt(display.innerText);
    calculateAndDisplay();
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

