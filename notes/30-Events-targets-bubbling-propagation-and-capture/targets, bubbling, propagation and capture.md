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
