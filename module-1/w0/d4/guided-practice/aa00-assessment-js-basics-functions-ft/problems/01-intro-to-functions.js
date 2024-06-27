/*
Functions: Use what you have learned about functions to complete the steps
below.

Implement solutions to the following problems so that all test specs pass when
you run the following command in your terminal:
npm test test/01-intro-to-functions-spec.js
*/

function getGreeting() { // DO NOT MODIFY THIS FUNCTION
  return "Hello World!";
}

// 1. Define a variable called greeting and set the value to the return value of
//    the getGreeting function above
// Your code here 



// 2. Update the function below so that the fruit variable evaluates to a string
//    of 'orange'
function getFruit() {
  return 'apple';
}

let fruit = getFruit(); // DO NOT MODIFY THIS LINE OF CODE



// 3. Define a function called getSingleDigitInteger that returns any integer
//    from 0 to 9
// Your code here 

// Run the following command in the terminal to run this file if you want
// print something to test:
// node problems/01-intro-to-functions.js

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {
  getGreeting,
  getFruit,
  fruit,
};
try {
  exportObj.greeting = greeting;
} catch {}
try {
  exportObj.getSingleDigitInteger = getSingleDigitInteger;
} catch {}

module.exports = exportObj;
