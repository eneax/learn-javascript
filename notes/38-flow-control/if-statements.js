/*
  ! if statements
  - it checks if a condition will evaluate to `true` or `false`
  - if the first condition is true, the other conditions will not even run
  - it takes also values that are truthy and falsy
*/

// Example 1
const age = 100;
if (age > 70) {
  console.log('In your seventies');
} else if (age > 60) {
  console.log('In your sixties');
} else if (age > 50) {
  console.log('In your 50s');
} else {
  console.log('Nothing was true');
}

// Example 2
function slugify(sentence, lowercase) {
  const slug = sentence.replace(/\s/g, '-');

  if (lowercase) {
    return slug.toLowerCase();
  }

  return slug;
}

console.log(slugify('I am very cool')); // I-am-very-cool
console.log(slugify('I am very cool', true)); // i-am-very-cool

// Example 3
const name = 'wes';
const last = 'bos';

if (name === 'scott' || (name === 'wes' && last == 'bos')) {
  console.log('Cool Name!');
}

// Example 4
const isAwesomeName = 'awesome'.includes(name);

if (isAwesomeName) {
  console.log('SUPER COOL AWESOME NAME');
}

function nameIsAwesome(name) {
  return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
  console.log('COOL NAME WES');
}

// Example 5 - truthy and falsy
const dog = '';

if (dog) {
  console.log('you have a dog');
} else {
  console.log("you don't have a dog"); // the if statement converts the empty string into a boolean of value `true`
}

const score = {}; // --> There is a score already
// const score = 1; --> There is a score already
// const score = -10; --> There is a score already
// const score = 0; --> No score yet
// let score; --> undefined --> No score yet
// const score = 'wes' * 10; --> NaN --> No score yet

if (score) {
  console.log('There is a score already');
} else {
  console.log('No score yet');
}

const values = [
  [],
  {},
  -10,
  1,
  0,
  '',
  'full string',
  ' ',
  undefined,
  NaN,
  null,
  '0️⃣',
  '💩',
];

console.group('truthy or falsy values');
values.forEach(value => {
  if (value) {
    console.log(value, 'is truthy');
  } else {
    console.log(value, 'is falsy');
  }
});
console.groupEnd();
