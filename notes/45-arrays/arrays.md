# Arrays

We use arrays to hold a list of items where the order matters.
Each thing inside an arrays is called an `item` and each position of that item is called `index`.
The number of items inside an array is called `length` and each item inside of an array can be any type.

You can declare a new array using the array literal approach or the `new` keyword:

```js
const cars = []
const countries = new Array()
```

Every item in the array is separated by a comma and there are no keys in arrays. Keys are going to be the indexes.

Example:

```js
const cars = ['Tesla', 'Ford', 'BMW']
```

## Check if something is an array

```js
typeof cars // object --> arrays are special objects
Array.isArray(cars) // true
```

## Access items in arrays

Arrays are zero-based:

```js
const cars = ['Tesla', 'Ford', 'BMW']
console.log(cars[0]) // 'Tesla'
console.log(cars.length) // 3
```

## Access the last item in the array

```js
const cars = ['Tesla', 'Ford', 'BMW']

console.log(cars[cars.length - 1]) // 'BMW'
```
