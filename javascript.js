const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
    if (b == 0) {
        return 'Error: Divide by zero';
    }
    return a / b;
};

const operate = function(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
}

let displayValue = '';
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent == 'AC') {
            displayValue = '';
            display.textContent = displayValue;
        }
        else {
            displayValue += e.target.textContent
            display.textContent = displayValue;
        }
    });
});

