"use strict";


// 1;
let i = 5;
while (i <= 10) {
    console.log(i);    
    ++i;
}

// 2;
for (let i = 20; i >= 10; --i) {
    console.log(i);
}

// 3;
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 4;
i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
    ++i;
}

// 5;
let arr = [];

for (let j = 5; j <= 10; ++j) {
    arr[j - 5] = j; 
}

console.log(arr);
