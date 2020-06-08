# Booleans and Equality

A boolean is like a light-switch: it can be on or off.
Booleans are commonly used to perform logic, like if/else statements and they can have only two values: `true` or `false`.

```js
const age = 18
const ofAge = age > 19
console.log(ofAge) // false
```

# Equality

Three types: `=`, `==`, `===`

The first equality is used to update or set a value:

```js
age = 100
```

Double equal `==` vs Triple equal `===`

```js
10 == 10 // true
10 === 10 // true
'10' == 10 // true
'10' === 10 // false
```

Triple equal will check that the values on the left and right of the `===` are the same and check also that the values are of the same type.
