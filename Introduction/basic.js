// for running these commands go to inspect and then console of any website and write there

alert("Hello"); // use to give pop ups in any website

document.body.innerHTML = ""; // use to clean whole website page which is visible
document.body.innerHTML = "Hello How are you"; // clean whole website ui and display this message there

// numbers and strings follows a order of operations i.e.
// 1 (...)
// 2. * /
// 3. + -

// Calculations with floats are sometimes inaccurate, when working with money
// do calculation in Paisa/cents then convert it into Rupees/dollars

Math.round(2.2); // Use to round off the number. since,JS is case sensitive must use capital M

("hello"); // and "Hello" // we can write strings like this we can also concatenate multiple strings
// also numbers with strings ****** 'hello' + 3  **** this will give output hello3
// JS automatically converts numbers to strings if they are added to strings
typeof "hello"; // typeof; used to find type is it a string of number or anything

"I'm learning Javascript"// some more escape characters are: // we can use escape characters \' these counts as 1 in JS
  // 1. \" = double quote that is just text
  // 2. \n = newline character

  `hello`; // this prints 'hello' // interpolation is cleaner method to print a solution

import { addToCart } from '../Amazon-clone/data/cart';
// Note: must use '...' by default to print a string
// If we need interpolation, multi line string use `...`

// we cannot use special words example : let
// we cannot start with a number in variable name
// we cannot use special characters except: $ and _

// Common naming conversions used in JAVASCRIPT:
// camelcase - cartQuantity
// Pascalcase - CartQuantity

// Not used in JS are:
// Kebab-case - cart-quantity
// snake_case - cart_quantity

// common ways to create variable are:
// 1. let - use when we have to change value afterwards
// 2. const - use in constant cases where values remains same
// 3. var - has some issues using in js

// we can use booleans directly true or false and then if we put some condition in console.log it will give an o/p true/false

// In JS there are some Falsy values:
// false , 0 , ' ' , Nan {means not a number ex- 'text' / 2} ,       undefined {means variable is declared but with no value}, null
// Except this all are considered as Truthy values

// shortcuts for if statements:
// 1. Ternary operator ?: (we can store them in variables)
// 2. Guard operator &&
// 3. Default operator ||

// shortcut for :
/* if (true) {
   'truthy'
  }
 else {
   'falsy'
  }
 is: */
// true ? 'truthy' : 'falsy'

// =========================== functions =============================

// syntax to create function:
// function crocodillo() {}
// we can later access it by calling funtion name: crocodillo();

// =========================== objects ===============================

// objects: let us group and use multiple values together
// syntax: const object_name = {};
// we can access object later by 2 ways:
// . notation : object_name.car;
// [] : object_name['name']  , let us use properties that won't work with . notation

// we can also use objects inside objects : nested objects
/* syntax:
        const product {
          name: 'tv',
          price: 56500,
          rating : {
            stars: 4.6,
            reviews: 68
          }
        };
 */

// objects: console.log() = method
// where: 'console' is object and 'log()' is a function}

//=================== Javascript object Notation =====================

// JSON: JavaScript Object Notation
// basically a syntax similar to JS object but with less features
// JSON doesnot support double quotes " " and functions()
// we use JSON because it is universal JS object are only used in JS
// We use JSON :
// 1. when we send data between computers
// 2. when we store data
// for ex: JSON.stringify(); is used to convert JS object to JSON
// JSON.parse(stringyfy()); is used to do vice versa

// one more built in object is  localstorage.(supports strings)
// variables are temporary but local storage is non temp T&C.
// syntax: localStorage.setItem('message' , 'hello');

// localStorage.getItem('message'); ----------->
// it will delete message from local storage

// NULL means we want something to be empty and undefined means it is empty by chance maybe

// JavaScript has a property of auto-boxing i.e. it will create boxes around strings and all.

/* console.log('hello'.length);
console.log('hello'.toUpperCase());

const string = 'GOOD MORNING';
console.log(string.toLowerCase());

console.log(string.repeat(3)); */

// since objects are references therefore we can compare objects directly, because when we compare it compare directly to references not values inside.

// ==================== Document object model ========================

// DOM:document object model it is nothing but another built-in-object
// we can access body,title etc of body by DOM

// document.querySelector() - let us get any element from the page and put it inside javascript.
// for ex- document.querySelector('button') - selects button

// we can also select class using querySelector('.blah-blah'); ----> we have to put dot when we have to access class

// innerText - selects text inside anything
// ex- buttonElement.innerText ----> selects text of buttonElement.

