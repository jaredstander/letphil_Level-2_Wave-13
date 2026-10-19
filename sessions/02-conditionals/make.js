// Session 02 — what you build in class, and the exercise.

console.log("make.js running");


// Ex; 1
const inputValue = "";

if (inputValue) {
    console.log("Thank you!");
} else {
    console.log("Please Type Something!");
}


// Ex; 2
const itemsLeft = 0;

if (itemsLeft === 0) {
    console.log("Sold Out")
};


// Ex; 3
// A cinema charges: children under 12 pay **$5**. People 65 or older pay **$6**. On Tuesdays, everyone pays **$4**. Everyone else pays **$10**.

//  Write the checks **in the order you'd make them**, in plain English. Mark which one is the "otherwise."

/*
    1: If the day is Tuesday, the price is $4.
    2: If the age is 12 or less, the price is $5.
    3: If the age is 65 or more, the price is $6.
    4: Otherwise, the price is $10.
*/


// Ex; 4
//  Build a **shipping calculator** in `make.js`. Start with three variables: an order total, a country (`"local"` or `"international"`), and whether the customer is a member.
// > Rules:
// >
// > - Members always ship free
// > - Local orders over $50 ship free
// > - Other local orders cost $5
// > - International orders cost $15
// >
// > Your code must:
// >
// > 1. Use `if` / `else if` / `else`, with a **comment explaining why your checks are in that order**
// > 2. Use `&&` at least once
// > 3. Use a ternary to build a label: `"Free shipping"` or `"Shipping: $5"`
// > 4. Log the label
// >
// > Then test it: change the three starting variables to try **at least four different cases**. Write each case and its output as a comment.

// V1
// let orderTotal = 150;
// const orderCountry = "local";
// const isMember = false;
// let orderShippingFee = null;
// let label = "";

// if(isMember) {
//     // Check membership first since this always has the same result regardless of other factors
//     orderShippingFee = 0;
// } else if (orderCountry === "international") {
//     // Second, international orders always have the same cost so check that next
//     orderShippingFee = 15;
// } else if (orderCountry === "local" && orderTotal > 50) {
//     // Local order fee is based on order total pre-shipping, so check that and if over 50 it's free
//     orderShippingFee = 0;
// } else {
//     // And then if they are not a member, not international, and the price is under 50, it's always 5
//     orderShippingFee = 5;
// }

// label = orderShippingFee === 0 ? "Free Shipping" : `Shipping: $${orderShippingFee}`;

// console.log(label);

// V2
let orderTotal = 150;
const orderCountry = "local";
const isMember = false;
let orderShippingFee = null;
let label = "";

if(isMember) {
    // Check membership first since this always has the same result regardless of other factors
    orderShippingFee = 0;
} else if (orderCountry === "international") {
    // Second, international orders always have the same cost so check that next
    orderShippingFee = 15;
} else if (orderTotal > 50) {
    // Local order fee is based on order total pre-shipping, so check that and if over 50 it's free
    orderShippingFee = 0;
} else {
    // And then if they are not a member, not international, and the price is under 50, it's always 5
    orderShippingFee = 5;
}

label = orderShippingFee === 0 ? "Free Shipping" : `Shipping: $${orderShippingFee}`;

console.log(label);