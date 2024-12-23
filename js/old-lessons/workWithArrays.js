"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family) {
    if (family.length === 0) {
        return 'Семья пуста';
    }

    let str = '';

    for (let key of family) {
        str += ` ${key}`;
    }

    return `Семья состоит из:${str}`;
}

showFamily(family);

const favoriteCities = ['LISBON', 'Rome', 'milan', 'DuBlIn'];

function standardizeStrings(favoriteCities) {
    for (let key of favoriteCities) {
        console.log(key.toLowerCase());
    }
}

standardizeStrings(favoriteCities);
