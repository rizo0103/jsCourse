'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (arr) => arr.map(item => item.amount > 0 ? item.amount : 0).reduce((sum, current) => sum + current);

const getTotalIncomeAmount = (arr) => arr.map(item => item.amount).reduce((sum, current) => sum + current);

console.log(getPositiveIncomeAmount(funds)); // Output: 13'300
console.log(getTotalIncomeAmount(funds)); // Output: -500
