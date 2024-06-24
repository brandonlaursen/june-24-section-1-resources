/*
Let's practice playing with strings in JavaScript!
*/

// 1. Set the value of expression1 to the concatenated string
//	  of str1A and str1B with a single space in between the
//    strings.
let str1A = 'Hello'
let str1B = 'World!'
let expression1;

console.log(expression1); //=> 'Hello World!'

// 2. Set the value of expression2 to the first character of str2.
let str2 = 'Hello';
let expression2;

console.log(expression2); //=> 'H'

// 3. Set the value of expression3 to the index of 'o' in str3.
let str3 = 'Hello';
let expression3;

console.log(expression3); //=> 4

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let expression4 = "Academy"[3];

let predictExpression4;

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression4 will evaluate to.
let str5 = "BLUE";
let expression5 = str5.length - str5.indexOf("U");

let predictExpression5;

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let str6A = 'start';
let str6B = 'end';
let expression6 = str6A.length - str6B[-1];

let predictExpression6;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  predictExpression4,
  predictExpression5,
  predictExpression6,
};
