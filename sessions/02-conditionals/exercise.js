/*
    PART 1:

    Goal output: `Grade: B` when `score` is `85`.
    A   } else if (score >= 80) {
    B   const score = 85;
    C   if (score >= 90) {
    D       grade = "B";
    E   let grade = "";
    F       grade = "A";
    G   } else {
    H       grade = "C";
    I   }
    J   console.log(`Grade: ${grade}`);
    X   if (score >= 80) {
    Y   if (score = 90) {
*/

const score = 85; // B
let grade = ""; // E
if (score >= 90) { // C
    grade = "A"; // F
} else if (score >= 80) { // A
    grade = "B"; // D
} else { // G
    grade = "C"; // H
} // I
console.log(`Grade: ${grade}`); // J
// Not Used :
// if (score >= 80) // X
// if (score = 90) // Y

/*
    PART 2:

    Take your shipping calculator. Add a rule: **orders over $500 always ship free, even international.**
    Before you write any code, decide where the new check goes in your chain and write one sentence explaining why. Then add it, and test it with an international order of $600.
*/

// Before writing code: I think this should go first before any other checks because it overrides so many other factors, including if that person is a member or not. So, if the order is over 500 then we don't need to continue with any other checks.

let orderTotal = 600;
const orderCountry = "international";
const isMember = false;
let orderShippingFee = null;
let label = "";

if(orderTotal > 500) {
    orderShippingFee = 0;
} else if (isMember) {
    // Check membership first since this always has the same result regardless of other factors
    orderShippingFee = 0;
} else if (orderCountry === "international") {
    // Second, international orders always have the same cost so check that next
    orderShippingFee = 15;
} else if (orderCountry === "local" && orderTotal > 50) {
    // Local order fee is based on order total pre-shipping, so check that and if over 50 it's free
    orderShippingFee = 0;
} else {
    // And then if they are not a member, not international, and the price is under 50, it's always 5
    orderShippingFee = 5;
}

label = orderShippingFee === 0 ? "Free Shipping" : `Shipping: $${orderShippingFee}`;

console.log(label);