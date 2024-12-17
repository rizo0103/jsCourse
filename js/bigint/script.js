'use strict';

// const bigint = 1232322345665432123456654321234566543212345n;

const sameBigint = BigInt(12323223456654321234566543212345);

// console.log(typeof(bigint), bigint);
// console.log(typeof(sameBigint), sameBigint);

// console.log(5n + 1); // error;
// console.log(Math.round(5.5n)); // error

// console.log(5n / 2n); // 2n;
// console.log(2n > 1n); // true;
// console.log(2n > 5); // false;
// console.log(2n == 2); // true;
// console.log(2n === 2) // false;

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number)); // 3n;
console.log(Number(bigint) + number); // 3;
