let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
        // this is a number
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (value) {
        case 'C': 
            buffer = '0';
            runningTotal = 0;
            break;
        case '&#43;': // addition
        case '&#8722;': // subtraction 
        case '&#247;': // multiply
        case '&#215;': // divide
            handleMath(symbol);
            break;
    }
}

function handleNumber (numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function handleMath (symbol) {
    if (buffer === '0') {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {

}

function init () {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

init();