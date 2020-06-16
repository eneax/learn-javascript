# Debugging Tools

Debugging is made of two parts: using the write tools and knowing how to investigate an issue.

## Console Methods

The most common approach in debugging is using the `console`.

```js
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
]

people.forEach((person, index) => {
  console.log(person.name)
  console.info(person.name)

  if (person.name === 'Wes') {
    console.error('Not a cool name!!') // it displays an error
  }

  if (person.name === 'Scott') {
    console.warn('Not a cool name!!') // it displays a warning
  }
})

console.table(people) // it'll format everything into a nice table
```

Example for `console.count`:

```js
function doctorize(name) {
  console.count(`running doctorize for ${name}`) // checks how many times the 'doctorize' function runs
  return `Dr. ${name}`
}
```

Example for `console.group` (groups together all the `console` commands):

```js
function doALotOfStuff() {
  console.group('Doing some stuff')
  console.log('This is cool')
  console.warn('Not cool')
  console.error('STOP')
  console.groupEnd('Doing some stuff')
}

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`)
  console.log(person.cool)
  console.log(person.country)
  console.groupEnd(`${person.name}`)
})
```

## Callstack (or Stack Trace)

It basically tells you which function was called by what other function.

```js
function doctorize(name) {
  return `Dr. ${name}`
}

function greet(name) {
  doesntExist() // This will cause an error
  return `Hello ${name}`
}

function go() {
  const name = doctorize(greet('Wes'))
  console.log(name)
}
```

If you run the code block above, you'll see an error on the console specifying:

```
Uncaught ReferenceError: doesntExist is not defined
  at greet (...specific line of code in your JS file...)
  at go (...specific line of code in your JS file...)
  at <anonymous>:1:1
```

Here, `at <anonymous>:1:1` means that I run the `go()` function from the console.

## Grabbing of elements

We can select any element on a web page and inspect it either on the `Elements` tab or in the `Console`.

`$0` -> it'll return on the console whatever element you have selected on the `Elements` tab (0 means the last clicked element)

`$1` -> it's the second last element you clicked

`$('')` -> it selects the first element of a certain type, like the first paragraph (i.e. `$('p')`)

`$$('')` -> it selects all the elements of a certain type, like all the paragraph (i.e. `$$('p')`)

## Breakpoint

Using the `debugger` keyword and opening the `Developer Tools`, we can stop JavaScript from running and peer into the code at that very moment.

```js
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
]

people.forEach((person, index) => {
  debugger
  console.log(person.name) // you will not see this unless you remove the 'debugger' (i.e. breakpoint)
})
```
