# Objects

Everything in JS is an object.

Objects allow us to group together properties (or keys) and values and they have many uses: from storing data and functionality to creating your own custom types.

We use objects when the order of the properties does not matter.

You can create an object using the `object literal syntax`:

```js
const person = {
  name: 'enea',
  age: 100,
}

console.log(person)
```

As you can see from the example above, properties are on the left of the colon `:` and values on the right.
The values of an object can be of any type: string, boolean, number, arrays, other objects etc.

```js
const age = 100
const wes = {
  age,
  name: 'wes',
  properyToCheck: 'NEVER',
  'cool-dude': true,
  'really cool': false,
  '777': true,
  dog: 'snicker',
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`
  },
}
```

We can add a new property to an object or modify an existing one:

```js
wes.job = 'Web Developer'
wes.age = 50
wes["dog"]: 'rex',

console.log(wes.age) // 50
console.log(wes.dog) // rex
```

A nice use case for accessing an object with bracket notation is when the property of the object is stored in a variable.

We can freeze an object, so that its properties and values can never change:

```js
const wesFroze = Object.freeze(wes)

wesFroze.age = 20
console.log(wesFroze.age) // 50
```

Note: `Object.freeze()` returns a new object `wesFroze` which is immutable.

In order to remove a property from an object, we use the `delete` key:

```js
delete wes.job
```

### Method

A method is a function that lives inside an object.

```js
const wes = {
  name: 'wes',
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`
  },
}
```

`sayHello` is a method on the `wes` object. In this case, `this` refers to `wes`.
