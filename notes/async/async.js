// async & await
// clear style of using promise :)

// 1. async
// async를 키워드로 쓰면, 자동적으로 promise로 바꿔준다
/*
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network reqeust in 10 secs...
    resolve('ellie');
  });
}
*/
async function fetchUser() {
  // do network reqeust in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// await 키워드는 async가 붙은 함수 안에서만 쓸수있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

/* promise로 나타냈을 때
function getBanana() {
    return delay(3000)
    .then(() => '🍌');
  }
*/

/* Promise를 중첩적으로 체이닝하게 되면 콜백지옥과 비슷한 문제점이 발생한다.
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
*/
// 병렬처리할때는 이렇게 하지않음.
// 밑의 useful API 참고.
async function pickFruits() {
  const applePromise = getApple(); // 병렬처리
  const bananaPromise = getBanana();
  const apple = await applePromise; // 동기화
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// Promise.all
// Promise 배열을 전달하게 되면, 모든 Promise들이 병렬적으로 다 받을때까지 모아주는 api
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// Promise.race
// 배열에 전달된 Promise 중에서 가장 먼저 값을 리턴하는 것만 전달이 되어진다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
