let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  if (currentInput !== '' && !isOperator(currentInput.slice(-1))) {
    currentInput += operator;
    display.textContent = currentInput;
  }
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    display.textContent = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput || '0';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = 'Error';
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}