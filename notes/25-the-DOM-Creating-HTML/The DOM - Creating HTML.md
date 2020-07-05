# The DOM - Creating HTML

Creating HTML with JavaScript can be done in many different ways.
A common way is using `document.createElement()`

### createElement()

`createElement()` takes a tag name and creates a new element, but it won't put the element on the page.
The element will exist in the JavaScript memory. Then, if we want to add attributes and classes to the element, we've to do it with additional code.

Example:

```js
const myParagraph = document.createElement('p')
myParagraph.textContent = 'I am just a paragraph'
myParagraph.classList.add('special')

console.log(myParagraph) // <p class="special">I am just a paragraph</p>
```
