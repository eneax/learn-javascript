# Events - targets, bubbling, propagation and capture

The `event object` is a JavaScript object that is filled with all the information related to an event.

What if I need to know which button has been clicked, so that I can fire a specific function?

```js
const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
  const button = event.target
  console.log(button.textContent)
  console.log(event.target.dataset.price)
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})
```

### event.target vs event.currentTarget

The two target appear to be similar, but the difference emerges when we've to deal with nested elements.
`event.target` is the thing that actually gets clicked, while `event.currentTarget` is the thing that fired the event listener.

### Propagation

Propagation means clicking on more than one thing at the same time.
For instance, I can click on a <strong> tag inside a <button></button> and the event will propagate (or bubble up) from the <strong> tag, to the <button></button>, to the <body>, to the <html> tag, to the `window`, to the browser and to the actual OS.

We can stop this behavior, by using the `.stopPropagation()` method on the `event`:

```js
const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
  const button = event.target

  console.log(event.target)
  console.log(event.currentTarget)
  console.log(event.target === event.currentTarget)

  // Stop this event from bubbling up
  event.stopPropagation()
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick)
})

window.addEventListener('click', function() {
  console.log('You clicked the window')
})
```

Now, if I click on the button, the window event will not fire.

### capture

`capture` is the opposite of propagation and instead of bubbling up, the flow goes from the window to the element that we actually click:

```js
window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window')
    console.log(event.target)
  },
  { capture: true }
)
```

### mousemove

```js
const photoOne = document.querySelector('.photoOne')
photoOne.addEventListener('mousemove', function(e) {
  console.count('mousemove', e.currentTarget)
})
```

### mouseenter

```js
const photoTwo = document.querySelector('.photoTwo')
photoTwo.addEventListener('mouseenter', function(e) {
  console.count('mouseenter', e.currentTarget)
  console.log(e.currentTarget)
})
```

### this

`this` is a reserved keyword in JavaScript.
It's going to be equal to whatever is to the left of the `dot`.

```js
const photoTwo = document.querySelector('.photoTwo')
photoTwo.addEventListener('mouseenter', function(e) {
  console.count('mouseenter', e.currentTarget)
  console.log(e.currentTarget)
  console.log(this)
})
```

In the example above, to the left of the `dot` is `photoTwo`, so in this case `this` will be equal to `e.currentTarget`.
