//operator 연산자
// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나누고 나머지 값
console.log(2 ** 3); // exponentiation 2의3승


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; // 3
// counter = counter + 1; // 4
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);


// 4. Assignment operators 할당
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operaters 비교
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) 처음에 true가 나오면 연산을 끝냄
console.log(`or: ${value1 || value2 || check()}`); // 복잡할수록 뒤에 놓아야함.


// && (and) 모두 true 여야 true 리턴. 처음에 false이면 뒤에 실행안함.
console.log(`and: ${value1 && value2 && check()}`);

// 간편하게 null 체크할때 많이 쓰임
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}


// ! (not) 값을 반대로 바꿈
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true 숫자이기 때문
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true 타입이 서로 다르기 때문
// 검사할때는 strict equalty를 사용하는게 좋음.

// object equality by reference 각각 다른 래퍼런스가 할당되어 있다.
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true


// equality - puzzler
console.log(0 == false);  // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // true
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement (else를 반복하기보다는 switch를 사용)
// use for multiple if checks 
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops 반복문
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// {} 먼저 블럭을 실행한 다음에 조건을 검사한다.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { //let 지역변수 선언
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue) 짝수

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
    
}