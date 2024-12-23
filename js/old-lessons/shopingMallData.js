"use strict";

const shoppingMallData = {
    shops: [
        {width: 10, length: 20},
        {width: 40, length: 40},
        {width: 120, length: 150},
    ],
    height: 5,
    budget: 50000,
    moneyPer1m3: 30,
};

function isBudgetEnough(shoppingMallData) {
    let volume = 0, square = 0;

    for (let key of shoppingMallData.shops) {
        square += key.width * key.length;
    }

    volume = square * shoppingMallData.height;

    if (shoppingMallData.budget - (volume * shoppingMallData.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));
