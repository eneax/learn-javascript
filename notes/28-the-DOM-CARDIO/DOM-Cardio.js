// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
// add three list items with the words "one, two, three" in them
const myUl = `
  <ul>
    <li>One</li>  
    <li>Two</li>  
    <li>Three</li>  
  </ul>
`;

// put that list into the above wrapper
myDiv.innerHTML = myUl;

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://picsum.photos/600';

// set the width to 250
const myWidth = 250;

// set the height to 250
const myHeight = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Random Pic
myImg.alt = 'Random Pic';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class='htmlDiv'>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p></p>
  </div>
`;

// put this div before the unordered list from above
const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const htmlDiv = myDiv.querySelector('.htmlDiv');
const secondParagraph = htmlDiv.children[1].classList.add('warning');

// remove the first paragraph
htmlDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Theier height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class='delete' type='button'>&times; Delete</button>
    </div>
  `;

  return html;
}

// make a new div with a class of 'cards'
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('enea', 17, 184);
cardsHTML += generatePlayerCard('wes', 12, 154);
cardsHTML += generatePlayerCard('scot', 11, 144);
cardsHTML += generatePlayerCard('tyler', 10, 134);

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.closest('.playerCard').remove();
}

// loop over them and attach a listener
deleteButtons.forEach(button => button.addEventListener('click', deleteCard));
