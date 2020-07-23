# The DOM - Traversing and Removing Nodes

Traversing the DOM is the act of selecting an element from another element.
It allows us to move up and down the DOM from children to parent elements.

Some common properties for elements include (they ignore plain text nodes):

- firstElementChild
- lastElementChild
- previousElementSibling
- nextElementSibling
- parentElement

Some common properties for nodes include (they don't ignore plain text nodes):

- childNodes
- firstChild
- lastChild
- previousSibling
- nextSibling
- parentNode

### Remove content from the DOM

To remove something entirely from the DOM, we use the `.remove()` method.

What happens if we create an element and then remove it?

```js
const p = document.createElement('p')
p.textContent = 'I will be removed'
document.body.appendChild(p)

p.remove()

console.log(p) // <p>I will be removed</p>
```

We don't event see the element on the DOM. It's like it does not exist.
HOWEVER, if we check the console, we see that the element is there.
Once we created the `p` element, it exists on the JS memory, so we can add it back if we want:

```js
document.body.appendChild(p)
```

Not everything is lost!
