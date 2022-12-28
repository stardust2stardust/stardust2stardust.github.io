let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

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
    switch (symbol) {
        case 'C': 
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            buffer = buffer.slice(0, -1);
            break;
        case '+': // addition
        case '−': // subtraction 
        case '×': // multiply
        case '÷': // divide
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
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
    
}

function init () {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

init();