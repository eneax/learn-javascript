const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

/*
  ! Static Methods
  - they live on the 'Array' and the only way to access them is calling `Array.method`
  - you cannot call them like when using `.pop()` or .push()
*/

// ! Static Methods on array: Array.of(), Array.from(), Array.isArray()

/*
  * Array.of();
  - it's used to create an array from the arguments that you pass in
*/
Array.of('me', 'and', 'you'); // ['me', 'and', 'you']
Array.of(...'enea'); // [ 'e', 'n', 'e', 'a' ]

/*
  * Array.from();
  - creates a new array given an iterable
*/

// Make a function that creates a range from x to y with Array.from();

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  return range;
}

const myRange = createRange(3, 7);
console.log(myRange); // [3, 4, 5, 6, 7]

/*
 * Array.isArray();
 */

// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(myRange)); // true

/*
  ! Static Methods on object: Object.entries(), Object.keys, Object.values()
  - these methods will return an array
*/

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(([meat, quantity]) => {
  // const key = entry[0];
  // const value = entry[1];
  // const [key, value] = entry;
  console.log(meat, quantity);
});
