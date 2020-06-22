# Closures

A closure is the ability to access a parent level scope from a child scope, even after the parent function has been called (or terminated).

Example 1

```js
function outer() {
  const outerVar = 'Hey, I am the outer Var!'

  function inner() {
    const innerVar = 'Hey, I am the inner Var!'
    console.log(innerVar)
    console.log(outerVar)
  }

  return inner
}

const innerFn = outer()
innerFn()
// 'Hey, I am the outer Var!'
// 'Hey, I am the inner Var!'
```
