const item = document.querySelector('.item');

// getter
console.log(item.innerHTML);

// setter
const myWidth = 500;
const mySrc = `https://picsum.photos/${myWidth}`;
const myDesc = `random pic`;
const myHTML = `
  <div class='wrapper'>
    <h2>Hey there 🖖</h2>
    <img src=${mySrc} alt=${myDesc} />
  </div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);

console.log(typeof myHTML); // string
console.log(myHTML.classList); // undefined

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

// Append newly created element to the DOM
document.body.appendChild(myFragment);
