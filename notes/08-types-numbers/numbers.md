# Numbers

```js
const age = 27
const name = 'enea'

console.log(`My name is ${name} and I'm ${age} years old`)
```

## typeof

The keyword `typeof` allows you to check what is the 'type of' the value you have to deal with.

```js
typeof age // "number"
typeof name // "string"
```

## Integer vs Floats

- an integer is a whole number, like 27
- a float is a number with decimals, like 37.5

## JavaScript basic arithmetic operators

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)

```js
const a = 20
const b = 10

console.log('a =', a)
console.log('b =', b)
console.log('a + b =', a + b) // 30
console.log('a - b =', a - b) // 10
console.log('a * b =', a * b) // 200
console.log('a / b =', a / b) // 2
```

Note: Be aware of mixing types

If you have a number 1 and trying to do math with a string type, let's say "1";
then things get complicated.

```js
const numberType = 1
const stringType = '1'

console.log(numberType + stringType) // "11" string
```

## The 'plus' sign

The 'plus' sign in JS can be used with:

- numbers to add
- strings to concatenate
- both numbers and string and this is where it's easy to make mistakes

## The remainder operator %

In programming, it's common to check if a number is even (divisible by 2) or odd (not divisible by 2).

The remainder operator `%` gives the remainder of the division of two numbers:

```js
17 % 2 = 1 // 17 ==> Odd
10 % 2 = 0 // 10 ==> Even
```

We can break this down by:

```js
Math.floor(17 / 2) = 8
8 * 2 = 16
17 - 16 = 1 // Remainder
```

## Infinity and -Infinity

`Infinity` and `-Infinity` are both true numbers in JavaScript.
They just represent a value higher than a computer can possibly calculate.

```js
10 ** 2 // 100
1000 ** 20 // 1e+60
1000 ** 200 // Infinity

typeof Infinity // "number"
typeof -Infinity // "number"
```

## NaN

`NaN` means "Not a Number". You can get this value if you try to do math with values that are not numbers.

```js
17 / 'dog' // NaN

typeof NaN // "number"
```
