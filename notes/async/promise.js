'use strict';

// Promise is a JavaScript object for asynchronous operation.
// promise 는 자바스크립트 안에 내장되어 있는 오브젝트이다.
// 비동기적인 것을 수행할때 콜백 함수 대신에 유용하게 쓰이는 오브젝트이다.

// state: pending  -> fulfilled  or rejected
// 상태: (오퍼레이션 수행 중일때) -> (성공적으로 오퍼레이션을 끝내면) or (파일을 찾을수 없거나 네트워크에 문제가 생길때)
// Producer vs Consumer (원하는 데이터를 만드는 vs 원하는 데이터를 소비하는)

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 새로운 Promise가 만들어 질때는, executor 라는 콜백 함수가 자동적으로 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // 시간이 걸리는 것은 promise를 만들어서 비동기적으로 처리하는 것이 좋다.
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공했을때
    //reject(new Error('no network')); // 실패했을때
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // (성공, 실패와 상관없이)어떤 기능을 마지막으로 수행하고 싶을때 사용
    console.log('finally');
  });

// 3. Promise chaining 체이닝
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) //2
  .then((num) => num * 3) //6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); //5
    });
  })
  .then((num) => console.log(num)); //5

// 4. Error Handling 오류를 잘 처리하자
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    // 에러 핸들링
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log); // 에러 핸들링
