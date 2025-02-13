const prompt = require("prompt-sync")();

/*
for(initilization, condition, increment/decrement)
*/

/*
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
*/
/*
const fruitList = ["Apples", "Oranges", "Banana"];

for (let index = 0; index < fruitList.length; index++) {
  console.log(fruitList[index]);
}
*/

let number = [2, 3, 4, 6, 7];
let newNumbers = [];
for (let index = 0; index < number.length; index++) {
  newNumbers.push(number[index] * 2);
}

// console.log(newNumbers);

// for (let num of newNumbers) {
//   console.log(num);
// }
/*
let index = 0;
while (index < number.length) {
  console.log(number[index]);
  index++;
}

let index = 0;
while (index < newNumbers.length) {
  console.log(newNumbers[index]);
  index++;
}
  

let index = 0;
do {
  console.log(newNumbers[index]);
  index++;
} while (index < newNumbers.length);

  */

// let valueFromUser = prompt(" Enter Number ");
// if (valueFromUser === NaN) {
//   console.log("No input");
// } else {
//   console.log(valueFromUser);
// }

var name = prompt("Name?");
console.log("Hello " + name);
