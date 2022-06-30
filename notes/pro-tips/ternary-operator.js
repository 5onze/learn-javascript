// Ternary Operator (조건부 삼항 연산자가)
// 조건문 ? 선택문1 : 선택문2

// ❌ Bad Code 💩
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}

// ✅ Good Code ✨
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}

console.log(getResult(6));
console.log(getResult(5));
