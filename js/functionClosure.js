"use strict";

// let number = 5;

// function logNumber() {
//     let number = 4;
//     console.log(number);
// }

// number = 6;

// logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter += 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

{
    let msg = 'Hello';
}

console.log(msg);

for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
        let num = 3;
    }
    console.log(num);
}
