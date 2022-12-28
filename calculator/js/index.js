let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    console.log(value)
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleSymbol(symbol) {}

function handleNumber (numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    console.log(buffer)
    screen.innerText = buffer
}

function init () {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

init();