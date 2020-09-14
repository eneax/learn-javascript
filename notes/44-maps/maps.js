const person1 = {
  name: 'wes',
  age: 200,
};

/*
  ! Maps 
  - use maps if you need to maintain the order of the items
  - the order is guarantied (not like objects)
  - you cannot put functions inside of maps
  - JSON does not handle maps
  - they are a great way to build a dictionary
*/
const myMap = new Map();

/*
  ! .set() 
  - takes a key and a value
  - key can be of any type
*/
myMap.set('name', 'wes');
myMap.set(100, 'This is a number');
myMap.set(person1, 'Really Cool');
console.log(myMap);

/*
  ! .get() 
*/
console.log(myMap.get(person1)); // 'Really Cool'

// Example 2
const score = 200;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');
console.log(`you win a ${prizes.get(score)}`);

// select that ul
const ul = document.querySelector('.prizes');
for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}

// Convert map to object, even if it's not going to be a perfect conversion
Object.fromEntries(myMap);
