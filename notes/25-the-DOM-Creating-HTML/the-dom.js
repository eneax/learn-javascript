// Create HTML div with JavaScript
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

// Create HTML paragraph with JavaScript
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am just a paragraph';
myParagraph.classList.add('special');

console.log(myParagraph);

// Create HTML image with JavaScript
const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/600';
myImage.alt = 'Nice random pic';

console.log(myImage);

// Add node to the page
myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);
document.body.appendChild(myDiv);

// If we need to put something on top of 'myDiv'
const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Create an HTML unordered list with JavaScript
const list = document.createElement('ul');
const liThree = document.createElement('li');
liThree.textContent = 'Three';
list.appendChild(liThree);

document.body.insertAdjacentElement('afterbegin', list);

const liFive = document.createElement('li');
liFive.textContent = 'Five';
list.append(liFive);

const liOne = liFive.cloneNode(true);
liOne.textContent = 'One';
list.insertAdjacentElement('afterbegin', liOne);

const liFour = document.createElement('li');
liFour.textContent = 'Four';
liFive.insertAdjacentElement('beforebegin', liFour);

const liTwo = document.createElement('li');
liTwo.textContent = 'Two';
liOne.insertAdjacentElement('afterend', liTwo);