// clicks,keydowns => events
// onclick,onkeydown => event listners

// onkeydown= "console.log('typing"); =====> when we type something it puts typing message in console

// some of event listners are :
/* 1. onclick = click
   2. onkeydown = key press
   3. onscroll = scrolling
   4. onmouseenter = hovering over
   5. onmouseleave = stop hovering over   etc etc..
*/

// Number() => converts a string to a number
// string() => converts a number to a string

// Note: don't do math using string.

// window.document => DOM we can access any part of window(console,popups etc..). window is a built-in object JS directly add window when we write console or anything.

// =========================== CSS Basics ============================

// buttonElement.classList.add('is-subscribed'); ==> this add a class named is-subscribed
// buttonElement.classList.remove('is-subscribed'); ==> this removes a class named is-subscribed

// classList has another method => classList.contains('class-name') ,which check if the element has a class. (Treu/False)

// In this chapter we learned about CSS to project,
// how to use .classList,
// Organize JS and CSS codes in diffrent files using link and script.

// ========================== Arrays and Loops =======================

// Arrays: represent a list of values(number,string,booleans,objects)
// ex: [1,2,3]
// ex: ['hello' , 23 , true , {name:'socks'} , [1,2]]

// Array.isArray() => tell us type of element in array(object,no.etc)
// Array.length => tells the length of array

// .push() => Adds a value to the end of array.
// .splice() => Removes a value from an array. {splice take 2 values
//     1. index we want to remove
//     2. number of values we want to remove }

// instead of writing HTML we can also generate it using JS
/* let todoListHTML = '';
      for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
      }
*/

// destructuring:
// const name = todoObject.name;
// const dueDate = todoObject.dueDate; we can also write them as ===>
// const { name, dueDate } = todoObject;

// ============================= Advanced Functions ==================

// Functions are values

// setTimeout(); ===> built in function which set time after which code must run, takes 2 values inside :
// 1. a function we want to run
// 2. for how much time after we have to show up (time in millisec)

/* setTimeout(function () {
  console.log('hey there');
}, 3000);
*/

// Asyncronous code => means a computer won't wait for a line to finish before going to the next line

// Synchronous code => means a computer will wait for one line to finish before going to the next line

// most of the JS codes are synchronous codes hence they run line by line exceptional cases are when we use setTimeout etc etc ...

/* setInterval(function () {
  console.log('next line');
}, 3000);
console.log('next line-2');
*/

// setInterval() => same as setTimeout(), but this set time in intervals means after particular interval this code must run again and again

// setIntervals returns a number, we can use it to stop the interval as =>  clearInterval(id)

// .forEach() => used to loop through an array
// this doesnot have a continue so we can use return statement
// and for breaks we have to use for loops instead of .forEach()

// for writing functions we have a shortcut using arrow functions:
/*
const regularFunction = function () {
  console.log('hello from regular')
}
regularFunction();

const arrowFunction = () => {
  console.log('hello from advanced')
};
arrowFunction();
*/

// arrow functions have more shortcuts than regular functions

// .addEventListener()  => lets us run some code when we interact with the element , it has 2 parameters:
// 1. Event
// 2. The function we want to run
// Note: we can add multiple event listeners for one event

// .removeEventListener()  => used to remove event listeners from an event, it has 2 parameters:
// 1. Event
// 2. The function we want to remove

// hence it is better to use .addEventListener rather than using onclick = ""

// There are some more looping methods like .forEach()  =>
// 1) .filter(value , index)  ==> use to filter array
// 2) .map(value , index)  ==> transform a array to another

// closure : if a function has access to a value then it will always have access to that value, value gets packaged together (enclosed) with the function

// =================== Learning in Project ===========================

// we have generated HTML using JS we have made JS objects and then loop it and displayed using DOM

//This is how real world website works we enter the data and generate using JavaScript for better view must see "data/products.js"

// Data attribute - is just another HTML attribute which allows us to attach any info to an element
// syntax: data-product-name = "${product.name}" ,must start with data

// Modules- better way to organise our code
// to create a module :
// 1. create a File
// 2. dont load the file with <script>
// Any variable we create inside the file, will be contained inside the file.

// To get a variable out of a file:
// 1. Add type = "module" attribute
// 2. Export and Import
// NOTE: we have to put all imports at top of the file, and must use live server.

// We import as: import { cart, addToCart } from '../data/cart.js';

// alternative way is:
/* import *as cartModule from '../data/cart.js'
cartModule.cart
cartModule.addToCart('id');
*/

