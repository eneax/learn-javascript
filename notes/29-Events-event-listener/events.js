const btns = document.querySelector('.btns');
const coolBtn = document.querySelector('.cool');

// using an anonymous function
// btns.addEventListener('click', function() {
//   console.log('you clicked meee!');
// });

// using a named function
function handleClick() {
  console.log('I got clicked!');
}

btns.addEventListener('click', handleClick);
// coolBtn.addEventListener('click', handleClick);

// remove listener
btns.removeEventListener('click', handleClick);

// using arrow function
const hooray = () => console.log('Hooorrrayyyyy');
coolBtn.addEventListener('click', hooray);

// Listening for events on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Buying Item');
}

buyButtons.forEach(buyButton => buyButton.addEventListener('click', buyItem));
