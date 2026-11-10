// Session 05 — what you build in class, and the exercise.

console.log("make.js running");

// **Use your S4 Make data** — the playlist, menu, squad or reading list. Today it gets loops. (Their M1 expenses get loops as homework; don't let them do M1 in class.)

// ### The task

// > In `make.js`, with your S4 data:
// >
// > 1. A `for...of` loop that describes **every** item. Use **destructuring** inside it
// > 2. A **count** function — how many items match something (favourites, vegetarian dishes, players over 30…)
// > 3. A **sum** function — total of a number property
// > 4. A **find** function — takes a name, returns the matching item or `null`. **Test it with a name that doesn't exist**
// > 5. A classic `for` loop that prints a **numbered** list


const keyboards = [
    {
        name: "Ferris Sweep",
        keys: 34,
        wireless: false,
        tag: ["split", "ortholinear", "column stagger", "compact"],
    },
    {
        name: "Urchin",
        keys: 34,
        wireless: true,
        tag: ["split", "ortholinear", "column stagger", "compact"],
    },
    {
        name: "Corne",
        keys: 42,
        wireless: false,
        tags: ["split", "ortholinear", "compact"],
    },
    {
        name: "Totem",
        keys: 38,
        wireless: true,
        tag: ["split", "ortholinear", "column stagger", "compact"],
    },
    {
        name: "Wooting 60HE",
        keys: 61,
        wireless: false,
        tags: ["unibody", "hall effect", "gaming", "row stagger", "full-size"],
    },
    {
        name: "Coffeevan",
        keys: 45,
        wireless: false,
        tags: ["unibody", "row stagger", "full-size", "compact"],
    },
];


function describeKeyboards(keyboards) {
    for(keyboard of keyboards) {
        const {name, keys, wireless} = keyboard;
        console.log(`The ${name} keyboard has ${keys} keys and is ${wireless ? "wireless" : "wired"}.`);
    }
}

describeKeyboards(keyboards);


function countWirelessKeyboards(keyboards) {
    let wirelessCount = 0;

    for(i = 0; i < keyboards.length; i++) {
        if(keyboards[i].wireless) {
            wirelessCount++;
        }
    }

    return wirelessCount;
}

console.log(countWirelessKeyboards(keyboards));


function getTotalKeys(keyboards) {
    let totalKeys = 0;

    for(i = 0; i < keyboards.length; i++) {
        totalKeys += keyboards[i].keys;
    }

    return totalKeys;
}

console.log(getTotalKeys(keyboards));


function findKeyboard(keyboards, searchTerm) {
    for(keyboard of keyboards) {
        const {name} = keyboard;
        if(name === searchTerm) {
            return keyboard;
        }
    }

    return null;
}

console.log(findKeyboard(keyboards, "Wooting 60HE"));


function printKeyboardList(keyboards) {
    for(i = 0; i < keyboards.length; i++) {
        console.log(`1. ${keyboards[i].name}`);
    }

    return null;
}

printKeyboardList(keyboards);