'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 인덱스

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
fruits.push('🍓','🍑');
console.log(fruits);


// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍓','🍋');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push : item의 배열이 바뀌기 때문에 느림.
// splice : remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1); // 1부터 모든 데이터를 지움(지우고 싶은 갯수를 지정해줘야 한다)
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); // 지워진 자리에 새로운 item을 넣는다. 지우지않고 값을 넣는 것도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥')); // boolean
console.log(fruits.indexOf('🥥')); // -1 : 배열안에 해당하는 값이 없을때 -1이 출력된다

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 제일 첫번째로 해당하는 값
console.log(fruits.lastIndexOf('🍎')); // 제일 마지막에 해당하는 값
