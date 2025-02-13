const arr = Array();
// console.log(arr);

const arrNums = Array(10);
// console.log(arrNums);

let randomNumber = Math.round(Math.random() * 10 + 1);
const arrNumb = Array(10).fill(randomNumber);

// console.log(arrNumb);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

// console.log(firstList.concat(secondList));

const fruitList = ["Apples", "Oranges", "Banana"];
const vegList = ["Pumkin", "Tomatoes", "Potatos"];

/*
console.log(vegList.concat(fruitList));

console.log(firstList.length);

console.log(fruitList.indexOf("Banana"));

*/
/*
//laastIndexOf, includes
let indexOfBanana = fruitList.indexOf("Banana");
if (indexofBanana === -1) {
  console.log("The List is empty");
} else {
  console.log("The fruit is present in the list");
}
*/
// console.log(fruitList.indexOf("Grapes"));

const months = ["Jan", "March", "April", "June"];

firstMonth = months.splice(0, 1);
secondMonth = months[1];
console.log(months);
console.log(months.splice());
console.log(months.splice(0, 1));
console.log(months.splice(2, 2));

console.log(months.splice(-1, 3));
