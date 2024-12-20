'use strict';

let user = {name: 'Ivan'};

let map = new WeakMap();
map.set(user, 'data');
user = null;

console.log(map);
