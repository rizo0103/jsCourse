function deepCount(arr) {
    let count = 0;

    arr.forEach(element => {
        if (Array.isArray(element)) {
            count += deepCount(element);
        }
        ++count;
    });

    return count;
}

console.log(deepCount([1, 5, 3, [10]]));