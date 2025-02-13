# JavaScript Session 3 - README

## Overview

This repository contains JavaScript examples and explanations covering fundamental topics such as **data types, functions, DOM manipulation, events, forms, and Math objects**. These concepts are crucial for client-side programming and interactive web development.

---

## 📌 Topics Covered

### 1️⃣ Data Types in JavaScript

JavaScript supports **dynamic typing**, meaning variable types are determined at runtime. The main data types include:

- **Primitive Types:**

  - `String`
  - `Number`
  - `Boolean`
  - `Undefined`
  - `Null`
  - `BigInt`
  - `Symbol`

- **Reference Type:**
  - `Object` (including Arrays, Functions, and Dates)

#### Example:

```javascript
// Primitive Data Types
let word = "Hello";
console.log(typeof word);

let numOne = 23;
console.log(typeof numOne); // print the variable

let secondWord = "World";
console.log(word == secondWord); // false

let numTwo = 24;
console.log(numOne == numTwo); // false

let isReact = false;
console.log(typeof isReact, isReact);
```

#### Non-Primitive Data Types:

```javascript
// Arrays
let nums = [1, 2, 3];
console.log(typeof nums, nums);
console.log("element at index 0", nums[0]);
console.log("element at index 1", nums[1]);

let numbers = [1, 2, 3];
console.log(nums == numbers); // it checks for references in memory
```

```javascript
// Objects
let students = {
  name: "John",
  age: 20,
  country: "Canada",
};

let studentsTwo = {
  name: "John",
  age: 20,
  country: "Canada",
};

console.log(typeof students, students);

let studentsInfoCopy = students;
console.log(typeof studentsInfoCopy, students == studentsInfoCopy);
// two objects are equal if they are referring to the same object

console.log(students == studentsTwo);
```

---

### 2️⃣ Math Object in JavaScript

JavaScript provides a `Math` object for performing mathematical operations.

#### Common Methods:

- `Math.round(x)` - Rounds to the nearest integer
- `Math.floor(x)` - Rounds down
- `Math.ceil(x)` - Rounds up
- `Math.random()` - Returns a random number between 0 and 1
- `Math.max(a, b, c, …)` - Returns the largest number
- `Math.min(a, b, c, …)` - Returns the smallest number

#### Example:

```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
```

---

### 3️⃣ Functions in JavaScript

Functions allow reusable blocks of code. JavaScript functions can be **declared** or **anonymous**.

#### Function Declaration:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
```

#### Function Expression:

```javascript
let sayHello = function (name) {
  return `Hi, ${name}!`;
};
console.log(sayHello("Bob"));
```

---

### 4️⃣ Document Object Model (DOM) Manipulation

JavaScript interacts with HTML using the **DOM API**.

#### Example: Changing an Element’s Content

```javascript
document.getElementById("message").innerHTML = "Hello, DOM!";
```

#### Example: Changing CSS Properties

```javascript
document.getElementById("message").style.color = "blue";
```

---

### 5️⃣ Events in JavaScript

Events enable interactive web pages.

#### Example: Click Event Listener

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});
```

---

### 6️⃣ Forms and User Input Handling

JavaScript processes form data dynamically.

#### Example: Reading Form Input

```html
<input type="text" id="username" placeholder="Enter name" />
<button onclick="displayInput()">Submit</button>

<script>
  function displayInput() {
    let name = document.getElementById("username").value;
    alert("Hello, " + name);
  }
</script>
```

---

## 🚀 Exercises

✅ Write a function to add two numbers.
✅ Create a button that changes the background color randomly.
✅ Write a function that validates an email format.
✅ Use JavaScript to show/hide an HTML element when clicking a button.

---

## 📖 References

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

