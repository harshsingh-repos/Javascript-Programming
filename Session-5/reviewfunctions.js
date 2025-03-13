//Function to add two numbers
// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(3, 5));

//Passing the function as an argument to another function
function calculate(a, b, multiply) {
  return multiply(a, b);
}

const multiply = (x, y) => x * y;

// console.log(calculate(3, 5, multiply));

// Returning a function from another function
function multiplier(multiplierNumber) {
  return function (number) {
    return number * multiplierNumber;
  };
}

const triple = multiplier(3);
// console.log(triple(4));

//
function max(a, b) {
  return a > b ? a : b;
}

console.log(max(7, 9));
console.log(max(5, 4));
