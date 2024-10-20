// 1. Accessing DOM Elements

const elementById = document.getElementById('myElement');
console.log(elementById);

const elementsByClass = document.getElementsByClassName('myClass');
console.log(elementsByClass);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

const firstDiv = document.querySelector('div');
const allDivs = document.querySelectorAll('div');
console.log(firstDiv);
console.log(allDivs);

// 2. Changing Element Content and Attributes

elementById.textContent = 'Updated Text Content';
elementById.innerHTML = '<em>Updated HTML Content</em>';

elementById.setAttribute('class', 'newClass');
const img = document.querySelector('img');
img.src = 'newImage.jpg';

// 3. Adding and Removing Elements

const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element';
document.body.appendChild(newDiv);

elementById.remove(); // Removes the element with id 'myElement'

// 4. Changing Styles Dynamically

firstDiv.style.backgroundColor = 'yellow';
firstDiv.style.fontSize = '24px';

// 5. DOM Events

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// Accessing Event Object

button.addEventListener('click', event => {
    console.log(`Event Type: ${event.type}`);
});

// 6. Event Delegation

const ul = document.querySelector('ul');
ul.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
});

// 7. Prevent Default Behavior

const link = document.querySelector('a');
link.addEventListener('click', event => {
    event.preventDefault();
    console.log('Default link behavior prevented.');
});

// 8. Bubbling and Capturing

const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');

outerDiv.addEventListener('click', () => {
    console.log('Outer div clicked');
});

innerDiv.addEventListener('click', event => {
    console.log('Inner div clicked');
    event.stopPropagation(); // Stops the event from bubbling up
});
