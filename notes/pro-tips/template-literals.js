// Template Literals (Template String)
const person = {
  name: 'Julia',
  score: 4,
};

// β Bad Code π©
console.log(
  'Hello ' + person.name + ', Your current score is: ' + person.score
);

// β Good Code β¨
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// β Good Code β¨
// person μ΄ μ€λ³΅λμ§ μλλ‘ λ°κΏμ€λ€.
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// β Good Code β¨
// μ¬μ¬μ©μ΄ κ°λ₯νλλ‘ ν¨μλ₯Ό λ§λ λ€.
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}
