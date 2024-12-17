'use strict';

function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const set = new Set(), obj = {};

    str = new String(str).toLowerCase();

    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            set.add(char);
        }
    }

    return set.size === alphabet.length;
}

console.log({   1: isPangram("The quick brown fox jumps over the lazy dog"),
                2: isPangram("Hello, World!")});