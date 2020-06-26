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
