// Session 06 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output: `[ 'Buy milk', 'Pay rent' ]` — the titles of the unfinished tasks.

const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true, priority: 1 },
  { title: "Pay rent", isDone: false, priority: 2 },
  { title: "Walk dog", isDone: true, priority: 1 }
];

// A   const open = tasks.filter((task) => !task.isDone);
// B   const titles = open.map((task) => task.title);
// C   console.log(titles);
// X   const open = tasks.filter((task) => task.isDone);
// Y   const titles = open.map((task) => { task.title; });

const open = tasks.filter((task) => !task.isDone); // A
const titles = open.map((task) => task.title); // B
console.log(titles); // C



// `search` is `"Nope"` — a title that isn't in the list. Goal: print `Not found`, **not** crash.

// ```
// const tasks = [
//   { title: "Buy milk", isDone: false, priority: 1 },
//   { title: "Call bank", isDone: true, priority: 2 },
//   { title: "Pay rent", isDone: false, priority: 1 },
//   { title: "Walk dog", isDone: true, priority: 3 }
// ];

const search = "Nope";


// A   const found = tasks.find((task) => task.title === search);
// B   if (found) {
// C   console.log(found.priority);
// D   } else {
// E   console.log("Not found");
// F   }
// X   console.log(found.priority);
// ```

const found = tasks.find((task) => task.title === search); // A
if (found) { // B
    console.log(found.priority); // C
} else { // D
    console.log("Not found"); // E
} // F
