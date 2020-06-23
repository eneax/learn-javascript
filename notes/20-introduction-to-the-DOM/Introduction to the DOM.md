# Introduction to the DOM

The document object model (DOM) represents all the elements that we see in a web page and they are organized in a `tree` structure.

## window

The global scope in the browser is called `window`.

You can think of the `window` as everything about the currently opened window, including the `browser bar`, `tabs`, `scroll bar`.

It's the place where all our global variables (i.e. `innerWidth`) are stored, as well as useful properties (i.e. `location`).

## document

The `document` is responsible for everything stored inside the <html></html> tag.
It's concerned only about the DOM and not about `browser bar`, `tabs`, `scroll bar` etc.

## navigator

The `navigator` is like a higher level thing than the window.
It gives you information about not only the browser, but the device itself (i.e. `audio`, `web cam`, `battery level`, `GPS` etc.).
