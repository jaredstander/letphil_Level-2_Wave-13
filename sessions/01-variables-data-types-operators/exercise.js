// Goal output: `Cart: 2 items, total 30`
// Initial declarations
const itemPrice = 15;
const itemCount = 2;
const cartTotal = itemCount * itemPrice;
console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
//const cartTotal = itemCount + itemPrice;
//console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);

// Or
const itemPrice = 15;
const itemCount = 2;
// const cartTotal = itemCount * itemPrice;
// console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
//const cartTotal = itemCount + itemPrice;
console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);

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

/*
    Take your Make task. Change the price so it's stored as a **string** — `"4"` instead of `4` — as if it had come from a form. Run your code. Then add these two lines and predict each before running.
*/
const name = "Keycap";
// Price may change over time, so can be use let
let price = "1.50";
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

// I predict that the output value will be 3 since the `*` operator is arithmetic only.
console.log(price * 2);
// I predict that the output value will be 1.502 ("1.50" and "2" together) since the price is now a string and the `+` operator can be either a concatentation or addition. But since price is a string, JS will think this should be a concatenation.
console.log(price + 2);