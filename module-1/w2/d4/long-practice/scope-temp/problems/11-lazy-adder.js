/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/
//lazyAdder(1)
// const lazyAdder1 = firstNum => secondNum => thirdNum => firstNum + secondNum + thirdNum;
function lazyAdder(firstNum) {
  // console.log(firstNum)

  // firstAdd(2)
  return function (secondNum) {
    //secondAdd(3)
    return function (thirdNum) {
      //sum => 1 + 2 + 3 = 6
      return firstNum + secondNum + thirdNum;
    };
  };
}

let firstAdd = lazyAdder(1);
// console.log("1==>", firstAdd); // [Function (anonymous)]
let secondAdd = firstAdd(2);
// console.log("2==>", secondAdd); // [Function (anonymous)]
let sum = secondAdd(3);

console.log(sum); // prints 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
