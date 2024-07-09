/*

  Callbacks!

  We previously learned that functions are first class objects!
    Three reason why!
      * 1. Be stored in a variable:
        ** Function Expression
      * 2. Passed as an argument to a function:
        ** Callback Functions
      * 3. Returned from a function:
        ** Closures/Recursion

  What is a callback function?
    * A callback function is a function passed into another function as an argument
    * Which is then invoked inside the outer function to complete some kind of routine or action

  What is a higher order function?
    * Function that receives or returns a function

  When passing a anonymous callback function, use a arrow function
    * Much cleaner and shorter
    [1,2,3].map(num => num * 10);// [10,20,30];
    * vs
    [1,2,3].map(function(num){
      return num * 10;
    });
    * Its also MDN's recommended way

  Callback vs Helper functions
  * All callbacks are helper functions
  * But not all helper functions are callbacks
    * Callbacks must be explicitly passed as an argument to a function

*/

// let name = 'brandon';
// let age = 28;
// let myFunc = function (){

// }

function higherOrder(callback) {
  // console.log(callback);// [Function: callback]
  console.log(callback()); // Hello from callback
}

// let age = 28;
// let string = 'string'

let callback = () => {
  return "Hello from callback";
};



// console.log(higherOrder(callback));
// numbers => [1,2,3]  | callback => double => function
function doubleNumbers(numbers, callback) {
  // console.log(numbers, callback);// [ 1, 2, 3 ] [Function: double]
  // console.log(callback());// NaN
  // console.log(callback(100));// 200
  let result = [];

  for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    // console.log(number);
    // console.log(callback(number));// 2 | 4 | 6
    let doubledNum = callback(number);
    result.push(doubledNum);
  };

  return result;
}

function double(num) {
  return num * 2;
}

console.log(doubleNumbers([1,2,3], double));// [2, 4, 6]

// console.log([1,2,3].map(double));







// console.log(
//   doubleNumbers([1, 2, 3], function double(num) {
//     return num * 2;
//   })
// ); // [2,4,6]

// let doubleNum = (num) => {
//   return num * 2;
// };

// console.log(doubleNumbers([1,2,3], doubleNum = (num) => {
//   return num * 2;
// }));

// let doubleNum = num => num * 2;


// console.log(doubleNumbers([1,2,3],  num => num * 2));
