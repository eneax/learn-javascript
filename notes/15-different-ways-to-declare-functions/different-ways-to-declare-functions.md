# Different Ways to Declare Functions

## First class citizen

JavaScript functions are `first class citizen`.
It means that JavaScript functions are values in themselves. This allows us to store them in variables and pass them to other functions as well.

## Ways to make a function

1. `function` keyword

One common way to make a new function is to use the `function` keyword:

```js
function doctorize(firstname) {
  return `Dr. ${firstname}`
}
```

Keep in mind that functions, which are declared with the `function` keyword, are `hoisted`.
That's why, we're able to call a function before it's initialized.

2. Anonymous function

A function without a name is called anonymous function.

```js
function(firstname) {
  return `Dr. ${firstname}`
}
```

3. Function Expression

This is the case when you store a function as a value in a variable.

```js
const doctorize = function(firstname) {
  return `Dr. ${firstname}`
}

doctorize('Enea') // "Dr. Enea"
```

Keep in mind that function expressions are not `hoisted`.

4. Arrow functions

Arrow functions represent a new way to declare functions in JavaScript and have been added with ES6.
They are anonymous functions and are created like function expressions.

A nice feature of arrow functions is that they allow `implicit returns`. This means that we can return a value from a function, without having to write explicitly the `return` keyword.

Example function for converting inches to centimeters:

```js
// Using the function keyword
function inchToCM(inches) {
  const cm = inches * 2.54
  return cm
}

// Using arrow functions
const inchToCM = (inches) => inches * 2.54
```

Example function for adding to numbers:

```js
// Using the function keyword
function add(a, b = 3) {
  const total = a + b
  return total
}

// Using arrow functions
const add = (a, b = 3) => a + b
```

Example of arrow function returning an object

```js
// Using the function keyword
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  }

  return baby
}

// Using arrow functions
const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
})
```

5. IIFE - Immediately Invoked Function Expression

<!-- prettier-ignore -->
```js
(function(age) {
  console.log('Running....')
  return `You are cool and ${age}`
})(100)
```

6. Methods

A method is a function that lives inside of an object.
If we take `console.log()`, we can see that `console` is an object and `log()` is a function that lives inside the `console` object.

Example:

```js
const enea = {
  name: 'Enea',
  // Method
  sayHi: function() {
    return 'Hi there!!!!'
  },
  // Short hand method
  yellHi() {
    return 'HEYYYYYYYY'
  },
  // Arrow function
  wisperHi: () => {
    return 'hey...'
  },
}
```

As we can see from the example above, `enea` is an object and `sayHi()` is a function inside an object, so it's basically a `method`.

7. Callback functions

A callback function is like a regular function, but we use it to run code after something has happened.

The two main cases when we use callback functions are:

- `click callback` -> when somebody clicked something, then run this code

Example:

```html
<button>Click Me!</button>
```

```js
function handleClick() {
  console.log('Clicked!!!')
}

const button = document.querySelector('button')

// Referencing a function defined outside the event listener
button.addEventListener('click', handleClick)

// Declaring an anonymous function inside the event listener
button.addEventListener('click', function() {
  console.log('Nice job!!')
})
```

Notice that we don't run the function immediately on the `.addEventListener`. It runs only is the user clicks the button in our page.

- `timer callback` -> when this amount of time has passed, then run this code

In order to create a `timer callback`, we use a `setTimeout()` function. It takes two things: the function to call after a certain amount of time and the actual duration in milliseconds.

Example:

```js
function sayHi() {
  console.log('Hiiiiii!!!')
}

setTimeout(sayHi, 1000)

// Using an anonymous function
setTimeout(function() {
  console.log('DONE!!!')
}, 2500)

// Using an arrow function
setTimeout(() => {
  console.log('DONE!!!')
}, 2500)
```
