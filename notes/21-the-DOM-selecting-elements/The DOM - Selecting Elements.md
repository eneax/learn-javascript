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

## querySelectorAll

`querySelectorAll` will give you multiple elements that match the query:

```js
const divs = document.querySelector('div')
console.log(divs)
```

The example above will give us all the `div`'s present on the DOM.
The output logged on the console will be a `NodeList`. It looks a lot like an array, but it's a list of things which does not have all the methods that are available to us with `arrays`.

## More examples

With `querySelectorAll`, we can be even more specific, by selecting all the elements with class `item`:

```js
const items = document.querySelector('.item')
console.log(items)
```

or select only the `div`'s with class `item` and ignore other HTML tags, like `article`:

```js
const itemDivs = document.querySelector('div.item')
console.log(itemDivs)
```

You can do also `parent-child` selector, by selecting only images that are inside `div`'s with class `item`:

```js
const imgInsideItemDivs = document.querySelector('div.item img')
console.log(imgInsideItemDivs)
```

You can use `querySelector` even to look inside of an element that you already have and you want to search inside for another element:

```js
const item2 = document.querySelector('.item2')
const item2Img = item2.querySelector('img')
console.log(item2)
console.log(item2Img)
```

## Extra

To be able to select elements on the DOM, we need to import a JavaScript file first.
We've to be very careful and import the <script></script> tag before the closing body tag (</body>), instead of importing it in the <head></head>.

The reason behind this behavior is that, if we load JavaScript before there is any content on the page, we won't be able to interact with it.
However, if the script is imported before the closing body tag, it ensures that all the HTML has been downloaded and parsed to the page, before the JavaScript file is downloaded.

If you have to import your JavaScript file in the header, you can run an `init()` function that delays the JavaScript code until all the DOM content has been loaded to the page.

```js
function init() {
  const p = document.querySelector('p')
  console.log(p)
}

document.addEventListener('DOMContentLoaded', init)
```
