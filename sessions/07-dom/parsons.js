// Session 07 — the line-ordering puzzle.

console.log("parsons.js running");

//  <h1>My Tasks</h1>
//   <ul id="task-list"></ul>

const list = document.getElementById("task-list");

const tasks = [
  { title: "Buy milk", isDone: false },
  { title: "Call bank", isDone: true },
];

// // Create one <li> for a task
function createTaskElement({ title, isDone }) {
  const item = document.createElement("li");

  item.textContent = isDone ? `✓ ${title}` : title;

  return item;
}

// A   function render() {
// B   list.textContent = "";
// C   tasks.forEach((task) => {
// D   list.append(createTaskElement(task));
// E   });
// F   }
// X   list.append(createTaskElement);

function render() { // A
    list.textContent = ""; // B
    tasks.forEach((task) => { // C
        list.append(createTaskElement(task)); // D
    }); // E
} // F

render();