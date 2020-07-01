# The DOM - Build in and Custom Data Attributes

An `attribute` is everything that is provided to an element as additional info.
It includes: `class`, `src`, `alt` etc.

## Build in attributes

```js
const pic = document.querySelector('.nice')

// Setter - add an 'alt' attribute to an image
pic.alt = 'just a random pic'

// Setter - change the width
pic.width = 200

// Getter
console.log(pic)

// Getter
console.log(pic.naturalWidth)
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth)
})

pic.setAttribute('alt', 'JUST a RANDOM pic')
console.log(pic.getAttribute('alt'))
```
