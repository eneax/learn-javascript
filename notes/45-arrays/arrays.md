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

## Mutability and Immutability

- `Mutable methods` modify the original array:

```js
const numbers = [1, 2, 3, 4, 5]
const numbersReversed = numbers.reverse()

console.log(numbersReversed) // [ 5, 4, 3, 2, 1 ]
console.log(numbers) // [ 5, 4, 3, 2, 1 ]
```

If you want to use a mutation method, but you don't want to mutate the original data,
take a copy of the original data first:

```js
const numbers = [1, 2, 3, 4, 5]
const numbersReversed = [...numbers].reverse()

console.log(numbersReversed) // [ 5, 4, 3, 2, 1 ]
console.log(numbers) // [1, 2, 3, 4, 5]
```

- `Immutable methods` don't modify the original array:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const slicedNumbers = numbers.slice(2, 5)

console.log(slicedNumbers) // [3, 4, 5]
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## slice vs splice

`slice` is immutable and it returns a new copy of an array.
`splice` is mutable and it changes the content of an array by removing or replacing an element.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers.splice(3, 2)) // [4, 5]
console.log(numbers) // [1, 2, 3, 6, 7, 8, 9 ]
```

It means start at `3` and remove `2` items (3rd is included).
