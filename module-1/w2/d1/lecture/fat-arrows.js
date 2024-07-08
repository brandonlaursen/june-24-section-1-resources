/*

  Arrow Functions

  What are Fat arrow functions?
    * Arrow functions, a.k.a. Fat Arrows (=>), are a more concise way of declaring functions.
    * More convenient way to pass callback functions(We will learn about on Tuesday)
    * Arrow functions are the preferred syntax when using an anonymous function as a callback.
      ** [1,2,3].map(num => num * 2);// [2,4,6]

*/

// function expression
let hello = function (name) {
  return `Hello ` + name;
};
// console.log(hello('brandon'));

/*
 * Multiple statement arrow function
    (parameters, go, here) => {
      statement1;
      statement2;
      return <a value>;
    }
*/

// let arrowHello = name => {
//   return `Hello ` + name;
// }

// if there are multiple statements
// you need both the curlys and the return keyword
// let arrowHello = name => {
//   let greeting = `Hello ` + name;// statement 1
//   return greeting;// statement 2
// }

// let arrowHello = name => `Hello ` + name;// statement 1

// let arr = [1,2,3];// [2,4,6]

// let doubler = (nums) => nums.map((num) => num * 2);

// console.log(doubler);// [Function: doubler]
// console.log(doubler(arr));// [ 2, 4, 6 ]

// let callback = (nums) => nums.map((num) => num * 2)
function higherOrder(callback) {
  console.log(callback);// [Function (anonymous)]
}

// higherOrder((nums) => nums.map((num) => num * 2));

// let addNums = (num1, num2) => {
//   return num1 + num2;
// }

//IIFE
(function(){

})();
