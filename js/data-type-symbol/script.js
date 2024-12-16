'use strict';

// let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     [Symbol('id')] : 1,
// };

// const obj = {
//     'name': 'Test',
//     [id]: 1,
//     getId: function () {
//         return this[id];
//     },
// }

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id === id2);

// obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// console.log(obj['id']);

// for (let value in obj) console.log(value);

const myAwesomDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123,
}

// other libraies code;

myAwesomDB.id = '32322323232';

console.log(myAwesomDB[Symbol.for('id')]);
console.log(myAwesomDB["id"]);
console.log(myAwesomDB);
