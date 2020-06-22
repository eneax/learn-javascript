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

Example 2

```js
function createGreeting(greeting = '') {
  const greet = greeting.toUpperCase()

  return function(name) {
    return `${greet} ${name}`
  }
}

const sayHello = createGreeting('hello')
const sayHey = createGreeting('hey')

console.log(sayHello('enea')) // HELLO enea
console.log(sayHey('enea')) // HEY enea
```

Example 3

```js
function createGame(gameName = '') {
  let score = 0

  return function win() {
    score++
    return `Your ${gameName} score is ${score}`
  }
}

const hockeyGame = createGame('hockey')
const footballGame = createGame('football')

hockeyGame() // "Your hockey score is 1"
hockeyGame() // "Your hockey score is 2"
hockeyGame() // "Your hockey score is 3"
footballGame() // "Your football score is 1"
footballGame() // "Your football score is 2"
footballGame() // "Your football score is 3"
```
