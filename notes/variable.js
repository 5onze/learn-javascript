
//1. Use strict
//π‘added ECMAScript 5
// use this for Vanila Javascript.
'use strict';

//2. Variable λ³μ , rw(read/write) : μ½κ³  μ°κΈ° κ°λ₯.
//let (added in ES6)
let globalName = 'global name'; //global scope
{ // block scope
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var μ΄μ λ μμ!
// var hoisting μ μΌ μμ λμ΄μ¬λ €μ€λ€
// block scopeλ₯Ό μ¬μ©ν μ μμ. 


// 3. Constant, r(read only) : μ½κΈ°λ§ κ°λ₯.
// λ³μμ κ°μ΄ λ°λμ΄μΌ λ  μ΄μ κ° μλ€λ©΄ constλ‘ μ μΈ.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()), λ³κ²½μ΄ λΆκ°λ₯.
// Mutable data types: all objects by default are mutable in JS, λ³κ²½ κ°λ₯ ex) array
// favor immutable data type always for a few reasons:
// - security λ³΄μμ±
// - thread safety
// - reduce human mistakes
// νλ² ν λΉνλ©΄ κ°μ΄ μ λ λ°λμ§ μμ.


//4. Variable types μλ°μ€ν¬λ¦½νΈ λ°μ΄ν° νμλ€
// primitive νκ°μ§ μμ΄ν, single item: number, string, boolean, null, undefiend, symbol
// object μ¬λ¬κ°μ μμ΄ν , box container
// function, first-class function

const count = 17; //integer μ μ
const size = 17.1; // decimal number μμ
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number 
// νΉλ³ν μ«μμ κ°- speical numberic values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234456767879879123435456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// π‘ string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBab = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBab}, type: ${typeof helloBab}`);
// console.log('value: ' + helloBab + ' type: ' + typeof helloBab);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects  κ³ μ ν μλ³μ, λμμ μ¬μ©κ°λ₯
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol2 = Symbol.for('id');
const gSymbol1 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// .description μ€νΈλ§μΌλ‘ λ³ν

// object, real-life object, data structure
// λ°μ€νν
const ellie = { name: 'ellie', age: 20};
ellie.age = 21; // object μμ name, age κ°μ λ³κ²½μ΄ κ°λ₯.


// 5. Dynamic typing: dynamically typed language
// λΉ λ₯΄κ² νλ‘ν νμμ λ§λ€λ μ μ©
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
