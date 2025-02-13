const PI = Math.PI;
let numbers = [1, 2, 3];
let numberss = (4, 5, 6, 7);

console.log(PI);

console.log(Math.round(PI));
console.log(Math.floor(PI)); //rounding down
console.log("Ceil: ", Math.ceil(PI)); //rounding up
console.log("Min ", Math.min(...numbers));
console.log("Max ", Math.max(...numbers));

let randomNumber = Math.round(Math.random() * 10 + 1);
console.log(randomNumber);
