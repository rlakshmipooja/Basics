function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function remainder(num1, num2) {
  return num1 % num2;
}

// higher order function, that takes function name as a parameter
function calc(num1, num2, operator) {
  console.log(operator(num1, num2));
  return operator(num1, num2);
}

calc(1, 2, add);
calc(1, 2, subtract);
calc(1, 2, multiply);
calc(1, 2, divide);
calc(1, 2, remainder);
