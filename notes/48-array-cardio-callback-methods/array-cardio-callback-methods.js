const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

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

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  ! Callback Methods
  - they take a function as an argument
*/

// find the first rating that talks about a burger with find()

// function findBurgRating(singleFeedback) {
//   return singleFeedback.comment.includes('burg');
// }

// const findBurgRating = function (singleFeedback) {
//   return singleFeedback.comment.includes('burg');
// }

// const findBurgRating = (singleFeedback) => singleFeedback.comment.includes('burg');

// const util = {
//   findBurgRating: function (singleFeedback) {
//     return singleFeedback.comment.includes('burg');
//   }
// }
// const findSmoothieRating = (singleFeedback) => singleFeedback.comment.includes('Smoothie');

function findByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}

const burgRating = feedback.find(findByWord('burg'));
const smoothieRating = feedback.find(findByWord('Smoothie'));
console.log(burgRating);
console.log(smoothieRating);

// find all ratings that are above 2 with filter()
function filterByMinRating(minRating) {
  return function(singleFeedback) {
    return singleFeedback.rating > minRating;
  };
}

const goodReviews = feedback.filter(filterByMinRating(4));
console.table(goodReviews);

// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);

// Remove the one star rating however you like!
const legitRatings = feedback.filter(single => single.rating !== 1);
console.table(legitRatings);

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(
  meatValue => meatValue >= 5
);
console.log(isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(
  meatValue => meatValue >= 3
);
console.log(isThereEnoughOfEveryMeat);

// sort the toppings alphabetically with sort()
const numbers = [1, 2, 100, 3, 200, 400, 155];
const numbersSorted = numbers.sort(
  (firstItem, secondItem) => firstItem - secondItem
);
console.log(numbersSorted);
console.log(toppings.sort());

// sort the order totals from most expensive to least with .sort()
function numberSort(a, b) {
  return b - a;
}
console.log(orderTotals.sort(numberSort));

// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(function(a, b) {
  const aPrice = a[1];
  const bPrice = b[1];
  return aPrice - bPrice;
});
console.table(Object.fromEntries(productsSortedByPrice));
