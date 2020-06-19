# Scope in JavaScript

Scope answers the question: `Where are my variables and functions available to me?`.
There are different types of scope: global scope, function scope and block scope.

## Global Scope

Anytime you declare a variable in a JavaScript file, it's going to be available anywhere in your application; unless you declare it inside of a `function`, `module`, `if statement`.

For instance, if you declare a variable in a `script.js` file

```js
const name = 'enea'
```

and then try to access that variable on the console, it'll be available for you without any problem.

It works also if you try to access the `name` variable from inside a <script></script> tag in an HTML file.

```html
<html>
  <head></head>
  <body>
    <script>
      console.log(name) // "enea"
    </script>
  </body>
</html>
```

In the browser, the global scope is called the `window`.

One thing to keep in mind when dealing with variables and the window, is that only `var` is attached to the window.

For instance, let's declare the following variables and function in a JavaScript file:

```js
const name = 'enea'
let family = 'xharja'
var age = 28

function sayHi() {
  console.log('Hi!')
}
```

and then try to access them from the browser console:

```js
window.name // undefined
window.family // undefined
window.age // 28
window.sayHi() // "Hi"
```

As we can see, only functions and variables declared with `var` are attached to the window, even though all of them (`const`, `let`, `var`) are declared in the global scope.

Note: never declare variables with a global scope!

## Function Scope

When variables are created inside of a function, those variables are only available inside of that function.

```js
const age = 100

function go() {
  const name = 'enea'
}

console.log(age) // 100
console.log(name) // Uncaught ReferenceError: name is not defined
```

If we want to access the value of `name`:

```js
function go() {
  const name = 'enea'
  console.log(name)
}
```

### Scope lookup

An interesting feature of most programming languages is that, if a variable is not found inside of a function, we go one level higher in the scope and look for the variable in that scope.

```js
const age = 100

function go() {
  const name = 'enea'
  console.log(age) // 100
  console.log(name) // "enea"
}
```

As we can see in the example above, the `console.log(age)` statement cannot find the `age` variable inside the `go()` function and so it goes one level higher, into the `global scope`, to find it.

However, if we create another `age` variable inside the `go()` function, the result will be different:

```js
const age = 100

function go() {
  const age = 200
  const name = 'enea'
  console.log(age) // 200
  console.log(name) // "enea"
}
```

This practice, of using the same variable name (`age`) for two different variables is called `shadow`.
Our `age` variable with value `200` is overshadowing the other `age` variable with value `100`.
Basically, we have no way to access the value `100` from inside the `go()` function.
A better solution to avoid this conflict is to use better names:

```js
const age = 100

function go() {
  const myAge = 200
  const name = 'enea'
  console.log(age) // 100
  console.log(myAge) // 200
  console.log(name) // "enea"
}
```

## Block Scope

A block refers to a set of curly brackets `{}`. A variable that is created inside a block `{}` is not accessible from outside.

Example:

```js
if (1 === 1) {
  var first = 'first'
  const second = 'second'
  let third = 'third'
}

console.log(first) // "first"
console.log(second) // Uncaught ReferenceError: second is not defined
console.log(third) // Uncaught ReferenceError: third is not defined
```

If you need to access the variable from outside the block scope, you can declare it outside the `{}` and reassign it inside the block:

```js
let second

if (1 === 1) {
  second = 'second'
}

console.log(second) // "second"
```

Another example, avoiding the creation of a variable in the global scope:

```js
function isCool(name) {
  let cool

  if (name === 'enea') {
    cool = true
  }

  console.log(cool) // true
  return cool
}
```

Note: variables declared with `var` are function scoped, while variables declared with `const` and `let` are block scoped.

### Scope lookup

Example 1:

```js
const dog = 'rex'

function logDog() {
  console.log(dog)
}

function go() {
  const dog = 'lessie'
  logDog()
}

go() // rex
```

Example 2:

```js
const dog = 'rex'

function logDog(dog) {
  console.log(dog)
}

function go() {
  const dog = 'lessie'
  logDog('max')
}

go() // max
```

Example 3:

```js
const dog = 'rex'

function logDog(dog) {
  console.log(dog)
}

function go() {
  const dog = 'lessie'
  logDog(dog)
}

go() // lessie
```

JavaScript is a `lexically scoped language`!
It means that scope lookup happens where the functions are defined and not where they are run.

Example 4:

```js
function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }

  yell()
}

sayHi('enea') // ENEA

yell() // Uncaught ReferenceError: yell is not defined
```

Just like variables, functions are scoped to the parent function.
That's why, if a function is created inside another function (parent), it'll be available only inside the parent function.
