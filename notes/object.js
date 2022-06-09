'use strict';
// Objects
// one of the JavaScript's date types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// object = { key : value };


// 1. Literals and properies
// object를 만드는 방법 2가지
const obj1 = {} // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// 자바스크립트에서는 오브젝트를 도중에 추가할수 있다. 하지만 유지보수에 어려움.
ellie.hasJob = true;
console.log(ellie.hasJob);

// 삭제도 가능
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// 동적으로 key에 관련한 value를 받아야할때 유용하게 쓰일수있다.
console.log(ellie.name);
console.log(ellie['name']); //string 형태로 접근 가능
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30)
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj) 키 확인
console.log('name' in ellie); // true
console.log('age' in ellie);  // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined


// 6. for..in vs for..of 유용
// for (key in obj)
console.clear();
for (const key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for (const value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
// user2.name = 'coder';
console.log(user);

// 예전 방법
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);


// 요즘 방법
const user4 = Object.assign({}, user); // (target, source)
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue 뒤에 오는 값을 덮어씌우기 때문.
console.log(mixed.size); // big
