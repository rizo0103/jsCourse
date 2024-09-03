"use strict";

let someString = 'This is some strange string';

function reverse(someString) {
    if (typeof(someString) !== 'string') {
        return 'Ошибка!';
    }
    
    let newString = '';

    for (let i = someString.length - 1; i >= 0; --i) {
        newString += someString[i];
    }

    return newString;
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'], additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(allCurrencies, finishedCur) {
    if (allCurrencies.length === 0) {
        return 'Нет доступных валют';
    }

    let str = 'Доступные валюты:\n';
    for (let key of allCurrencies) {
        if (key === finishedCur || str.indexOf(key) !== -1) {
            continue ;
        } else {
            str += `${key}\n`;
        }
    }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
