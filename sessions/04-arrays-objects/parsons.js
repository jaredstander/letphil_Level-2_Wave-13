// Session 04 — the line-ordering puzzle.

console.log("parsons.js running");

// Using the same `user`, log the title of her second task — **one step per line**.

// Goal output: `Call bank`
// ABC

// const user = {
//   name: "John",
//   tasks: [
//     { title: "Buy Milk", isDone: false },
//     { title: "Call Bank", isDone: true },
//   ],
// };

// A   const tasks = user.tasks;
// B   const second = tasks[1];
// C   console.log(second.title);
// X   const second = tasks[2];
// Y   const tasks = user[tasks];

// const tasks = user.tasks; // A
// const second = tasks[1]; // B
// console.log(second.title); // C

// Using dot notation example
// const tasks = user.tasks;
// const second = tasks[1];
// console.log(second.title);

// Using braket notation example
// const tasks = user["tasks"];
// const second = tasks[1];
// console.log(second["title"]);

// const student = {
//   name: "Bob",
//   age: "33",
// };

// // console.log(student.name); // Bob
// // console.log(student.age); // 33

// const property = "name";
// console.log(student[property]);

const tasks = [
  { title: "Buy milk", isDone: false },
  { title: "Call bank", isDone: true },
];



// Goal: mark the first task done, add a third task, and print `3 true`.

// ```
// A   tasks[0].isDone = true;
// B   tasks.push({ title: "Walk dog", isDone: false });
// C   console.log(tasks.length, tasks[0].isDone);
// X   tasks.isDone = true;
// Y   tasks.push("Walk dog");

tasks[0].isDone = true; // A
tasks.push({ title: "Walk dog", isDone: false }); // B
console.log(tasks.length, tasks[0].isDone); // C

// tasks[0].isDone = true;
// tasks.push({ title: "Walk dog", isDone: false });
// console.log(tasks.length, tasks[0].isDone);
// tasks.pop();
// console.log(tasks);


// const searchProductHistory = ["Laptop", "Socks", ];

// searchProductHistory.push("Laptop");
// searchProductHistory.push("Socks")


// const cart = [];

// cart.push({name: "shirt", price: 1.99})

// cart.push({name: "socks", price: 2.99});


// [
//     {name: "shirt", price: 1.99}
//     {name: "socks", price: 2.99}
// ]


// const tasks = [
//     {title: "Buy Milk"},
//     {title: "Call Bank"},
//     {title: "Pay Tent"}
// ];

// function getTitle(task){
//     return task.____
// }

// const last = tasks[tasks.____ - 1]
// console.log(getTitle(last)) // Pay rent

const tasks = [
    {title: "Buy Milk"},
    {title: "Call Bank"},
    {title: "Pay Rent"}
];

function getTitle(task){
    return task.title;
}

const last = tasks[tasks.length - 1]
console.log(getTitle(last)) // Pay rent

tasks.length // 3
tasks.length - 1 // 2 

tasks[2]//  { title: "Pay Rent" }



// The design check gains its third question: **what shape is the data?** — answered _first_.

// > A **shopping cart**. It holds items. Each item has a name, a price, and how many you're buying. The app shows how many different items are in the cart, and a line for each one like `3 × Pen: $6`.
// >
// > 1. Describe the data's shape **in English**, then write **one example item**
// > 2. List the functions: name, what each needs, what each gives back

/*
    1. The shopping cart is an array of objects, with each object having properties like the item number, name, price, etc.

    2. Functions:
        A. addToCart, needs a product object and the cart array, gives back the cart array with the new item added.
        B. removeFromCart, needs the index of the item in the cart to remove and the cart array, gives back the cart array with the item at the provided index removed from it. (Instead of pop, I would expect users to want to remove items from any position in the array even if we haven't used a function like that yet.)
        C. clearCart, needs the cart array, gives nothing back but sets the array as empty.
*/

// We want to add 3 pens, 1 laptop, 2 notebooks.

// product name, price, quantity

// const item = {
//     name: "Pen",
//     price: 5,
//     quantity: 3
// };

// 1.  shopping cart data
const cart = [
  { name: "pen", price: 5, quantity: 3 },
  { name: "laptop", price: 1200, quantity: 1 },
  { name: "notebook", price: 4, quantity: 2 },
];

// function getEachLineTotal(item){
//    return `${item.quantity} × ${item.name}: $${item.price * item.quantity}`;
// }


// Calculates each item
function getEachLineTotal(item) {
  return item.price * item.quantity;
}

// formatting the output
function displayItem(item) {
  const getTotal = getEachLineTotal(item);
  return `${item.quantity} × ${item.name}: $${getTotal}`;
}

console.log("Items in our cart", cart.length);

console.log(displayItem(cart[0]));

console.log(displayItem(cart[1]));

console.log(displayItem(cart[2]));
