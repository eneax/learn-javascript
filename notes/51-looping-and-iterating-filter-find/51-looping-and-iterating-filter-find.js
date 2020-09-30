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

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

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

function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  };
}

function findByProp(prop, propWeAreLookingFor) {
  return function isStudent(student) {
    return student[prop] === propWeAreLookingFor;
  };
}

const student = students.find(findByProp('id', '565a'));
const student2 = students.find(findByProp('first_name', 'Micki'));
console.log(student);
console.log(student2);
