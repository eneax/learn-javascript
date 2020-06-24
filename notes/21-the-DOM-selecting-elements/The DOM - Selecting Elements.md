# The DOM - Selecting Elements

Before we go and work with elements on the page, we actually have to select them first.
Once we've selected an element, we can listen for clicks, change the content etc.

There are many ways to select content in the DOM, but we're going to focus on the two main ways to do it: `querySelector` and `querySelectorAll`.

Other selectors include: `getElementById`, `getElementsByClassName`, `getElementsByName`, `getElementsByTagName` and `getElementsByTagNameNS`.

## querySelector

With `querySelector` we can select the first matching element on the page:

```js
const p = document.querySelector('p')
console.log(p)
```

The example above will select and log on the console the first paragraph of the page.
