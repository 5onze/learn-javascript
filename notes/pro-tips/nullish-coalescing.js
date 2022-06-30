// Nullish coalescing operator (nullish 병합 연산자)
// leftExpr (null, undefined ) ?? rightExpr

// ❌ Bad Code 💩
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display 😜';
  }
  console.log(message);
}

// ✅ Good Code ✨
function printMessage(text) {
  const message = text ?? 'Nothing to display 😜';
  console.log(message);
}

// 🚨 Default parameter is only for undefined (null은 안됨)
function printMessage(text = 'Nothing to display 😜') {
  console.log(text);
}

// ?? 와 OR 연산자 || 의 차이
// 🚨 Logical OR operator ||
// leftExpr (falsy) || rightExpr
// || 는 falsy인 경우 => null, undefined, 0, -0, NaN, false, '', "", ``
// ?? 는 null, undefined 인 경우에만 실행된다.
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message);
}

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from 💻';
}

printMessage('Hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
printMessage('');
