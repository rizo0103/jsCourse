function factorial(n) {
    let result = n;

    if (typeof(result) !== 'number' || result !== Math.floor(result)) {
        return 'Error';
    }

    if (result <= 0) {
        return 1;
    }

    if (n === 1) {
        return result;
    } else {
        return result * factorial(n - 1);
    }
}

console.log(factorial(0));
