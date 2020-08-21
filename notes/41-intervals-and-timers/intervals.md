## setTimeout

`setTimeout` takes a callback function and the number of milliseconds to run the callback after.

```js
function buzzer() {
  console.log('bzzzzz')
}

console.log('Starting')
setTimeout(buzzer, 500)
console.log('finishing')
```

If you decide to run the code above, you'll see on your console:

```js
console.log('Starting')
console.log('finishing')
console.log('bzzzzz')
```

Here, JavaScript will log `Starting`, then set the timer and log `finishing`.
After 500ms, the `bzzzzz` will be logged on the console.

This is the asynchronous nature of JavaScript. Even if we've set a timer, the rest of the JS code will keep running, instead of waiting for the timer to be done.