// we have created money.js to share between diffrent files

// We can also load external codes just using script tags, provide links into that

/* for the delivery dates we have to perform steps:
1. Get today's date
2. Do calculations
3. Display the date in readable format
*/

// instead of doing all these we will use "DayJS" external library
// usually all external libraries have documentations availabe which tells how to use that external library.

/*
================ Day.js Format Tokens Cheat Sheet ====================

Year:
YY      -> 2-digit year                 -> 21
YYYY    -> 4-digit year                 -> 2025

Month:
M       -> Month number (1-12)          -> 8
MM      -> Month number with leading 0  -> 08
MMM     -> Abbreviated month name       -> Aug
MMMM    -> Full month name              -> August

Day of Month:
D       -> Day of month (1-31)          -> 14
DD      -> Day of month with leading 0  -> 14

Day of Week:
d       -> Day of week (0-6, Sun=0)     -> 4
dd      -> Min day name                  -> Th
ddd     -> Short day name                -> Thu
dddd    -> Full day name                 -> Thursday

Hour:
H       -> Hour (0-23)                  -> 14
HH      -> Hour with leading 0           -> 14
h       -> Hour (1-12)                  -> 2
hh      -> Hour with leading 0 (1-12)   -> 02

Minute:
m       -> Minute                        -> 5
mm      -> Minute with leading 0         -> 05

Second:
s       -> Second                        -> 9
ss      -> Second with leading 0         -> 09

Millisecond:
SSS     -> Millisecond (3 digits)       -> 123

AM/PM:
A       -> Uppercase AM/PM               -> PM
a       -> Lowercase am/pm               -> pm

Unix Timestamp:
X       -> Unix timestamp (seconds)     -> 1628966400
x       -> Unix timestamp (milliseconds)-> 1628966400000

=====================================================================
Example Usage:
dayjs().format('YYYY-MM-DD HH:mm:ss A')  -> 2025-08-14 14:05:09 PM
*/


// using DayJs get the date 5 days after today and display it in format: <month> <day of month>

/*
import dayjs from "dayjs";
const date = dayjs().add(5, "day").format("MMMM D");
console.log(date);
*/

// ESM versions: a version that works with Javascript Modules
// this will add export in front of libraries to be used by modules
// import these by writing import {} from 'URL', Check checkout.html

// Default Export:
// another way of exporting
// we can use it when we only want to export 1 thing

// 1. Update the data
// 2. Regenerate all the HTML = MVC (model-view-controller)

// In MVC we split out code into 3 parts:
// 1. Model - saves and manages the data {data folder }
// 2. View - takes the data and displays it on the page { checkout.js }
// 3. Controller - runs some code when we interact with the page {event listeners in checkout.js}

// instead of updating data one-by-one we use MVC which can interact with each other and update the changes , or organise and design the code

// =========================== Testing ===============================

// Manual testing: open website and test the code is running fine/not
// disadvantages: hard to test every situation and hard to re-test

// Automated testing: using code to test the code
// disadvantages: hard to write all code manually to test

// we add test cases:
// 1. basic test cases = test if code is working
// 2. edge case = test with values that are tricky

// Test Suite: group of related tests

// Testing Framework: External library that help us write tests easier
// ex- Jasmine,Jest(ReactJs),MochaJs

// In Jasmine: specRunner = TestRunner

// syntax to test in Jasmine:
/*
      describe('Test Suite: formatCurrency', () => {
        it('converts paise to ₹', () => {
          expect(formatCurrency(2095)).toEqual('20.95');
        });
      });
*/
// where: (For more must read jasmine documentations)
// 1. describe => gives a name
// 2. it => tells what it do
// 3. expect => checking test conditions

// Note: we can use describe inside describe

// Test coverage: how much of the code is being tested
// Always try to MAXIMIZE the Test coverage

// Flaky Test = test that sometimes passess and sometimes fails

// To solve flaky test => we use Mocks in jasmine, mocks lets us replace a method with a fake version.

// Unit tests: testing just a function or piece of code

// Integration test: tests many units/piece of code working together.

// Hooks(Jasmine) => lets us run some code for each test
/* ex of Hooks provided by Jamine:->
1. beforeEach() - runs code before each test
2. afterEach() - runs code after each test
3. beforeAll() - runs code before all test
4. afterAll() - runs code after all test
*/

/* In this lesson we learnt:
1. how to test code using Manual and automated tests
2. how to organise codes using testcases and testsuites
3. learnt using testing framework: Jasmine
i.    help us write test easier
ii.   mock and spyOn methods
iii.  testing webpages using integration test
iv.   learning different Hooks
*/

