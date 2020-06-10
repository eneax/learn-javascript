# JavaScript Custom Functions

Functions are `defined` (or created) and then, they are `called`.

## Function definition and execution

In JavaScript, functions are defined using the `function` keyword and the name of the function, followed by a set of brackets `()` and a function block `{}`.

Anything we write inside the function block `{}` is part of the `function body` and belongs to that particular function.
This is called `block scoping`. For instance, a variable, that is defined inside a function's block scope, is available only inside that function and we can't access it outside the function.

```js
// Function definition
function calculateBill() {
  // this is the function body
  console.log('Running Calculate Bill!!!')

  // cost of the meal
  const total = 100 * 1.13

  // Function's output
  return total
}

// Function Call or 'run'
calculateBill()
```

If we try to access the `total` variable outside the function:

```js
console.log(total)
```

we'll get a `Uncaught ReferenceError: total is not defined`.

The only way for us to have to extract the `total` value from the `calculateBill()` function, is to `return` that value (as the function's output).

Once we have access to the returned value of a function (output), we need to capture it and store it into a variable.

```js
const myTotal = calculateBill()
console.log(`Your total is $${myTotal}`) // $112.999999999
```

## Difference between `total` and `myTotal`

`total` is considered as a temporary variable. Since it has been created inside the `calculateBill()` function, `total` is available only inside the function.
Once the `calculateBill()` function is done running, the `total` variable is `garbage collected` (or cleaned up), because is no longer needed.

`myTotal` is the variable we use to store the returned value of the `calculateBill()` function, so that it's not lost.
