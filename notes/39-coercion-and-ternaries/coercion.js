/*
  ! Coercion
  - it converts something like a string or number into a different type
  - it converts also something that is not a boolean into a real boolean (true or false)
  - we can perform a coercion with the bang `!` operator
*/

// Example
const firstName = 'enea';
console.log(firstName); // enea
console.log(!firstName); // false
console.log(!!firstName); // true

const lastName = '';
console.log(lastName); // ''
console.log(!lastName); // false
console.log(!!lastName); // true

/*
  ! Ternary
  It's like a short if-statement and it needs:
    1. Condition (something that can be true or false)
    2. what to do if true
    3. what to do if false
*/

// Example 1
const count = 5234234;
// let word;
// if (count === 1) {
//   word = 'item';
// } else {
//   word = 'items';
// }
const word = count === 1 ? 'item' : 'items';
const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);

// Example 2
function showAdminBar() {
  console.log('Showing admin bar');
}

const isAdmin = false;
// isAdmin ? showAdminBar() : null;

// AND AND TRICK!
function check1() {
  console.log('Running check 1');
  return true;
}
function check2() {
  console.log('Running check 2');
  return false;
}
function check3() {
  console.log('Running check 3');
  return true;
}

if (check1() && check2() && check3()) {
  console.log('all checks passed');
} else {
  console.log('Some checks failed');
}
// isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();

// Block list if-statements
if (isAdmin) {
  showAdminBar();
}

if (isAdmin) showAdminBar();
