const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

/*
  ! Map
*/

// Example 1
function addArms(face) {
  return `👋 ${face} 👋`;
}

const toys = faces.map(addArms);

console.log('toys', toys);

// Example 2
function bosify(name) {
  return `${name} Bos`;
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
console.log(fullNames);

const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax);

// Example 3
function attachBody(face, body) {
  return `
          ${face}
　　　　　${body.repeat(3)}
　　　　 ${Array(3)
    .fill(body)
    .join(' ')}
　　　👇🏽　 ${body.repeat(2)}　👇🏽
        ${Array(2)
          .fill(body)
          .join('   ')}
        ${Array(2)
          .fill(body)
          .join('   ')}
　　　　　👢　　👢
      `;
}

faces.map(face => attachBody(face, '🍟')).forEach(body => console.log(body));

// Example 4
const cleanPeople = people.map(function(person) {
  // timestamp
  const birthday = new Date(person.birthday).getTime();
  // now timestamp
  const now = Date.now();
  const age = Math.floor((now - birthday) / 31536000000);
  // get their birthday
  // figure out how old they are
  // return their full name and bday in an object
  return {
    age,
    name: `${person.names.first} ${person.names.last}`,
  };
});

console.table(cleanPeople);

const over40 = cleanPeople.filter(person => person.age > 40);
console.log(over40);

if (over40.length) {
  console.log('There are some people over 40');
}
