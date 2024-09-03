// "use strict";
// FUCK!!!!!!!!!!!!!

// let a = 5, b = a;

// b += 5;

// const obj = {
//     a: 5,
//     b: 1,
// }, copy = obj, arr = [1, 2, 3, 4], arrCopy = arr;

// obj.a = 10;
// arrCopy[0] = 10;

// console.log(arrCopy);
// console.log(arr);

function copy(mainObj) {
    let obj = {};
    let key;

    for (key in mainObj) {
        obj[key] = mainObj[key];
    }

    return obj;
}

const mainObj = {
    a: 1,
    b: 2,
    c: {
        d: 1,
        e: 2,
    },
};

const copyObj = copy(mainObj);
copyObj.c.d = 10;

// console.log(copyObj);    
// console.log(mainObj);

const add = {
    d: 17,
    e: 20,
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add, 'endl', clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdsasasda';

// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const arr = ['a', 'b'];
const newArr = [...arr];
const q = {
    one: 1,
    two: 2,
};
const newObj = {...q};

console.log(newObj);

// HEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
