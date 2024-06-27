/*

 Conditionals
 * let us control what we decide to do, creates a decision making tree for our code

  Talk about truthy and falsy values
  * https://developer.mozilla.org/en-US/docs/Glossary/Truthy#:~:text=In%20JavaScript%2C%20a%20truthy%20value,type%20coercion%20in%20Boolean%20contexts.

  * Conditional statements will act as control for the flow of our apps and functions.
  * The basic structure of a conditional statement looks like:
      if (condition or comparison){
        <run this code>
      } else if (other condition or comparison) {
        <run this code>
      } else {
        <do this code if none of the conditions are met>
      }

  Mutually exclusive condition
   * A general rule of thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, then you should  use an if/else statement.
   * You can also think of mutually exclusivity like a coin flip - it can be either heads or tails but not both.

  Conditionals cans be used to control the flow of our program
    * by providing conditions, and commands on what to do if conditions are met or not
    * there are many types of conditions we can check
*/

// Conditionals cans be used to control the flow of our program
// * by providing conditions, and commands on what to do if conditions are met or not
// * there are many types of conditions we can check

function isGreaterThan5(num) {
  if (num === 5) console.log("num is equal is to 5");
  else if (num < 5) console.log("num is less than 5");
  else if (num > 2) console.log("num is greater than 2");
  else if (num > 5) console.log("num is greater than 5");
  else console.log("is this a number?");

  // if(num > 5) {
  //   console.log("num is greater than 5");
  // }
  // if(num > 2) {
  //   console.log("num is greater than 2");
  // }

  // return false;
}

// console.log(isGreaterThan5(10));
// console.log(isGreaterThan5(5));
// console.log(isGreaterThan5("string"));

let randomNum = Math.random();

// mutually exclusive
if (randomNum > 0.5) {
  // console.log('heads');
} else {
  // console.log('tails')
}

// ternary
// condition ? exprIfTrue : exprIfFalse

// randomNum > .5 ? console.log('heads') : console.log('tails')

function flipCoin() {
  let randomNum = Math.random();

  return randomNum > 0.5 ? "heads" : "tails";
}

// console.log(flipCoin());




if('string') {
  console.log('is truthy')
}


if('false') {
  console.log('is truthy')
}


if(24) {
  console.log('is truthy')
}


if(0) {
  console.log('is falsy')
}

if('') {
  console.log('is falsy')
}

if(undefined) {
  console.log('is falsy')
}



if(' ') {
  console.log('======>','is truthy')
}
