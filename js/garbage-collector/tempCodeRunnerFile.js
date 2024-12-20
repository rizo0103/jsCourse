function outer() {
    const potentiallyHugeArray = [];

    return function inner() {
        potentiallyHugeArray.push('Hello!');
        console.log('Hello!!');
    };
}

const sayHello = outer();
