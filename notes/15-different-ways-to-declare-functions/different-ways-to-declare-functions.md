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
