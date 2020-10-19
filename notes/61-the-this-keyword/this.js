const myDate = new Date('August 11, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());

const names = new Array('wes', 'kait');
const wes = new Object({ name: 'wes' });
const span = document.createElement('span');

String.prototype.sarcastic = function() {
  // make sarcastic
  return [...this]
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]())
    .join('');
};

function Pizza(toppings = [], customer) {
  console.log('Making a pizza');
  // save the toppings that were passed in, to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}

const pepperoniPizza = new Pizza(['pepperoni'], 'Wes Bos');
const canadianPizza = new Pizza(
  ['pepperoni', 'mushrooms', 'onion'],
  'Kait Bos'
);

// const button1 = document.querySelector('.one');
// const button2 = document.querySelector('.two');

// function tellMeAboutTheButton() {
//   console.log('outside', this);
//   setTimeout(() => {
//     console.log('inside', this);
//     this.textContent = 'You Clicked Me';
//   }, 1000);
// }

// button1.addEventListener('click', tellMeAboutTheButton);
// button2.addEventListener('click', tellMeAboutTheButton);
