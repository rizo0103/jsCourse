"use strict";

const arr = [2, 3, 6 ,8, 10];

arr.sort(compare);

function compare(a, b) {
    return a - b;
}

arr.forEach((item, i, arr) => {
    console.log(`${i}: ${item} in array ${arr}`);
})
