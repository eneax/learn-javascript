# The DOM - Element Properties and Methods

Once we select elements on the page, we can do some interesting things with them.

Example:

```html
<div>
  <h2>I'm a heading</h2>
  <p>Hi I'm a item</p>
</div>
```

```js
const heading = document.querySelector('h2')

console.dir(heading) // h2 (as an object containing a lot of properties)
```

We can use `console.dir` to see the object properties of the selected element.
These properties can be used as `getters`, in order to get data out from the selected element, or as `setters`, in case we want to modify the existing data.

Example of a `getter`:

```js
console.dir(heading.textContent) // I'm a heading
```

Example of a `setter`:

```js
console.log(heading.textContent) // I'm a heading
heading.textContent = "I'm a subtitle"
console.log(heading.textContent) // I'm a subtitle
console.log(heading.innerText) // I'm a subtitle
```

### Difference between textContent and innerText

1. `textContent` gets the content of all elements, including `<script>`, and `<style>` elements; while `innerText` only shows human-readable elements

Example:

```html
<h2>
  I'm a heading
  <style>
    h2 {
      color: red;
    }
  </style>
</h2>
```

```js
const heading = document.querySelector('h2')

console.log(heading.textContent)
/*
  I'm a heading

  h2 {
    color: red;
  }

*/

console.log(heading.innerText) // I'm a heading
```

2. `textContent` returns every element in the node; while `innerText` is aware of styling and won't return the text of hidden elements

Example:

```html
<body>
  <h2>
    I'm a heading
    <span>I'm hidden</span>
  </h2>

  <style>
    h2 span {
      display: none;
    }
  </style>
</body>
```

```js
const heading = document.querySelector('h2')

console.log(heading.textContent)
/*

  I'm a heading
  I'm hidden

*/

console.log(heading.innerText) // I'm a heading
```

### innerHTML

Example:

```html
<body>
  <h2>
    I'm a heading
    <span>I'm hidden</span>
  </h2>
</body>
```

```js
const heading = document.querySelector('h2')

console.log(heading)
/*
I'm a heading
<span>I'm hidden</span>
*/
```

### outerHTML

Example:

```html
<body>
  <h2>
    I'm a heading
    <span>I'm hidden</span>
  </h2>
</body>
```

```js
const heading = document.querySelector('h2')

console.log(heading)
/*
<h2>
  I'm a heading
  <span>I'm hidden</span>
</h2>
*/
```

### insertAdjacentText

The `insertAdjacentText` method takes two parameters: position and text that you want to pass in.

Example:

```html
<body>
  <article>
    <h2>Just a heading</h2>
    <p class="pizza">I really really love pizza</p>
  </article>
</body>
```

```js
const pizzaList = document.querySelector('.pizza')
console.log(pizzaList.textContent) // I really really love pizza

pizzaList.insertAdjacentText('beforeend', '🍕')
console.log(pizzaList.textContent) // I really really love pizza 🍕

pizzaList.insertAdjacentText('beforebegin', '🍕')
console.log(pizzaList.textContent)
/*
🍕
I really really love pizza
*/

pizzaList.insertAdjacentText('afterbegin', '🍕')
console.log(pizzaList.textContent) // 🍕 I really really love pizza
```

Note: Everything is a `node`, but it can become `element` if it gets wrapped into a tag.
