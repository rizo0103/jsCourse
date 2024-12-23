"use strict";

// 1;
const sayHello = (name) => {
    return `Привет, ${name}`;
};

// 2;
const returnNeighboringNumbers = (number) => {
    return [number - 1, number, number + 1];
};

// 3;
const getMathResult = (a, b) => {
    // if ((b <= 0 || typeof(b) !== 'number') || (a <= 0 || typeof(a) !== 'number')) {
    //     return `${a}`;
    // }
    let str = a;
    for (let i = 2; i <= b; ++i) {
        str += `---${a * i}`;
    }
    return str;
}

console.log(getMathResult(10, 5));
