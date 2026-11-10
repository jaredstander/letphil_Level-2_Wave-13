// Session 05 — exercise
//
// 1. M1 Stage 2

// This is the main homework. Loop through every expense, `getTotal`, `getUnpaidTotal`, destructuring at least once — see the M1 brief.

// I have copies the test data and functions from my M1 app.js into this file just to submit
const expenses = [
    { label: "Cell Phone", amount: 15, category: "utility", paid: true },
    { label: "Internet", amount: 80, category: "utility", paid: false },
    { label: "Car Repairs", amount: 150, category: "emergency", paid: true },
    { label: "Laptop Charger", amount: 50, category: "personal", paid: true },
    { label: "Video Game Console", amount: 400, category: "personal", paid: false },
];

function getTotal(expenses) {
    let total = 0;

    for(expense of expenses) {
        const { amount } = expense;
        total += amount;
    }

    return total;
}

function getUnpaidTotal(expenses) {
    let unpaidTotal = 0;

    for(expense of expenses) {
        const { amount, paid } = expense;
        if(!paid) {
            unpaidTotal += amount;
        }
    }

    return unpaidTotal;
}

console.log("Total:", `$${getTotal(expenses).toFixed(2)}`);
console.log("Unpaid Total:", `$${getUnpaidTotal(expenses).toFixed(2)}`);


// 2. Parsons — count

// Goal output: `2` (how many scores are 60 or above)

// A   const scores = [72, 55, 91, 40];
// B   let count = 0;
// C   for (const score of scores) {
// D   if (score >= 60) {
// E   count = count + 1;
// F   }
// G   }
// H   console.log(count);
// X   count = 1;
// Y   let count;

const scores = [72, 55, 91, 40]; // A
let count = 0; // B
for (const score of scores) { // C
    if (score >= 60) { // D
        count = count + 1; // E
    } // F
} // G
console.log(count); // H

// Answer: ABCDEFGH