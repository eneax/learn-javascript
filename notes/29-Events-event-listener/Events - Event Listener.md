# Events - Event Listener

DOM elements, things that are on the page, init events when they are interacted with (i.e. clicked, hovered, dragged etc.)
We use event listener to listen for when these events happen and then react accordingly to them.
You can attach event listeners to the documents and also to the window.

In order to listen for events in elements, we need to select them and we do it by:

```js
const btns = document.querySelector('.btns')
```

Once we've selected the element, we use `addEventListener` to listen for an event.
