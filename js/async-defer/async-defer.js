'use strict';

const p = document.querySelectorAll('p');
let a = 1000000, b = 5;

const sum = (a, b) => a + b;

console.log({
    p: p,
    sum: sum(a, b),
});
 
function loadScript(src) {
    const script = document.createElement('script');
    
    script.src = src;
    script.async = false;
    document.body.appendChild(script);   
}

loadScript('./test.js');
loadScript('./some.js');
