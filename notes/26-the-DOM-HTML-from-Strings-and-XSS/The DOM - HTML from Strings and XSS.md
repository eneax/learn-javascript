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

## Downsides of this approach

1. Not an element

The first downside is that `myHTML`, from the example above, is not an `element`.

Example:

```js
console.log(typeof myHTML) // string
```

Since it's not an `element`, we don't have access to methods like `classList`:

```js
console.log(myHTML.classList) // undefined
```

In order to become an element, we've to dump it first inside an `innerHTML`.

### How can we fix the 'Not an element' downside?

First, we need to turn a string into a DOM element:

```js
const myFragment = document.createRange().createContextualFragment(myHTML)
console.log(myFragment) // #document-fragment
```

A `Range` is a collection of elements or part of HTML that we can work with.

Then, we append the newly created element to the DOM:

```js
document.body.appendChild(myFragment)
```

2. Security issues

One potential pitfall is that somebody can add HTML inside a string that we did not plan to have.

For instance, we can take the `myDesc` variable from above:

```js
const myDesc = `random pic <h1>NOT COOL</h1><style>* { display: none; }</style>`
```

The situation can get worse when we talk about cross-site scripting (XSS).
In this case, someone can add also `script` tags inside the HTML string and run malicious code from there (i.e. drain bank accounts).

```js
const myDesc = `random pic <img onload="alert('HACKED')" src='https://picsum.photos/50' />`
```

Basically, the only JS code that should run on your page is JavaScript that has been authored by you or by approved parties (like scripts needed for the website to function)!
