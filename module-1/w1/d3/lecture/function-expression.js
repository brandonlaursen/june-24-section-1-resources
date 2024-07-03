/*

  Function expression syntax!
    * another a way to write a function
    * we learn about function declaration last week
    * storing an anonymous function in a variable therefore giving it a name to alias it by

*/

// function declaration
function myFunc(string) {
  return string;
}

// console.log(myFunc('leetcode'))

// function(){

// }




let name = "brandon";
console.log("name:", name);
let age = 28;
console.log("age:", age);

// console.log(myFunc);// [Function: myFunc]

// storing an anon function in a variable
let myFunc2 = function () {};

// console.log(myFunc2);

// But what does this all mean? This brings us around to the concept of first
// class objects. A first class object is defined as:
// * 1. It can be stored in a variable
// * 2. it can be passed as an argument to a function (coming up next week!)
// * 3. It can be returned from a function (also coming up next week!)

function addTwo(num) {
  return num + 2;
}

// function expressions
// they are cleaner to pass functions to other function
// they allow us to use fat arrow syntax
// this - arrow function use the this of whatever they are defined with

let addToNumbers = function (array, callback) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];

    res.push(callback(number));
  }

  return res;
};

// let addThree = function(num){
//   return num + 3;
// }

// let addThree = num => {
//   return num + 3;
// }

// let addThree = num => num + 3;

// console.log(addToNumbers([1,2,3,4], num => num + 3));
// console.log(addToNumbers([1,2,3,4], function(num){
//   return num + 3;
// }));

let nums = [1, 2, 3];

// console.log(nums)

// (function(){
//   console.log('inside the iife')
// })()
