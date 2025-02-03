'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    };

    #surname = 'Petrychenko';
    
    say = () => {
        console.log(`User's name: ${this.name} Age: ${this._age} Surname: ${this.#surname}`);
    }
    
    get age() {
        return this._age;
    }
    
    set age(age) {
        if (age >= 0 && age <= 150 && typeof age === 'number') {
            this._age = age;
        } else {
            console.log('Invalid age!');
        }
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan._age);
ivan._age = 99;
console.log(ivan._age);
ivan.say();
console.log(ivan.surname);
