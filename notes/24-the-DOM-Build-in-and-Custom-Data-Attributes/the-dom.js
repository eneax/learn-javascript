// Build in attributes
const pic = document.querySelector('.nice');

// Setter - add an 'alt' attribute to an image
pic.alt = 'just a random pic';

// Setter - change the width
pic.width = 200;

// Getter
console.log(pic);

// Getter
console.log(pic.naturalWidth);
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

pic.setAttribute('alt', 'JUST a RANDOM pic');
console.log(pic.getAttribute('alt'));

// Custom attributes
const custom = document.querySelector('.custom');
console.log(custom.dataset); // DOMStringMap {name: "wesbos"}

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name}`);
});
