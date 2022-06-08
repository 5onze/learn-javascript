'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES5
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor 생성자
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();