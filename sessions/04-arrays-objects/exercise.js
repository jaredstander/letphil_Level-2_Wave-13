// Session 04 — exercise
// 
// 1. Parsons

const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};

// Goal output: `Cloudy` — one step per line.
// A   const days = weather.days;
// B   const tuesday = days[1];
// C   console.log(tuesday.condition);
// X   console.log(days.condition);
// Y   const tuesday = days[2];

const days = weather.days; // A
const tuesday = days[1]; // B
console.log(tuesday.condition); // C

// Answer: ABC



// 2. Modify
/*
    Add a function to your Make task that takes one object and **changes** it — for example, `markFavourite(song)` sets `isFavourite` to `true`. It shouldn't return anything.
    
    Before running it, predict: after `markFavourite(songs[2])`, what's `songs[2].isFavourite`?
    
    Then run it, and write one sentence: **why did this work, when `f(x)` in today's warm-up didn't change `x`?
*/

const keyboards = [
    { name: "Ferris Sweep", keys: 34, wireless: false, favorite: false, tags: ["split", "ortholinear", "column stagger", "compact"] },
    { name: "Corne", keys: 42, wireless: false, favorite: false, tags: ["split", "ortholinear", "compact"] },
    { name: "Wooting 60HE", keys: 61, wireless: false, favorite: false, tags: ["hall effect", "gaming", "row stagger", "full-size"] }
];

function getName(keyboard) {
    return keyboard.name;
}

function getKeys(keyboard) {
    return keyboard.keys;
}

function isWireless(keyboard) {
    return keyboard.wireless ? "Wireless" : "Wired";
}

// New Function
function makeFavorite(keyboard) {
    keyboard.favorite = true;
}

console.log(getName(keyboards[0]));
console.log(getKeys(keyboards[1]));
console.log(isWireless(keyboards[2]));

const gamingKeyboard = keyboards[2];
gamingKeyboard.wireless = true;

console.log(isWireless(keyboards[2]));

// Prediction: running makeFavorite(keyboards[0]); will show true when logging keyboards[0].favorite;
console.log("Before running makeFavorite: ", keyboards[0].favorite);
makeFavorite(keyboards[0]);
console.log("After running makeFavorite: ", keyboards[0].favorite);

// Then run it, and write one sentence: **why did this work, when `f(x)` in today's warm-up didn't change `x`?**

// I am assuming the following code is the f(x) function that was the warm up:
/*
    What is x at the end?
    function f(n) {
        n = n + 1; // 5 + 1 = 6
        return n; // 6
    }

    let x = 5;
    console.log(f(x));
*/
// My explanation for why this worked when the f(x) in our example did not is that a function with a parameter doesn't take the actual variable to run the function, it takes the value of the argument provided and then returns something. In this example, the argument is the object, but the code updates a property of the object, not the variable that references the object; non-object variables are just copying values over, but assigning an object to any variables actually points that variable back to the original object. So modifying an object outside or inside a function persists as long as the argument passed to the function has been assigned the object.