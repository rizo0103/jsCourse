"use strict";

function first() {
    setTimeout(() => {
        console.log(1);
    }), 500;
}

function second() {
    console.log(2);
}

// first();
// second();

async function learnJS (lang, callback) {
    setTimeout(() => {
        console.log(`I'm learning ${lang}`);
    }, 1500);
    callback();
}

function done() {
    console.log(`I've finished this lesson`);
}

learnJS('JavaScript', done);
