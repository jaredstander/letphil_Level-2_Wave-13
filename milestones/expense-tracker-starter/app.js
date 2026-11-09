// Expense Tracker — your app for the whole course.
//
// Part 1 (session 6): data + functions, console only.
// Part 2 (session 9): a screen, and add / mark paid / delete.
// Part 3 (session 11): survives a refresh, and fetches live data.
//
// Start here, after session 4:
//
// Design check — answer these in a comment before writing any code.
//   1. What shape is an expense? Write one example.
//   2. What do you want to find out about your expenses?
//
// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

// ---------- data ----------
// Stage 1 — start now, after Session 4

// - [ ] **Design check** at the top of your file, as a comment: what shape is an expense, in plain English — and one example expense
// - [ ] An array of **at least 5 expenses**. Each needs at least:
//   - a label (text)
//   - an amount (a **number** — not `"45"`)
//   - a category (text)
//   - whether it's paid (a boolean)
// - [ ] Mix it up: some paid, some unpaid, at least 2 categories, at least one over $100
// - [ ] `describeExpense(expense)` — **returns** a sentence about one expense, like `Internet — $45 (home, unpaid)`
// - [ ] `getPriority(expense)` — **returns** a label using `if` / `else if`: `"Paid"` for paid expenses, `"Pay first"` for unpaid ones over $100, `"Unpaid"` for the rest. **Add a comment explaining why your checks are in that order**
// - [ ] Output: log `describeExpense` and `getPriority` for a few expenses, by index — `expenses[0]`, `expenses[1]`…

const expenses = [
    { label: "Cell Phone", amount: 15, category: "utility", paid: true },
    { label: "Internet", amount: 80, category: "utility", paid: false },
    { label: "Car Repairs", amount: 150, category: "emergency", paid: true },
    { label: "Laptop Charger", amount: 50, category: "personal", paid: true },
    { label: "Video Game Console", amount: 400, category: "personal", paid: false },
];

// ---------- functions ----------

function describeExpense(expense) {
    return `${expense.label} — $${expense.amount} (${expense.category}, ${expense.paid})`;
}

function getPriority(expense) {
    if(expense.amount > 100 && !expense.paid) {
        return "Pay first";
    } else if(expense.paid) {
        return "Paid";
    } else {
        return "Unpaid";
    }
}

// ---------- output ----------

console.log(describeExpense(expenses[0]));
console.log(getPriority(expenses[0]));
console.log("-----");

console.log(describeExpense(expenses[1]));
console.log(getPriority(expenses[1]));
console.log("-----");

console.log(describeExpense(expenses[2]));
console.log(getPriority(expenses[2]));
console.log("-----");

console.log(describeExpense(expenses[3]));
console.log(getPriority(expenses[3]));
console.log("-----");

console.log(describeExpense(expenses[4]));
console.log(getPriority(expenses[4]));
console.log("-----");