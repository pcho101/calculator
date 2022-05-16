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
    a = Number(a);
    b = Number(b);
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

let displayValue = '0';
let storedValue = '';
let operator = '';
let prevKey = '';
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.className == 'clear') {
            displayValue = '0';
            storedValue = '';
            operator = '';
            prevKey = '';
            display.textContent = displayValue;
        }
        else if (e.target.className == 'operator') {
            if (prevKey == 'operator')
            {
                operator = e.target.textContent;
            }
            else if (prevKey == 'equals') {
                storedValue = displayValue;
                operator = e.target.textContent;
                displayValue = '0';
                prevKey = 'operator';
            }
            else {
                if (storedValue != '') {
                    displayValue = operate(operator, storedValue, display.textContent);
                    display.textContent = displayValue;
                }
                storedValue = displayValue;
                operator = e.target.textContent;
                displayValue = '0';
                prevKey = 'operator';
            }
        }
        else if (e.target.className == 'equals' && prevKey != 'equals' && prevKey != 'operator') {
            displayValue = operate(operator, storedValue, displayValue);
            operator = '';
            storedValue = displayValue;
            display.textContent = displayValue;
            prevKey = 'equals';
        }
        else if (e.target.className == 'digit') {
            displayValue += e.target.textContent;
            display.textContent = displayValue;
            prevKey = 'num';
        }
    });
});

