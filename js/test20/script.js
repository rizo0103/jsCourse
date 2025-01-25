'use strict';

const films = [
    { name: 'Titanic', rating: 9 },
    { name: 'Die hard 5', rating: 5 },
    { name: 'Matrix', rating: 8 },
    { name: 'Some bad film', rating: 4 }
];

const showGoodFilms = (arr) => arr.filter(item => item.rating >= 8);

console.log(showGoodFilms(films));

const showListOfFilms = (arr) => arr.reduce((sum, current, index) => sum + (index == 0 ? '' : ', ') + current.name, '');

console.log(showListOfFilms(films));

const setFilmsIds = (arr) => arr.map((item, index) => Object.assign(item, {id: index}));

setFilmsIds(films);

console.log(films);

const tranformedArray = setFilmsIds(films);

const checkFilms = (arr) => arr.every(item => item.id !== undefined);

console.log(checkFilms(tranformedArray));