/*
Let's practice playing with boolean expressions and operators in JavaScript!
*/

// 1. Set the value of expression1 to be true or false

let expression1;

console.log(expression1); //=> true

// 2. Set the value of expression2 to be false and false

let expression2;

console.log(expression2); //=> false

// 3. Set the value of expression3 to be false or true and true

let expression3;

console.log(expression3); //=> true

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let expression4 = true || (true && false);

let predictExpression4;

// 5. Predict what the value of expression5 will be when printed
//    to the console. Set predictExpression5 to the value that
//    you think expression5 will evaluate to.
let expression5 = (true || false) && false;

let predictExpression5;

// 6. Predict what the value of expression6 will be when printed
//    to the console. Set predictExpression6 to the value that
//    you think expression6 will evaluate to.
let expression6 = !(true && false) || !(true || false);

let predictExpression6;

// 7. Predict what the value of expression7 will be when printed
//    to the console. Set predictExpression7 to the value that
//    you think expression7 will evaluate to.
let a = true;
let b = false;
let expression7 = (b || a) || (b && !a) && (!b || !a)

let predictExpression7;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  expression7,
  predictExpression4,
  predictExpression5,
  predictExpression6,
  predictExpression7,
};