// ================== Object Oriented Programming ====================

// OOP: another style of programming (another way we write our code)

// till now we have done procedural programming
// in OOP: we organise out code into objects

// shortHand Mehthod: loadFromStorage: function() {}
// write: loadFromStorage() {}

// this: gives us object that contains that function

// we use OOP because it tries to represent the real world. digitally

// Class: object generator (helps us generate objects).

// Features of classes:
// constructor : lets us run setup code
// Has to be named "constructor"
// should not return anything

// Private: only be accessed inside the class (put a '#' in front)
// Public: can be accessed outside also (all are public without '#')
// to access private property just put # in front

// In JS we can also have private methods

// Inheritance: lets us reuse code between classes

// syntax: class Clothing extends Product {},  that means Clothing inherit all properties of Product.

// super() -> calls constructor of parent class {we can access parent class using this}

// Polymorphism: use a method withoud knowing the class or we can say that same function or method name can be used for diffrent types of objects, and each objects provide its own implementation.

// Built-in-classes -> classes that are provided by language
// ex: new Date() = generate an object that represent the current date.

/*
const date = new Date()
console.log(date);
---------------------------------------------------------------
output: Sat Aug 16 2025 15:39:23 GMT+0530 (India Standard Time)
*/

// .toLocaleTimeString() = gives us the current time , it will give like: 16/04/25

// .call() -> same as running the function with name



/* ============ Summary of "this" ==========
1. inside a method, it points to the outer object: ex-
const object2 = {
  method() {
    console.log(this);
  }
};

2. inside a function, this = undefined , but we can change it later: ex-
function logThis() {
  console.log(this);
}
logThis.call('hello');

3. Arrow functions, do not change the value of this: ex-
console.log(this);
[1, 2, 3].forEach(() => {
  console.log(this);
});

*/
// prefer Procedural programming in JS but when working with team try to use OOP.

/* we learnt:
1. Object Oriented Programming
2. Use a function to generate Objects
3. Classes
4. Private properties and methods
5. Inheritance
6. Method overriding and Polymorphism
7. details about "this"
*/



// ================================== Backend ==========================================

// It is another computer that manages backend of the data

// HTTP: Hyper Text Transfer Protocol, use to communicate with another system

// XMLHttpRequest - this is a built-in Class provided by JS to send HTTP message, it creates a new HTTP message to send to backend.

// .open() -> it takes 2 parameters:
// 1. what message to sent :
// ex- 'GET', where GET means get some info from backend ,{more are: POST,PUT,DELETE}.
// 2. where to send this HTTP message
// ex- URL=uniform resource locator, like an address but for computer
// https://amazon.com {https means secure version, amazon.com is domain}

// xhr.send(); , send request to backend. but it is asynchronous{doesnt wait for response to come back}

// xhr.addEventListener('load', () => {
//   console.log(xhr.response);
// });                                      waiting for message to get respond

/* Status code: tells us message succeeded or failed
1. Starts with 4 or 5 (400,500,404) = failed , 4 means our fault , 5 means backend fault
2. starts with 2 (200,201,204) = succeeded
*/

// API = Application Programming Interface
// Note: The backend can respond with different types of data

// we can use browser to make a GET request

// callback- a function to run in the future

// Testing Backend using Jasmine-:
// To wait for async code: it will give a function called- done()

// done() -> lets us control when to go to the next step

/* Use done() like this ->
 beforeAll((done) => {
    loadProducts(() => {
      done();
    });
  });
*/

// ================================= Promises ==========================================

/* what are Promises:
1. better way to handle asynchronous code
2. similar to done() function of Jasmine.
3. let us wait for some code to finish, before going to the next step
*/

/* syntax:
new Promise((resolve, reject) => {})
*/

// resolve- similar to done() function, lets us control when to go to the next step

// Since Multiple CallBacks cause a lots of nesting, hence we use 'Promises' to work
// promises lets us flatten out code.

// Hence it is recommended to use Promise instead of callbacks. hence promises keep our codes flatten.

// we can run multiple promises at same time:
// Promise.all() -> lets us run multiple promises at same time and wait for all to finish.

// fetch() = better way to make HTTP request., fetch() uses a promise.
/* Syntax :- 
function loadProductsFetch() {
  fetch('https://supersimplebackend.dev/products').then((response) => {
    console.log(response);
  })
}
loadProductsFetch();
*/