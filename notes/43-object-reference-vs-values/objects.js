let name1 = 'wes';
let name2 = 'wes';

console.log(name1 === name2); // true
name1 = 'scott';
console.log(name1 === name2); // false

// update name1 to be what is name2
name1 = name2;
console.log(name1 === name2); // true

name2 = name1;
name2 = 'westopher';

const person1 = {
  first: 'wes',
  last: 'bos',
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
const person2 = {
  first: 'wes',
  last: 'bos',
};

// const person3 = person1;
// person3.first = 'Larry';
// console.log(person3.first);
// console.log(person1.first);
// const person3 = { ...person1 };
const person3 = _.cloneDeep(person1);
person3.first = 'Larry';

person3.clothing.shirts = 100;

const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15,
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
};

function doStuff(data) {
  data = 'something else';
  console.log(data);
}

function doStuff2(data) {
  data.tomatoes = 10000000000;
  console.log(data);
}

doStuff2(inventory);
