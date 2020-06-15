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
