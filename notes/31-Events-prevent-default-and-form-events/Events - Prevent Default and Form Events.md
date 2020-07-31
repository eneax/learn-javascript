# Events - Prevent Default and Form Events

There are a couple of elements in HTML that have default functionality when they are clicked or used.

### Prevent Default on links

For instance, if you use an <a> tag and you click on it, you'll be redirected to the specified link:

```js
<a class="enea" href="https://eneaxharja.com">
  enea
</a>
```

Here, clicking on `enea` link will take you to my website `eneaxharja.com`.

However, we can prevent this default behavior by using `event.preventDefault()`:

```js
const enea = document.querySelector('.enea')
enea.addEventListener('click', function(e) {
  e.preventDefault()
})
```

Now, if you try to click on the link, nothing will happen!

### Prevent Default on forms

Another common scenario, where we might want to prevent a default behavior, is in forms:

```js
const signupForm = document.querySelector('[name="signup"]')
signupForm.addEventListener('submit', function(event) {
  const agreed = event.currentTarget.agree.checked

  if (!agreed) {
    alert('You must agree to the terms and conditions!!!')
    event.preventDefault()
  }
})
```

Here, we're preventing a user from submitting a form when the `agree` checkbox has not been clicked.

### Other events on forms

```js
function logEvent(event) {
  console.log(event.type)
  console.log(event.currentTarget.value)
}

const signupForm = document.querySelector('[name="signup"]')
signupForm.name.addEventListener('keyup', logEvent)
signupForm.name.addEventListener('keydown', logEvent)
signupForm.name.addEventListener('focus', logEvent)
signupForm.name.addEventListener('blur', logEvent)
```
