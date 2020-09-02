# Reference vs Value

1. When we're comparing values, the `===` checks the type and the value.
2. When we set one string variable to be another, the value is copied from one to another.

With strings:

```js
let name1 = 'wes'
let name2 = 'wes'

console.log(name1 === name2) // true
name1 = 'scott'
console.log(name1 === name2) // false

// copy name2 value into name1
name1 = name2
```

With objects:

```js
const person1 = {
  first: 'wes',
  last: 'bos',
}
const person2 = {
  first: 'wes',
  last: 'bos',
}

console.log(person1 === person2) // false
```

When you're comparing objects, the comparison is done by reference to the object itself and not the values inside of it.
In the example above, `person1` and `person2` are not the same object, even if the values inside of them are the same.

## Copy by reference (not an actual copy)

```js
const person3 = person1
person3.first = 'Larry'
console.log(person3.first) // 'Larry'
console.log(person1.first) // 'Larry'
```

`person3` was never a new copy of `person1`.
`person3` is simply referencing (or pointing to) `person1`.

Another example where we pass an object to a function:

```js
const inventory = {
  apples: 9,
  tomatoes: 2,
}

function doStuff(data) {
  data = 'something else'
  console.log(data)
}

function doStuff2(data) {
  data.tomatoes = 1000
  console.log(data)
}

doStuff2(inventory)
console.log(inventory) // const inventory = { apples: 9, tomatoes: 1000 }
```

This means that if you pass in an object to a function and you modify that object, the external object will also be updated.
