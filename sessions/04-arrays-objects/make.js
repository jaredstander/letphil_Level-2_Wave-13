// Session 04 — what you build in class, and the exercise.

console.log("make.js running");

// > Model data from something you care about — a playlist, a menu, a football squad, a reading list. 


// > 1. An **array of at least 3 objects**. Each object has at least 3 properties, including **one number and one boolean**

// > 2. At least one object has **an array inside it** — tags, ingredients, positions

// > 3. **Two functions** that each take one object and **return** something

// > 4. Call them on items by index — `songs[0]`, `songs[2]` — and log the results

// > 5. **A reference test:** make a second variable pointing at one item (`const favourite = songs[0]`), change something through it, then log the original. Explain what happened in a comment

const keyboards = [
    { name: "Ferris Sweep", keys: 34, wireless: false, tag: ["split", "ortholinear", "column stagger", "compact"] },
    { name: "Corne", keys: 42, wireless: false, tags: ["split", "ortholinear", "compact"] },
    { name: "Wooting 60HE", keys: 61, wireless: false, tags: ["hall effect", "gaming", "row stagger", "full-size"] }
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

console.log(getName(keyboards[0]));
console.log(getKeys(keyboards[1]));
console.log(isWireless(keyboards[2]));

const gamingKeyboard = keyboards[2];
gamingKeyboard.wireless = true;

console.log(isWireless(keyboards[2]));