// DOM
// ELEMENT SELECTORS

//window object : parent of the browser
window.alert(1); // = alert(1)
console.log(window);


// Single Element Selectors
console.log(document.getElementById('my-form')); //return actual element
console.log(document.querySelector('.container')); //select anything
console.log(document.querySelector('h1')); // first h1 tag

// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); //return NodeList
console.log(document.getElementsByTagName('li')); 
console.log(document.getElementsByClassName('item')); //return HTML Collection, not use array methods

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); //return each item


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove(); //remove whole thing .items
// ul.lastElementChild.remove(); //remove last thing in .items
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault(); //prevent default behavior
  console.log(e.target.className); //e.target : actual element
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark'); //add class to body tag
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}