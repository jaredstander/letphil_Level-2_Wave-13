// Session 06 — your before-class prediction snippet.

console.log("predict.js running");

// const tasks = [
//   { title: "Buy milk", isDone: false },
//   { title: "Call bank", isDone: true },
//   { title: "Pay rent", isDone: false },
// ];

// const tasks2 = [
//   { title: "Buy Milk" },
//   { title: "Call bank" },
//   { title: "Pay rent" },
// ];

// const titles = tasks.map((task) => {
//   task.title;
// });

// const open = tasks.filter((task) => !task.isDone);

// console.log(titles); //  ["buy milk", "call bank", "pay rent"]
// console.log(open.length); // 2
// console.log(tasks.length); // 3



const tasks = [
  { title: "Buy milk", isDone: false, priority: 1 },
  { title: "Call bank", isDone: true,  priority: 1 },
  { title: "Pay rent",  isDone: false, priority: 2 },
  { title: "Walk dog",  isDone: false, priority: 1 }
];

const result = tasks.filter((task) => task.priority === 1).filter((task) => !task.isDone).map((task) => task.title);

console.log(result); // ["Buy milk", "Walk dog"]