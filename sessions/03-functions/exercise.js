/*
    1. Parsons

    Goal output:
    true
    false

    A   function isEven(n) {
    B   return n % 2 === 0;
    C   }
    D   console.log(isEven(4));
    E   console.log(isEven(7));
    X   return n % 2;
    Y   console.log(n % 2 === 0);
*/

function isEven(n) { // A
    return n % 2 === 0; // B
} // C
console.log(isEven(4)); // D
console.log(isEven(7)); // E

// Answer: ABCDE



/*
    2. Modify

    > Add a function `isGoodTip(percent)` to your tip calculator. It returns `true` if the percent is 15 or more, `false` otherwise.
    >
    > Then, **outside the function**, use it with a ternary to log either `"Generous"` or `"Standard"`.
    >
    > Write one sentence: why does `isGoodTip` return `true`/`false` instead of returning the word?
*/

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

const isGoodTip = (percent) => percent >= 15;

const bill = 100;
const tip = calculateTip(bill, 10);
const total = calculateTotal(bill, tip);
const perPerson = splitBill(total, 2);

console.log(
  `Tip: ${format(tip)}, total ${format(total)}, each ${format(perPerson)} `,
);

console.log(isGoodTip(10) ? "Generous" : "Standard");

// Explanation: I think it uses true or false because this form of the data is more useful if we wanted to do something else with that data. For example, if you needed to change the message, or add another step in the process like automatically print a thank you on a recipt if the tip is good, it's easier and less error-prone to just check true or false versus looking at a specific text value that might later change. Or, if you wanted to record how many tips over a day, week, etc, were good, you would want that column to say true or false because that's clearer than "Standard" or "Generous." Or for another example, if you wanted to pull the best tips for a period of time, you could retrieve all records where good_tip (or whatever the column name is) and then those values would already be in true or false value format.