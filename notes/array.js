'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // λ§μ§λ§ μΈλ±μ€

console.clear();
// 3. Looping ;over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('π','π');
console.log(fruits);


// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('π','π');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push : itemμ λ°°μ΄μ΄ λ°λκΈ° λλ¬Έμ λλ¦Ό.
// splice : remove an item by index position
fruits.push('π','π','π');
console.log(fruits);
fruits.splice(1, 1); // 1λΆν° λͺ¨λ  λ°μ΄ν°λ₯Ό μ§μ(μ§μ°κ³  μΆμ κ°―μλ₯Ό μ§μ ν΄μ€μΌ νλ€)
console.log(fruits);
fruits.splice(1, 0, 'π', 'π'); // μ§μμ§ μλ¦¬μ μλ‘μ΄ itemμ λ£λλ€. μ§μ°μ§μκ³  κ°μ λ£λ κ²λ κ°λ₯
console.log(fruits);

// combine two arrays
const fruits2 = ['π','π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯')); // boolean
console.log(fruits.indexOf('π₯₯')); // -1 : λ°°μ΄μμ ν΄λΉνλ κ°μ΄ μμλ -1μ΄ μΆλ ₯λλ€

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); // μ μΌ μ²«λ²μ§Έλ‘ ν΄λΉνλ κ°
console.log(fruits.lastIndexOf('π')); // μ μΌ λ§μ§λ§μ ν΄λΉνλ κ°
