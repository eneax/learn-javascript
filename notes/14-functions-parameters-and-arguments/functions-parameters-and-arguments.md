# Functions - Parameters and Arguments

When we create a custom function, we want it to be not very specific to a particular case.
It's better for the function to be more generic so we can reuse it in different occasions.
This also helps us to not repeat our code over and over in our codebase.

For instance, let's consider the `calculateBill()` function below:

```js
function calculateBill() {
  console.log('Running Calculate Bill!!!')
  const total = 100 * 1.13
  return total
}

calculateBill()
```

As we can see, it's very specific and takes into consideration only bills of `100` and tax of `1.13`.
We need this function to be more flexible and this is why we have to consider `parameters` and `arguments`.

## Parameters and Arguments

You can think of `parameters` as placeholder (i.e. `billAmount` and `taxRate`):

```js
function calculateBill(billAmount, taxRate) {
  console.log('Running Calculate Bill!!!')

  const total = billAmount * (1 + taxRate)
  return total
}

const myTotal = calculateBill(100, 0.13)
const myTotal2 = calculateBill(200, 0.13)
console.log(myTotal, myTotal2)
```

When you run (or call or invoke) your function, you pass in the data that will take the place of the parameters.
In the example above, `100` replaces `billAmount` and `0.13` takes the place of `taxRate`.
The values `100` and `0.13` are called `arguments` and they represent the actual values that we pass in a function.

## Passing variables to a function

In the previous example we saw how we can pass numbers (`100` and `0.13`) into a function.
However, it's a common approach to pass variables inside functions, instead of just numbers.

Example:

```js
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate)
  console.log('Running Calculate Bill!!!')

  const total = billAmount * (1 + taxRate)
  return total
}

const wesTotal = 500
const wesTaxRate = 0.3

const myTotal = calculateBill(wesTotal, wesTaxRate)
console.log(myTotal)
```

When you run a function in JavaScript, it takes what you passed in, no matter if it's a `number`, a `string` or a `reference` to a variable which internally holds the value:

```js
const myTotal = calculateBill(wesTotal, wesTaxRate)
```

Then, when values get passed into a function, they get renamed into what you used as function parameters:

```js
function calculateBill(billAmount, taxRate) {}
```

#### More Examples

```js
function sayHiTo(firstName) {
  return `Hello ${firstName}`
}

sayHiTo('Enea') // "Hello Enea"
sayHiTo() // "Hello undefined" --> because we have a `firstName` variable which was not set to any value
```

## Passing an expression as an argument

```js
function calculateBill(billAmount, taxRate) {
  console.log('Running Calculate Bill!!!')

  const total = billAmount * (1 + taxRate)
  return total
}

const wesBill = 50
const kaitBill = 100

const myTotal = calculateBill(wes + kait, 0.2)
console.log(myTotal)
```
