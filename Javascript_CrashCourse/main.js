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