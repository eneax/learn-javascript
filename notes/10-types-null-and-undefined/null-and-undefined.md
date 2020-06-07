# null and undefined

There are two ways to express `nothing` in JavaScript: `null` and `undefined`.

## undefined

`undefined` is something that has no value set to it.
For instance, if we declare a variable and don't set any value to it, the result will be `undefined`:

```js
let dog
console.log(dog) // undefined

dog = 'rex'
console.log(dog) // "rex"
```

## null

`null` is the value of `nothing`.
The main difference between `null` and `undefined` is that we need to explicitly set a variable to `null`.

```js
let undefinedVariable // undefined
const nullVariable = null // null
```
