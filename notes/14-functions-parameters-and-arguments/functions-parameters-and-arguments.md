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
