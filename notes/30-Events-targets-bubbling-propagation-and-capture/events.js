const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('You clicked a button');
  // const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));

  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);

  // Stop this event from bubbling up
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  { capture: true }
);

// mousemove
const photoOne = document.querySelector('.photoOne');
photoOne.addEventListener('mousemove', function(e) {
  console.count('mousemove', e.currentTarget);
});

// mouseenter
const photoTwo = document.querySelector('.photoTwo');
photoTwo.addEventListener('mouseenter', function(e) {
  console.count('mouseenter', e.currentTarget);
  console.log(e.currentTarget);
  console.log(this); // here, this = e.currentTarget
});
