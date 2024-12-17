'use strict';

function amountOfPages(summary) {
    let cnt = 0, nums = '';
    
    while (nums.length != summary) {
        ++cnt;
        nums = `${nums}${cnt}`;
    }

    return cnt;
}

console.log(amountOfPages(10000000000000000000));
