// Expense Tracker — M2 skeleton
//
// This is the SHAPE of the app, not the app. Fill in every TODO.
// The order of the sections matters: data first, then the things that change it,
// then the drawing, then the listening. Keep these headings in your file.
//
// Build it in this order, and check it works after every step:
//   1. data + render (see the page)         ← Stage 1
//   2. the form (add one expense)           ← Stage 2
//   3. toggle paid
//   4. delete

// ---------- data ----------

// TODO: your expenses from M1, each with an id added.
// let expenses = [ ... ];

// TODO: grab the elements you need from the page, once, here.
// const list = ...
// const summary = ...
// const form = ...

// ---------- data changes ----------
// One function per thing the user can do.
// Each one changes the data, then calls render(). Nothing else.

function addExpense(label, amount, category) {
  // TODO: build a new expense object with a unique id
  // TODO: add it to expenses
  // TODO: render()
}

function togglePaid(id) {
  // TODO: find the expense with this id
  // TODO: flip its isPaid
  // TODO: render()
}

function deleteExpense(id) {
  // TODO: keep every expense EXCEPT the one with this id
  // TODO: render()
}

// ---------- drawing ----------
// These build the page from the data. They never change the data.

function createExpenseElement(expense) {
  // TODO: destructure what you need from expense
  // TODO: create an <li>, set its text
  // TODO: add a class if it's paid
  // TODO: create the two buttons, each with a click listener
  // TODO: append the buttons to the <li>
  // TODO: return the <li>
}

function render() {
  // TODO: clear the list
  // TODO: if there are no expenses, show an empty-state message and stop
  // TODO: loop the data, append one element per expense
  // TODO: update the summary line
}

// ---------- listening ----------
// Connects what the user does to the data-change functions.

// TODO: listen for the form's "submit"
//       - stop the page reloading
//       - read the input values (remember: .value is always a string)
//       - ignore empty input
//       - call addExpense
//       - clear the inputs

render();
