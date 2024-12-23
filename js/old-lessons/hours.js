"use strict";

// 1;
function getTimeFromMinutes(minutes) {
    if (typeof(minutes) != 'number' || Math.round(minutes) != minutes || minutes < 0) {
        return "Ошибка, проверьте данные";
    }

    let hour = '', minute = '';

    switch(Math.floor(minutes / 60) % 10) {
        case 0: 
            hour = 'часов';
            break;
        case 1:
            hour = 'час';
            break;
        default:
            hour = 'часа';
    }

    switch(minutes % 60 % 10) {
        case 0:
            minute = 'минут';
            break;
        case 1:
            minute = 'минута';
            break;
        default:
            minute = 'минуты';
            break;
    }
    return `Это ${Math.floor(minutes / 60)} ${hour} и ${minutes % 60} ${minute}`; 
}

// 2;
function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];

    for (let i = 0; i < arr.length; ++i) {
        if (typeof(arr[i]) != 'number' || arr.length != 4) {
            return 0;
        }
    }

    return Math.max(arr[0], arr[1], arr[2], arr[3]);
}

// console.log(findMaxNumber(1, 5, 11));
