const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

/*
  ! Instance Methods
  - these are methods that live on each array
*/

/*
  Display all bun types with " or " - use join()
  join() turns an array into a string
*/
console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split(','));

/*
  - take the last item off toppings with pop()
  - pop() removes the last item of an array and returns it
  - pop() is mutable
*/
const lastItem = toppings.pop();
console.log(lastItem);

// add it back with push()
toppings.push(lastItem);
console.log(toppings);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);

// add it back in with unshift()
toppings.unshift(firstItem);

// Do the last four, but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

// Make a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
toppings[0] = 'Mushy Boi';
console.log(toppings);
console.log(toppingsCopy);

// Make a copy of the toppings array with a spread
const toppingsCopy2 = [...toppings];
console.log(toppingsCopy2);

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(3, 5);
console.log(toppingsCopy);

/*
  find the index of Avocado with indexOf() / lastIndexOf()
  - indexOf() gives you the first instance of Avocado
  - lastIndexOf() gives you the last instance of Avocado
*/
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex);

// Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);

// add it if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}
console.log(toppings);

// flip those toppings around with reverse()
// toppings.reverse();
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed);
