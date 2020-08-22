const age = 100;
const wes = {
  age,
  name: 'wes',
  properyToCheck: 'NEVER',
  'cool-dude': true,
  'really cool': false,
  '777': true,
  dog: 'snicker',
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
};

wes.job = 'Web Developer';
wes.age = 50;

console.log(wes.age);
// const properyToCheck = prompt('What do you want to check?');
// console.log(properyToCheck);
// console.log(wes[properyToCheck]);

const nameInput = document.querySelector('[name="first"]');
const name = nameInput ? nameInput.value : '';
console.log(name);

// console.log(delete wes.job);
// wes.age = undefined;
// wes.age = null;
