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

### appendChild

Once we've created new HTML elements, the question is: 'How do we add them into the page?'

The `appendChild` method adds a `node` (element or plain text) to the end of the list of children of a specified parent node.

Example:

```js
// Add node to the page
myDiv.appendChild(myImage)
myDiv.appendChild(myParagraph)
document.body.appendChild(myDiv)
```

Here, it's important to append the element to the body at the end.
In fact, every time that you use `appendChild`, we're modifying the DOM and that causes in the browser a reflow.
It means that the browser notices that there is something new on the page (i.e. text change or new added elements) and it needs to repaint what is actually shown on the page.
