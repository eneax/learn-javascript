# Objects

Objects are a building block of JavaScript as a language, since everything in JavaScript is an object.

We use objects if we want to store a collection of data and if order is not important.
If we'd care about the order of the collection, then better to use and array.

In order to create an object, we use a set of `{}` which will contain `keys` and `properties`.

```js
const person = {
  first: 'enea',
  last: 'xharja',
  age: '28',
}

typeof person // "object"
```

## How to access data inside objects

We can access data inside objects using the `dot` notation.
For instance, if we want to have access to `'enea'`:

```js
person.first // 'enea'
```

## Symbol

`Symbol` is another JavaScript type. It's a way to do unique identifiers
