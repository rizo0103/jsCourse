"use strict";
// 1;
const numberOfFilms = prompt("How many movies have you watch ?", '');

// 2;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// 3;

const q1 = prompt('One of the latest movies yoy`ve watched', '');
const q2 = prompt('How would you rate it ?', '');
const q3 = prompt('One of the latest movies yoy`ve watched', '');
const q4 = prompt('How would you rate it ?', '');

personalMovieDB.movies[`${q1}`] = q2;
personalMovieDB.movies[`${q3}`] = q4;

console.log(personalMovieDB);
