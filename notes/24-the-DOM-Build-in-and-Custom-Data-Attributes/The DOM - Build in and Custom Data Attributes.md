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

## Custom Data Attributes

If you want to create custom attributes, you should not go and created them with `setAttribute`.
The standard way is to use `data attributes`.
Anytime you want to add metadata to an element, like an image, you can add `data-` and `name-of-custom-attribute`:

```html
<img data-name="eneax" src="https://source.unsplash.com/random/300x300" />
```

If you want to access the custom data attributes, you need to use `.dataset`.
It'll return an object with all the property values that we have :

```js
const custom = document.querySelector('.custom')
console.log(custom.dataset) // DOMStringMap {name: "eneax"}
```
