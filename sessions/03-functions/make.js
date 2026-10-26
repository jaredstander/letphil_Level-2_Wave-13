// Session 03 — what you build in class, and the exercise.

console.log("make.js running");

// > 1. At least **three functions**, each with **one job**
// > 2. **No `console.log` inside any function** — only at the end, outside them all
// > 3. Test it with **three different bills**. Write each result as a comment
// > 4. At least one function written as an **arrow function**

const calculateTip = (bill, tipPercent) => (bill * (tipPercent / 100)).toFixed(2);

const addTip = (bill, tipAmount) => (Number(bill) + Number(tipAmount)).toFixed(2);

const splitPayment = (bill, people) => (bill / people).toFixed(2);

function calculateBill(bill, tipPercent, people) {
    const tipAmount = calculateTip(bill, tipPercent);
    const total = addTip(bill, tipAmount);
    return splitPayment(total, people);
}

console.log(calculateBill(100, 20, 3));
console.log(calculateBill(240, 10, 5));
console.log(calculateBill(50, 15, 2));


/*
    My answer above, class answer below
*/

// Session 03 — what you build in class, and the exercise.

console.log("make.js running");

// > 1. At least **three functions**, each with **one job**
// > 2. **No `console.log` inside any function** — only at the end, outside them all
// > 3. Test it with **three different bills**. Write each result as a comment
// > 4. At least one function written as an **arrow function**

function calculateTip(bill, percentage) {
  return (bill * percentage) / 100;
}

function calculateTotal(bill, tip) {
  return bill + tip;
}

const splitBill = (total, people) => total / people;

function format(amount) {
  return `$${amount}`;
}

const bill = 100;
const tip = calculateTip(bill, 10);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);