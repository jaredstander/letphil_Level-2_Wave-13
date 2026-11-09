// Session 5 — Loops (and Destructuring)
// Three tasks or three thousand, same code.

const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true, priority: 2 },
  { title: "Pay rent", isDone: false, priority: 3 }
];

function getStatus(task) {
  const { isDone, priority } = task;

  if (isDone) return "Done";
  if (priority === 1) return "Urgent";
  return "To do";
}

function formatTask(task) {
  return `${task.title}: ${getStatus(task)}`;
}

function countOpen(tasks) {
  let count = 0;
  for (const task of tasks) {
    if (!task.isDone) {
      count = count + 1;
    }
  }
  return count;
}

for (const task of tasks) {
  console.log(formatTask(task));
}

console.log(`${countOpen(tasks)} tasks still open`);
