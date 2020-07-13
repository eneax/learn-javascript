# The DOM - HTML from Strings and XSS

We've seen so far how to create HTML with JavaScript using `document.createElement()` and then `appendChild` to add a `node` (element or plain text) to the end of the list of children of a specified parent node.

Here, we'll examine how to add HTML using template strings.

Example:

```html
<article class="item">
  <h2>I'm an article</h2>
  <p class="pizza">This is how many pizzas I ate! 🍕</p>
</article>
```

```js
// select item on the page
const item = document.querySelector('.item')

// getter --> ogs the string with all the HTML contained inside the item
console.log(item.innerHTML)

// setter --> the inside of the div is updated with the new string
const myWidth = 500
const mySrc = `https://picsum.photos/${myWidth}`
const myDesc = `random pic`
const myHTML = `
  <div class='wrapper'>
    <h2>Hey there 🖖</h2>
    <img src=${mySrc} alt=${myDesc} />
  </div>
`

item.innerHTML = myHTML
console.log(item.innerHTML)
```
