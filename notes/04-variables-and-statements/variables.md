# Variables

There are 3 ways of declaring variables in JS:

1. var
2. let
3. const

<!-- prettier-ignore -->
```js
// Variable declaration statements:
var name = 'enea';
let first = 'enea';
let age = 28;
const cool = true;

// Update values
first = 'ENEA';
age = 17;
cool = false; // Uncaught TypeError: Assignment to constant variable.

console.log(first, age, cool); // function call statement
```

Main differences:

- Once you declare a variable with var and let, you can update it (there is no need to re-declare them)
- If you declare a variable with const, you cannot update it.
- const is very useful for declaring constants (stuff that will never change), like an API key
- var -> function scoped variables
- let and const -> block scoped variables

Which one to use?

I prefer using const by default, since I don't know if I want to use that variable again.

## Statement

A statement is an instruction that developers give to the computer, or browser or interpreter to do something.
For instance, We can give an instruction to create a variable or to modify one.

Any time you want to do something in JS, that is referred to as a `statement`.

This line represents a `statement` -> `var first = "enea";`

## Semicolon

As you can see, it ends with a semicolon.
The semicolon is needed to terminate a line in JavaScript.

## Semicolon and code blocks

However, if we have a code block (things bound by curly brackets):

<!-- prettier-ignore -->
```js
if (age > 18) {
  console.log('You can get a driving licence!');
}
```

then there is no need for a semicolon, since you are not telling the computer to do something.
You are just running some code and the instructions will be contained inside the code block.

## Strict Mode -> 'use strict';

It's a new mode that has been introduced to the browser for backward compatibility reasons.

When JavaScript was first introduced, it was possible to declare a variable without using 'var'.
The browser, then, would add 'var' for you.
These practices, however, could lead to a lot of bugs down the road.
So the strict mode was introduced, as a way to patch bad JS code wrote in the past, without actually breaking those apps.

Strict mode is enforced by default when using JavaScript modules.

Example without `'use strict';`

<!-- prettier-ignore -->
```js
dog = 'Rex' // Uncaught ReferenceError: dog is not defined --> Fix it adding 'var'
```

Example with `'use strict';`

<!-- prettier-ignore -->
```js
let dog;
dog = 'Rex';
```

## Scoping

It answers the question: "Where are my variables available to me?"

- function scoped variables -> only available inside the parent function (i.e. `var`)
- block scoped variables -> only available inside the curly brackets `{}` (i.e. `let` and `const`)

## Naming conventions

- variables should not start with a capital letter, unless they are used for classes
- variables names can start with any alphabetical letter (`a-z`), underscore (`_`)
- variables names can contain underscore (`_`) or dollar sign (`$`)
- if a variable name is made of two words, it can be `camelCase` or `snake_case`
- for classes you can use `UpperCamelCase`
- `kebab-case-variable-names` are not allowed in JavaScript, since dashes (`-`) are not allowed in variable's names
