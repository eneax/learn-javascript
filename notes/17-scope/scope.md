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
