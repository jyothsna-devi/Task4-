let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";
let memory = 0;

// Append number to the display
function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

// Append operator to the display
function appendOperation(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  display.value = previousInput + " " + operator;
}

// Append decimal point to the current input
function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    display.value = currentInput;
  }
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
}

// Backspace (Remove last character)
function clearLastEntry() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
  // If nothing is left, reset to previous input or clear the display
  if (currentInput === "") {
    if (previousInput !== "") {
      display.value = previousInput + " " + operator;
    } else {
      display.value = "";
    }
  }
}

// Calculate the result
function calculateResult() {
  if (currentInput === "" || previousInput === "") return;
  let result;
  let num1 = parseFloat(previousInput);
  let num2 = parseFloat(currentInput);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error";
      } else {
        result = num1 / num2;
      }
      break;
  }

  display.value = result;
  previousInput = result.toString();
  currentInput = "";
  operator = "";
}

// Calculate the square of the current number
function calculateSquare() {
  if (currentInput === "") return;
  let result = Math.pow(parseFloat(currentInput), 2);
  display.value = result;
  currentInput = result.toString();
}

// Calculate the square root of the current number
function calculateSquareRoot() {
  if (currentInput === "") return;
  let result = Math.sqrt(parseFloat(currentInput));
  display.value = result;
  currentInput = result.toString();
}

// Calculate percentage
function calculatePercentage() {
  if (currentInput === "") return;
  let result = parseFloat(currentInput) / 100;
  display.value = result;
  currentInput = result.toString();
}

// Exponentiation (xⁿ)
function calculatePower() {
  if (currentInput === "") return;
  let exponent = prompt("Enter exponent value");
  if (exponent !== null) {
    let result = Math.pow(parseFloat(currentInput), parseFloat(exponent));
    display.value = result;
    currentInput = result.toString();
  }
}

// Calculate reciprocal (1/x)
function calculateReciprocal() {
  if (currentInput === "") return;
  let result = 1 / parseFloat(currentInput);
  display.value = result;
  currentInput = result.toString();
}

// Calculate factorial (n!)
function calculateFactorial() {
  if (currentInput === "") return;
  let num = parseInt(currentInput);
  if (num < 0) {
    display.value = "Error";
    return;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  display.value = result;
  currentInput = result.toString();
}

// Calculate logarithm (log₁₀)
function calculateLogarithm() {
  if (currentInput === "") return;
  let result = Math.log10(parseFloat(currentInput));
  display.value = result;
  currentInput = result.toString();
}

// Calculate sine (sin)
function calculateSin() {
  if (currentInput === "") return;
  let angle = parseFloat(currentInput);
  let result = Math.sin(angle); // Radians
  display.value = result;
  currentInput = result.toString();
}

// Calculate cosine (cos)
function calculateCos() {
  if (currentInput === "") return;
  let angle = parseFloat(currentInput);
  let result = Math.cos(angle); // Radians
  display.value = result;
  currentInput = result.toString();
}

// Calculate tangent (tan)
function calculateTan() {
  if (currentInput === "") return;
  let angle = parseFloat(currentInput);
  let result = Math.tan(angle); // Radians
  display.value = result;
  currentInput = result.toString();
}
