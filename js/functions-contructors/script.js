'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    exit() {
        console.log(`Human ${this.name} left`);
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
