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

## How to copy an object?

1. Object.assign

```js
const person3 = Object.assign({}, person1)
```

2. spread

It takes every single item in an object and copies that into a new object:

```js
const person3 = { ...person1 }
person3.first = 'Larry'

console.log(person3) // 'Larry'
console.log(person1) // 'wes'
```

Note: `Object.assign` and the `spread` operator make a shallow copy of an object. It means that they will go only one level deep. If you need to do a deep level clone of an object, you can use an external library like `Lodash`.

```js
const person3 = _.cloneDeep(person1)
person3.first = 'Larry'

person3.clothing.shirts = 100
```

## Merge objects

The `spread` operator, that we used previously to copy an object, can be used also to merge objects together.

```js
const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
}

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15,
}

const inventory = {
  ...meatInventory,
  ...veggieInventory,
  apples: 2,
}
```

Note: the order in which you spread objects matter. In fact, the latest value will prevail over the newest one.
