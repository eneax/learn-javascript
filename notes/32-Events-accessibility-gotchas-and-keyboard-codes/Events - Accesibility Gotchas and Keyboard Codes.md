# Events - Accessibility Gotchas and Keyboard Codes

Accessibility is essential for developers who want to build high quality websites and web tools, and not exclude people from using this products and services.

Here are some gotchas:

1. buttons vs links

Buttons are to be used for actions that happen inside of an application.
Links are used to change the page.

2. Things that are not keyboard accessible should not have clicks registered on them, unless it's really needed
   In that case, we need to add to that element a `role` or a `tabindex`:

```html
<img
  class="randomPic"
  tabindex="0"
  src="https://picsum.photos/200"
  alt="random pic"
/>
```

```js
const randomPic = document.querySelector('.randomPic')

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the random pic')
  }
}

randomPic.addEventListener('click', handlePhotoClick)
randomPic.addEventListener('keyup', handlePhotoClick)
```
