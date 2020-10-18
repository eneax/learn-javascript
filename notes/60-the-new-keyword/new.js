const myDate = new Date('August 11, 2025');
console.dir(myDate);
console.log(myDate.getFullYear());

const names = new Array('wes', 'kait');
const wes = new Object({ name: 'wes' });
const span = document.createElement('span');

function Pizza() {
  console.log('Making a pizza');
}

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);
console.log(pepperoniPizza.constructor);
console.log(pepperoniPizza instanceof Pizza);
