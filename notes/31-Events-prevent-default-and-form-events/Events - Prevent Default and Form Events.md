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
