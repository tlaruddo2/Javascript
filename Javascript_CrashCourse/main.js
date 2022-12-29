// alert("hello world")

// console.log('hello console')

//(var), let, const
//var: global scope, no use var
let age = 30;
age = 31;
console.log(age);

//constant: not reasign, have to initilize
const age2 =30; 
console.log(age2);

//Data type 
//String, Numbers, Boolean, Null, undefined, Symbol (ES6)
const name = 'Brad';
const age3 = 37;
const rating = 3.5;
const isCool = true;
const x = null; //nothing in it
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);
console.log(typeof x); //return object but bogus


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String (better) using ``
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string [0,5)
val = s.substring(0, 5);
// Split into array 
val = s.split(''); //return each char including space



// ARRAYS - Store multiple values in a variable
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
const multipleDatatype = ['apples', 'oranges', 'pears', 'grapes',10,true];
console.log(numbers, fruit);

// Javascript not static typing. if want > typescript
// const aa:string

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
// even if fruits is const, it work
// but fruits = [], error
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));


// OBJECT LITERALS
// Key, value pair
const person = {
    firstName: 'John',
    lastName: 'Tom',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    // address is object 
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }
  
  // Get single value
  console.log(person.firstName)

  // Get two value
  console.log(person.firstName, person.lastName)  
  
  // Get array value
  console.log(person.hobbies[1]);
  
  // Get embedded object
  console.log(person.address.city);

  //polling out value (ES6)
  const { firstName, lastname, address:{city}} = person;
  console.log(firstName) //John 
  console.log(city) //Boston

  // Add property
  person.email = 'jdoe@gmail.com';
  
  // Array of objects
  const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
  
  // Get specific object value
  console.log(todos[1].text);
  
  // Format as JSON
  // When send data to server
  const todoJson = Json.stringify(todos);
  console.log(todoJson);
  
  
  // LOOPS
  
  // For
  for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While
  let i = 0
  while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
  }
  
  // Loop Through Arrays
  // For Loop
  for(let i = 0; i < todos.length; i++){
    console.log(` Todo ${i + 1}: ${todos[i].text}`);
  }
  
  // For...of Loop
  for(let todo of todos) {
    console.log(todo.text);
  }
  
  
  // HIGH ORDER ARRAY METHODS (show prototype)
  // Suggestion way to iteration 
  // forEach, map, filter 
  
  //////////43:00 https://www.youtube.com/watch?v=hdI2bqOjy3c&t=18s
  ////////////

  