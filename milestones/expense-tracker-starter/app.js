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

/*
    Design check answers:
        1. An expense is an object with various properties, and all tasks are stored within an array of objects.
            ex; task = { name: "foo", amount: 100, recurring: false, paid: false, category: "entertainment" }
        2. 
*/

// Example of the shape, from the brief:
//   { label: "Internet", amount: 45, category: "home", isPaid: false }

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

// ### Stage 2 — after Session 5 (loops)
    // - [ ] Replace the by-index lines with a **loop** that describes every expense
    // - [ ] `getTotal(expenses)` — **returns** the total of all amounts
    // - [ ] `getUnpaidTotal(expenses)` — **returns** the total still to pay
    // - [ ] Use **destructuring** at least once

/*
    Feedback after Stage 1:

    • Stage 1 (design check): the comment at the top still has the starter questions. Add your own answer: the shape of an expense in plain English, plus one example.
    I added an answer to this question in the comment starting line 13.
    [DONE]

    • Stage 1 (getPriority): it returns the right labels, but the brief asks for a comment explaining why your checks are in that order.
    I added a comment to explain the order I chose on line 81.
    [DONE]

    • Stage 2 (loops): all three loops use for(expense of expenses) with nothing in front of expense. What keyword belongs there?
    [DONE]
    This was similar to the issue I had with Session 5 Loops and Destructuring. I am missing the "const" keyboard that comes before X in for(X of Y). This is needed to properly scope the variable X that you're using as the individual items in the collection Y. This has been updated in the code below.

    • Stage 2 (output): getTotal and getUnpaidTotal are written but never used in the output section, so the totals never show.
    I added output lines on lines 141 and 142 to show the total and unpaid total after the individual task description output.
    [DONE]
*/

// ---------- data ----------

// Stage 1
const expenses = [
    { label: "Cell Phone", amount: 15, category: "utility", paid: true },
    { label: "Internet", amount: 80, category: "utility", paid: false },
    { label: "Car Repairs", amount: 150, category: "emergency", paid: true },
    { label: "Laptop Charger", amount: 50, category: "personal", paid: true },
    { label: "Video Game Console", amount: 400, category: "personal", paid: false },
];

// ---------- functions ----------

// Stage 1
function describeExpense(expense) {
    return `${expense.label} — $${expense.amount} (${expense.category}, ${getPriority(expense)})`;
}

// Stage 1
function getPriority(expense) {
    // Why this order: You want to order high priority items first. If you looked for just unpaid items first, you wouldn't be able to check the amount, which is the other condition that determines high priority. Then, after high priority was checked for, there is only paid and unpaid. I checked for paid because I like checking for truthy values instead of using ! operators whenever possible. And then the last item is just an else because if it's not high priority but isn't paid, then it's a normal unpaid item.
    if(expense.amount > 100 && !expense.paid) {
        return "Pay first";
    } else if(expense.paid) {
        return "Paid";
    } else {
        return "Unpaid";
    }
}

// Stage 2
function getTotal(expenses) {
    let total = 0;

    for(const expense of expenses) {
        const { amount } = expense;
        total += amount;
    }

    return total;
}

// Stage 2
function getUnpaidTotal(expenses) {
    let unpaidTotal = 0;

    for(const expense of expenses) {
        const { amount, paid } = expense;
        if(!paid) {
            unpaidTotal += amount;
        }
    }

    return unpaidTotal;
}

// ---------- output ----------

// Stage 1
// console.log(describeExpense(expenses[0]));
// console.log(getPriority(expenses[0]));
// console.log("-----");
// console.log(describeExpense(expenses[1]));
// console.log(getPriority(expenses[1]));
// console.log("-----");
// console.log(describeExpense(expenses[2]));
// console.log(getPriority(expenses[2]));
// console.log("-----");
// console.log(describeExpense(expenses[3]));
// console.log(getPriority(expenses[3]));
// console.log("-----");
// console.log(describeExpense(expenses[4]));
// console.log(getPriority(expenses[4]));
// console.log("-----");

// Stage 2
for(const expense of expenses) {
    console.log(describeExpense(expense));
}

console.log("Total:", getTotal(expenses));
console.log("Unpaid:", getUnpaidTotal(expenses));