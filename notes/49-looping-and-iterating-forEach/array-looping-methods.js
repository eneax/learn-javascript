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

/*
  ! Looping Methods
*/

function logTopping(topping, index, originalArray) {
  const nextTopping = originalArray[index + 1];
  const prevTopping = originalArray[index - 1];

  // log the topping
  console.log(topping);

  // log the prev topping if there is one
  prevTopping ? console.log(prevTopping) : null;

  // log the next topping if there is one
  nextTopping ? console.log(nextTopping) : null;

  // if it's the last item in the array, say good bye
  index === originalArray.length - 1
    ? console.log('Goodbye')
    : console.log('Getting the next Topping');

  // index === originalArray.length && console.log('Goodbye');
  console.log('-------🍕-------');
}

toppings.forEach(logTopping);
