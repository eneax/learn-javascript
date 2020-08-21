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

## setInterval

`setInterval` takes a callback function and how often would you like to run it.

```js
setInterval(buzzer, 2000)
```

Here, I want to run the `buzzer` function every `2 seconds`.
One thing to keep in mind with `setInterval` is that it'll run for the first time after `2 seconds`.
There is no way to make it run immediately the first time and then based on the specified interval.

If we want this functionality, we've to code it ourselves:

```js
function setImmediateInterval(funcToRun, ms) {
  // right away call that function
  funcToRun()
  // run a regular interval
  return setInterval(funcToRun, ms)
}

setImmediateInterval(buzzer, 2000)
```

## Clear timer or interval

If you want to clear a timer or an interval, you must save the reference to that timer or interval in a variable:

```js
function destroy() {
  document.body.innerHTML = `<p>DESTROYED</p>`
}

// Save the reference to the timer or interval
const bombTimer = setTimeout(destroy, 5000)

window.addEventListener('click', function() {
  console.log('You clicked! You saved the world')

  // STOP THE TIMER FROM RUNNING
  clearTimeout(bombTimer)
})
```
