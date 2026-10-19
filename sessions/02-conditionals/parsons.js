// Session 02 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output Discount: 20

// A   if (total > 100) {
// B   const total = 120;
// C   discount = 10;
// D   let discount = 0;
// E   } else if (total > 50) {
// F   discount = 20;
// G   }
// H   console.log(`Discount: ${discount}`);
// X   if (total > 50) {
// Y   const discount = 0;

const total = 120; // B
let discount = 0; // D
if (total > 100) { // A
    discount = 20; // F
} else if (total > 50) { // E
    discount = 10; // C
} // G
console.log(`Discount: ${discount}`); // H

BDAFECGH


// Goul output: "Done"

// A   const isDone = true;
// B   const label = isDone ? "Done" : "To do";
// C   console.log(label);
// X   const label = isDone ? "To do" : "Done";
// Y   if (isDone) { const label = "Done"; }

const isDone = true; // A
const label = isDone ? "Done" : "To do"; // B
console.log(label); // C

ABC