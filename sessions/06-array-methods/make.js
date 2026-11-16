// Session 06 — what you build in class, and the exercise.

console.log("make.js running");

// > 1. Your **count** → `filter(...).length` YES
// > 2. Your **filter** loop → `filter` 
// > 3. Your **find** loop → `find`, **with a check for not-found** YES
// > 4. Your **transform** loop → `map`
// > 5. **Keep your sum as a `for...of` loop.** Write a comment saying why you didn't convert it
// > 6. One **chain**: `filter` then `map`, in one statement

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
    // for(keyboard of keyboards) {
    //     const {name, keys, wireless} = keyboard;
    //     console.log(`The ${name} keyboard has ${keys} keys and is ${wireless ? "wireless" : "wired"}.`);
    // }

    keyboards.map((keyboard) => console.log(`The ${keyboard.name} keyboard has ${keyboard.keys} keys and is ${keyboard.wireless ? "wireless" : "wired"}.`));
}
describeKeyboards(keyboards);


function countWirelessKeyboards(keyboards) {
    // let wirelessCount = 0;

    // for(i = 0; i < keyboards.length; i++) {
    //     if(keyboards[i].wireless) {
    //         wirelessCount++;
    //     }
    // }

    // return wirelessCount;

    return keyboards.filter((keyboard) => keyboard.wireless).length;
}
console.log(countWirelessKeyboards(keyboards));


function listWirelessKeyboards(keyboards) {
    // let wirelessCount = 0;

    // for(i = 0; i < keyboards.length; i++) {
    //     if(keyboards[i].wireless) {
    //         wirelessCount++;
    //     }
    // }

    // return wirelessCount;

    keyboards.filter((keyboard) => keyboard.wireless).map((keyboard, index) => console.log(`${index + 1}. ${keyboard.name}`));

    return null;
}
console.log(countWirelessKeyboards(keyboards));


function getTotalKeys(keyboards) {
    // I didn't update this to reduce because reduce uses an array of values and keyboards is an array of objects, so it seems like I would need to convert the array of objects into an array of values first to total it.
    let totalKeys = 0;

    for(i = 0; i < keyboards.length; i++) {
        totalKeys += keyboards[i].keys;
    }

    return totalKeys;
}
console.log(getTotalKeys(keyboards));


function getTotalKeysReduce(keyboards) {
    return keyboards
        .map((keyboard) => keyboard.keys)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log("Reduce:", getTotalKeysReduce(keyboards));


function findKeyboard(keyboards, searchTerm) {
    // for(keyboard of keyboards) {
    //     const {name} = keyboard;
    //     if(name === searchTerm) {
    //         return keyboard;
    //     }
    // }

    // return null;

    const result = keyboards.find((keyboard) => keyboard.name === searchTerm);
    if(result) {
        return result
    } else {
        return null;
    }
}
console.log(findKeyboard(keyboards, "Wooting 60HE"));


function printKeyboardList(keyboards) {
    // for(i = 0; i < keyboards.length; i++) {
    //     console.log(`1. ${keyboards[i].name}`);
    // }

    keyboards.map((keyboard, index) => console.log(`${index + 1}. ${keyboard.name}`));

    return null;
}
printKeyboardList(keyboards);