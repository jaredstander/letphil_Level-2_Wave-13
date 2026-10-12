// Session 01 — what you build in class, and the exercise.

console.log("make.js running");


// 1. Stores its **name**, **price**, **how many are in stock**, and **whether it's on sale**
// 2. Chooses `const` or `let` for each one — **with a one-line comment saying why**
// 3. Sells 2 of them — update the stock
// 4. Logs a sentence using a template literal, like `Notebook: only 9 left`
// 5. Logs the `typeof` of all four variables

// Product name should not change to avoid confusion or accidentally reassigning
const name = "Keycap";
// Price may change over time, so can be use let
let price = 1.50;
// Stock will change frequently so use let
let stock = 11;
// Sale status will also change frequently so use let
let sale = false;
stock -= 2;
console.log(`${name}: only ${stock} left`);
console.log(typeof name);
console.log(typeof price);
console.log(typeof stock);
console.log(typeof sale);