// Spread Syntax - Object (전개 구문)
// 객체 혹은 배열들을 펼칠 수 있게 해 준다.

const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// ❌ Bad Code 💩
item['price'] = detail.price;

// ❌ Bad Code 💩
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;
console.log(newObject);

// ❌ Bad Code 💩
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};
console.log(newObject);

// ✅ Good Code ✨ Object.assign
const shirt0 = Object.assign(item, detail);
console.log(shirt0);

// ✅ Better! Code ✨ Spread Syntax
const shirt = { ...item, ...detail, price: 30 };
console.log(shirt);
