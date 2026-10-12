// Session 01 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output: `Buy milk - 3 left`

// use four  of these lines. Two are traps. 

// C   const name = "Buy milk";
// B   let count = 5;
// D   count = count - 2;
// A   console.log(`${name} — ${count} left`);

// Remove
// Y   console.log("${name} — ${count} left");
// X   const count = 5;



// Goal output:

//true
//false

// A   const age = 18;
// C   const typed = "18";
// B   console.log(typed === "18");
// D   console.log(age === typed);

// Remove
// X   console.log(age == typed);




const price = 20;
const quantity = 3;
let total = price * quantity;
total -= 5; // take $5 off
console.log(`Total: ${total}`);
// 55