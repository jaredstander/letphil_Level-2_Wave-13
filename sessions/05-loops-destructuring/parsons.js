// Session 05 — the line-ordering puzzle.

console.log("parsons.js running");

// Goal output 35

// A   const prices = [5, 10, 20];
// B   let total = 0;
// C   for (const price of prices) {
// D   total = total + price;
// E   }
// F   console.log(total);
// X   total = price;
// Y   const total = 0;

const prices = [5, 10, 20]; // A
let total = 0; // B
for (const price of prices) { // C
    total += price; // D
} // E
console.log(total); // F


// Goal: `findTask(tasks, "Call bank")` returns the Call bank object. `findTask(tasks, "Walk dog")` returns `null`.

// ```
// A   function findTask(tasks, title) {
// B   for (const task of tasks) {
// C   if (task.title === title) {
// D   return task;
// E   }
// F   }
// G   return null;
// H   }
// X   } else { return null; }

const tasks = [
    { title: "Call bank", priority: 1, isDone: false },
    { title: "Buy groceries", priority: 2, isDone: false },
    { title: "Get oil change", priority: 2, isDone: false },
];

function findTask(tasks, title) { // A
    for (const task of tasks) { // B
        if (task.title === title) { // C
            return task; // D
        } // E
    } // F
    return null; // G
} // H

console.log(findTask(tasks, "Call bank"));
console.log(findTask(tasks, "Walk dog"));


// Number the list — `1. Buy milk`, `2. Call bank`, `3. Pay rent`:

// ```js
// const tasks = ["Buy milk", "Call bank", "Pay rent"];

// for (let i = ____0; i ____< tasks.length; i++) {
//   console.log(`${____i +1}. ${tasks[i]}`);
// }
// ```

const tasks = ["Buy milk", "Call bank", "Pay rent"];

for (let i = 0; i < tasks.length; i++) {
   console.log(`${i++}. ${tasks[i]}`);
}


// const product = {
//     name: "MacBook Air",
//     price: 1000,
//     rating: 4.4,
//     inStock: true,
//     category: "Electronics",
//     brand: "Apple"
// }

// function ProductCard({product}){
//     return(
//         <div>
//             <h2>{product.name}</h2>
//             <p>${product.price}</p>
//         </div>
//     );
// }

// function ProductCard({product}){
//     const {name, price} = product

//   eturn(
//         <div>
//             <h2>{name}</h2>
//             <p>${price}</p>
//         </div>
//     );
// }



// const task = { title: "Buy milk", isDone: false, priority: 1 };

// const { ____title, ____priority } = task;
// console.log(`${title} is priority ${priority}`);



// > A **gradebook**. There's a list of students, each with a name and a score. The app shows the **class average**, **how many passed** (60 or more), and **the top student**.
// >
// > 1. Shape, in English, and one example student
// > 2. The functions — name, needs, gives back
// > 3. **New:** which loop pattern does each function use?

/*
    1. Students is an array of objects.
    const students = [
        { name: "", score: 0 },
        { name: "", score: 0 },
        { name: "", score: 0 },
        { name: "", score: 0 },
        { name: "", score: 0 },
    ];

    2. 3 functions:
        getAverageScore() takes the array of students and returns a number which is the average of all scores.
        getNumberPassed() takes the array of students and returns a number which is how many of the students has a score equal to or greater than 60.
        getTopStudent() takes the array of students and returns text which is the name of the student with the highest score.

    3. which loop pattern does each function uses:
        getAverageScore(): for loop.
        getNumberPassed(): for loop.
        getTopStudent(): for of loop.
*/

const students = [
  { name: "John", score: 88 },
  { name: "Bob", score: 92 },
  { name: "Jared", score: 50 },
  { name: "Phil", score: 77 },
  { name: "Harry", score: 45 },
];
function getAverageScore(students) {
  if (students.length === 0) return null;

  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }

  return total / students.length;
}

console.log(getAverageScore(students));

function getNumberPassed(students) {
  let passed = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
      passed++;
    }
  }

  return passed;
}

console.log(getNumberPassed(students));

function getTopStudent(students) {
  if (students.length === 0) return null;

  let top = students[0];

  for (const student of students) {
    if (student.score > top.score) {
      top = student;
    }
  }

  return top;
}

console.log(getTopStudent(students));
