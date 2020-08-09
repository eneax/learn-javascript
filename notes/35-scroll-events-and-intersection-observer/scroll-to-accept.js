/*
  Intersection Observer
  - it watches if an element is on or off the page
  - it takes a callback function and an options object as parameters
  - we take the observer and call the `observe` method on it
  - we also need to pass to the `observe` method something to watch for

  The observer will fire on page load and then anytime it matches the conditions that we've specified
*/

const term = document.querySelector('.terms-and-conditions');
const acceptBtn = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    acceptBtn.disabled = false;

    // stop observing the button
    ob.unobserve(term.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, { root: term, threshold: 1 });

ob.observe(term.lastElementChild);
