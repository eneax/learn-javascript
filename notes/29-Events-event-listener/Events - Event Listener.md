# Events - Event Listener

DOM elements, things that are on the page, init events when they are interacted with (i.e. clicked, hovered, dragged etc.)
We use event listener to listen for when these events happen and then react accordingly to them.
You can attach event listeners to the documents and also to the window.

In order to listen for events in elements, we need to select them and we do it by:

```js
const btns = document.querySelector('.btns')
```

Once we've selected the element, we use `addEventListener` to listen for an event.

## addEventListener

addEventListener takes two arguments usually:

1. what type of event you want to listen to (i.e. 'click')
2. callback function, in order to do something

Keep in mind that a `callback function` is a regular function that we pass to a method and that will be called at a later time. Instead of us calling the function, we provide a reference to that function and the browser will take care of running that function for us, when it needs to.

```js
btns.addEventListener('click', function() {
  console.log('you clicked meee!')
})
```

In the example above, we pass to the event listener an anonymous function.

However, we can pass also a named function:

```js
function handleClick() {
  console.log('I got clicked!')
}

btns.addEventListener('click', handleClick)
```

Note here that we don't call the function like `handleClick()`.
We just reference it and then, the browser will take care of when it should be executed.
By referencing the `handleClick` function inside the `addEventListener`, we're `binding` that function to the element.
Binding means that we're taking a function and listening for a specific event (i.e. click) against an element.

## removeEventListener

removeEventListener works in a similar way to the addEventListener.
Ee need to specify:

1. the event that we want to stop listening for
2. the function that we don't want to be executed anymore (the function is not bound anymore to the element)

```js
btns.removeEventListener('click', handleClick)
```

For the `removeEventListener` to work, we need to pass it a named function, instead of an anonymous function which cannot be removed.
