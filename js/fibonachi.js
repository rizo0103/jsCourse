"use strict";

function fib(cnt) {
    if (typeof(cnt) != 'number' || cnt <= 0 || Math.round(cnt) !== cnt) {
        return "";
    }

    let str = '0', f1 = 0, f2 = 1, fn = 1;
    
    for (let i = 0; i < cnt - 1; ++i) {
        str += ` ${fn}`;
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }

    return str;
}

console.log(fib(6.6));
