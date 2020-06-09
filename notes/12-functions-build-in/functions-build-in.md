# JavaScript build in Functions

We use functions to group together sets of instructions (or `statements`).
Functions can take in data (input), as `arguments`, perform some action and finally return a computed value, as output.

Note: not all the functions are made to return a value; sometimes, functions just perform some action, without returning anything. In that case, the returned value will be `undefined`. For instance:

```js
console.log('Hi')
// 'Hi' --> value printed on the console
// undefined --> value returned
```

JavaScript has several functions that are already build-in. An example of build in function is `console.log`.

Examples of other **build-in functions** in JavaScript:

- Math.max() -> takes two numbers and returns the maximum value

```js
Math.max(10, 12) // 12
```

- Math.floor() -> takes a number as argument and returns the rounded value

```js
Math.floor(2.444) // 2
```

- parseFloat -> takes a string and returns a float number

```js
parseFloat('10.4987') // 10.4987 (as number)
```

- parseInt -> takes a string and returns an integer (whole number)

```js
parseInt('10.4987') // 10
```

- Date.now() -> takes no argument and returns the number of milliseconds since 01.01.1970

```js
Date.now()
```
