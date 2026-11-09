// Task Tracker — console version
//
// This is the PARALLEL to your Expense Tracker. Same structure, different data.
// Read it, run it, then build yours with the same shape.
// Don't copy it line by line: every function name, property and message in yours
// should be about expenses, not tasks.
//
// Design check
// Shape: a list of tasks. Each has a title, whether it's done, and a priority (1 = most urgent).
// Example: { title: "Buy milk", isDone: false, priority: 1 }

// ---------- data ----------

const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true, priority: 2 },
  { title: "Pay rent", isDone: false, priority: 3 }
];

// ---------- functions ----------
// Each one takes ONE task and RETURNS something. None of them logs.

function getStatus(task) {
  // Done first: a finished task shouldn't show as urgent.
  if (task.isDone) return "Done";
  if (task.priority === 1) return "Urgent";
  return "To do";
}

function describeTask(task) {
  return `${task.title}: ${getStatus(task)}`;
}

// ---------- output ----------
// The only console.logs are here, at the edge.

console.log(describeTask(tasks[0]));
console.log(describeTask(tasks[1]));
console.log(describeTask(tasks[2]));
