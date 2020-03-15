const age = 27;
const name = 'enea';

console.log(`My name is ${name} and I'm ${age} years old`);

/*
* typeOf
The keyword `typeOf` allows you to check what is the 'type of' the value you have to deal with.

```
typeOf age // "number"
typeOf name // "string"
```
*/

/*
 * Integer vs Floats

- an integer is a whole number, like 27
- a float is a number with decimals, like 37.5
 */

/*
  * JavaScript basic arithmetic operators
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
*/

const a = 20;
const b = 10;

console.log('a =', a);
console.log('b =', b);
console.log('a + b =', a + b); // 30
console.log('a - b =', a - b); // 10
console.log('a * b =', a * b); // 200
console.log('a / b =', a / b); // 2

/*
 * Be aware of mixing types

If you have a number 1 and trying to do math with a string type, let's say "1";
then things get complicated.
*/

const numberType = 1;
const stringType = '1';

console.log(numberType + stringType); // "11" string
