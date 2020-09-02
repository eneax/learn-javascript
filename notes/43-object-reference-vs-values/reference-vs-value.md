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
