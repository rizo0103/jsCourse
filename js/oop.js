"use strict";

let str = 'some';
let strObj = String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,

    sayHello: function() {
        console.log('Hello');
    }
};
const john = Object.create(soldier);
// const john = {
//     health: 100,
// };

// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);

john.sayHello();
console.log(john.health)

