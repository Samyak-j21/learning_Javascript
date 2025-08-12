// for running these commands go to inspect and then console of any website and write there

alert('Hello');  // use to give pop ups in any website

document.body.innerHTML = ''; // use to clean whole website page which is visible
document.body.innerHTML = 'Hello How are you'; // clean whole website ui and display this message there

// numbers and strings follows a order of operations i.e.
// 1 (...)
// 2. * /
// 3. + -

// Calculations with floats are sometimes inaccurate, when working with money
// do calculation in Paisa/cents then convert it into Rupees/dollars

Math.round(2.2) // Use to round off the number. since,JS is case sensitive must use capital M 

'hello' // and "Hello" // we can write strings like this we can also concatenate multiple strings
// also numbers with strings ****** 'hello' + 3  **** this will give output hello3
// JS automatically converts numbers to strings if they are added to strings
typeof 'hello'  // typeof; used to find type is it a string of number or anything

'I\'m learning Javascript' // we can use escape characters \' these counts as 1 in JS

  // some more escape characters are: 
  // 1. \" = double quote that is just text
  // 2. \n = newline character

  `hello` // this prints 'hello' // interpolation is cleaner method to print a solution

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


11:18:00