const wes = document.querySelector('.wes');

console.log(wes); // <p class="wes">I am Wes, I <em>love</em> to bbq and <strong>make websites</strong></p>
console.log(wes.children); // HTMLCollection [em]
console.log(wes.childNodes); // NodeList(3) [text, em, text]

console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// Create and remove element from the DOM
const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p); // <p>I will be removed</p>
