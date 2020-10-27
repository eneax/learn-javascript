function makePizza(toppings = []) {
  return new Promise(function(resolve, reject) {
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for the pizza to cook:
    setTimeout(function() {
      // when you are ready, you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
    // if something went wrong, we can reject this promise;
  });
}

console.log('First');
makePizza(['pepperoni'])
  .then(function(pizza) {
    console.log(pizza);
    return makePizza(['ham', 'cheese']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza(['hot peppers', 'onion', 'feta']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza(['pineapple']);
  })
  .then(function(pizza) {
    console.log(pizza);
    return makePizza([
      'one',
      'two',
      'three',
      'four',
      'one',
      'two',
      'three',
      'four',
      'one',
      'two',
      'three',
      'four',
    ]);
  })
  .then(pizza => {
    console.log('All done! here is your last pizza');
    console.log(pizza);
  });

console.log('Right after');

// Run them Concurrently
const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
const pizzaPromise2 = makePizza([
  'one',
  'two',
  'three',
  'four',
  'one',
  'two',
  'three',
  'four',
  'one',
  'two',
  'three',
  'four',
]);
const pizzaPromise3 = makePizza(['ham', 'cheese']);

const dinnerPromise = Promise.all([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);

dinnerPromise.then(function([hottie, garbagePail, hamAndCheese]) {
  console.log(hottie, garbagePail, hamAndCheese);
});

const firstPizzaPromise = Promise.race([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);

firstPizzaPromise.then(pizza => {
  console.log('You must be hungry, here is the first one ready');
  console.log(pizza);
});