# The DOM - Working with Classes

```html
<body>
  <img class="nice cool" src="https://picsum.photos/600" alt="random img" />
</body>
```

```js
const pic = document.querySelector('.nice')
console.log(pic.classList)

pic.classList.add('open')
pic.classList.remove('cool')
```

The `classList` method will print on the console a `DOMTokenList`, which is like an array containing all the classes of that element.

We can also check if an element contains a certain class:

```js
pic.classList.contains('nice')
```

`classList` gives us some utility functions (or methods) for working with classes.
However, if you just want to check the classes assigned to an element, we can use `className`:

```js
console.log(pic.className) // "nice, cool"
```
