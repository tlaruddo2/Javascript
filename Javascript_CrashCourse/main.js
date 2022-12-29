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
  // take callback function as parameter
  // forEach, map, filter 
  
  // forEach() - Loops through array
  // parameter: current value(required), index, array
  todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  });
  
  // map() - Loop through and create new array
  const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);
  
  // filter() - Returns array based on condition
  const todo1 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });

  const todo2 = todos.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  }).map(function(todo){
    return todo.text;
  });
  
  
  // CONDITIONALS
  
  // Simple If/Else Statement
  const x = 30;
  const y = 10;
  
//   == just compare value 
//   ex) 10 == '10' true 
//   === compare data type 
//   ex) 10 == '10' false

  if(x === 10 || y > 10) {
    console.log('x is 10');
  } else if(x > 10 && y < 10) {
    console.log('x is greater than 10');
  } else {
    console.log('x is less than 10')
  }
  
  // Switch
  color = 'blue';
  
  switch(color) {
    case 'red':
      console.log('color is red');
      break;
    case 'blue':
      console.log('color is blue');
      break;
    default:  
      console.log('color is not red or blue')
      break;
  }
  
  // Ternary operator / Shorthand if
  const z = color === 'red' ? 10 : 20;
  
  
  
  // FUNCTIONS
  function addNums(num1, num2){
    console.log(num1+ num2);
    return num1 + num2;
  }

  addNums() //return NaN

  //setting up default value
  function greet(greeting = 'Hello', name) {
    if(!name) {
      // console.log(greeting);
      return greeting;
    } else {
      // console.log(`${greeting} ${name}`);
      return `${greeting} ${name}`;
    }
  }
  
  
  // ARROW FUNCTIONS
  const greet2 = (greeting = 'Hello', name = 'There') => {
    `${greeting} ${name}`};
  const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
  console.log(greet('Hi'));
  
  //forEach with arrow function
  todos.forEach((todo) => console.log(todo));


  // OOP
  
  // Constructor Function
  function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
    
    // //take out of function with prototype
    // this.getBirthYear = function(){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  
  // Instantiate an object from the class
  const person1 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Steve', 'Smith', '8-2-90');
  
  

  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  // console.log(person1.getBirthYear());
  // console.log(person1.getFullName());

  //return object literal with prefix, object name
  //if no ptorytype, function is in class as attribute
  //if protytype, functions are in proto arrtibute of class 
  console.log(person2); 
  
  
  // Built in constructors
  const name = new String('Kevin');
  console.log(typeof name); // Shows 'Object'
  const num = new Number(5);
  console.log(typeof num); // Shows 'Object'
  
  
  // ES6 CLASSES
  class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  console.log(person1.getBirthYear());
  