// Spread Syntax - Array
let fruits = ['🍉', '🍊', '🍌'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];
console.log(fruits);

// fruits.unshift('🍇');
fruits = ['🍇', ...fruits];
console.log(fruits);

const fruits2 = ['🍈', '🍑', '🍍'];

// fruits.concat
let combined = fruits.concat(fruits2);

// Spread Syntax
combined = [...fruits, '🍒', ...fruits2];
console.log(combined);
