# Hoisting

Hoisting allows you to access functions and variables before they've been created.

## Function hoisting

Even if we call a function, before we declare it, the JavaScript compiler will take all the function declarations and make them available to us by move them to the top of the file.
This practice works only with 'regular' functions and not with function expressions or arrow functions.

Example:

```js
sayHi()
// "Hi"
// 11

function sayHi() {
  console.log('Hi')
  console.log(add(5, 6))
}

function add(a, b) {
  return a + b
}
```

I personally prefer to declare a function first and then call it, or simply use modules.
However, there are other developers who prefer to structure their JavaScript files into two areas:

- What does the file do? -> here is where you put all your function calls
- How does this file do it? -> here is where all the functions are declared
