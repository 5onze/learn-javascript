
//1. Use strict
//💡added ECMAScript 5
// use this for Vanila Javascript.
'use strict';

//2. Variable 변수 , rw(read/write) : 읽고 쓰기 가능.
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

// var 이제는 안씀!
// var hoisting 제일 위에 끌어올려준다
// block scope를 사용할수 없음. 


// 3. Constant, r(read only) : 읽기만 가능.
// 변수의 값이 바뀌어야 될 이유가 없다면 const로 선언.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()), 변경이 불가능.
// Mutable data types: all objects by default are mutable in JS, 변경 가능 ex) array
// favor immutable data type always for a few reasons:
// - security 보안성
// - thread safety
// - reduce human mistakes
// 한번 할당하면 값이 절대 바뀌지 않음.


//4. Variable types 자바스크립트 데이터 타입들
// primitive 한가지 아이템, single item: number, string, boolean, null, undefiend, symbol
// object 여러개의 아이템 , box container
// function, first-class function

const count = 17; //integer 정수
const size = 17.1; // decimal number 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number 
// 특별한 숫자의 값- speical numberic values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234456767879879123435456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// 💡 string
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

// symbol, create unique identifiers for objects  고유한 식별자, 동시에 사용가능
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol2 = Symbol.for('id');
const gSymbol1 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// .description 스트링으로 변환

// object, real-life object, data structure
// 박스형태
const ellie = { name: 'ellie', age: 20};
ellie.age = 21; // object 안의 name, age 값은 변경이 가능.


// 5. Dynamic typing: dynamically typed language
// 빠르게 프로토타입을 만들때 유용
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
