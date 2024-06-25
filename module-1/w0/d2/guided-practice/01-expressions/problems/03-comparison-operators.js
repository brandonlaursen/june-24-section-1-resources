/*
Let's practice playing with comparison operators in JavaScript!


    < - less than
    > - greater than
    == - loose equality
    === - strict equality
    <= - less than equal too
    >= - greater than equal too

*/

// 1. Set the value of expression1 to be true only if num1A is less
//    than num1B.
let num1A = 10;
let num1B = 15;
// 10 < 15
// true
let expression1 = num1A < num1B;

// console.log(expression1); //=> true

num1A = 20;
// 20 < 15
expression1 = num1A < num1B;

// console.log(expression1); //=> false

// 2. Set the value of expression2 to be true only if num2A is
//    strictly equal to num2B.
let num2A = 10;
let num2B = 10;

// strictly equals checking both the type and the value
let expression2 = num2A === num2B;
// lose equals checking what the value is, not the data type
// console.log('Ten' == 10);// 'Ten' == 10
// '10' == 10


// console.log(expression2); //=>

num2B = '20';
// string === number
//  20    ===   20
expression2 = num2A === num2B;

// console.log(expression2); //=> false

// 3. Predict what the value of expression3 will be when printed
//    to the console. Set predictExpression3 to the value that
//    you think expression3 will evaluate to.
let num3A = 0;
let num3B = 8;
let num3C = 10;
let expression3 = !num3A && num3B > num3C;
// !false && 8 > 10;
// true && false;
// false

let predictExpression3 = false;

// 4. Predict what the value of expression4 will be when printed
//    to the console. Set predictExpression4 to the value that
//    you think expression4 will evaluate to.
let num4A = 2;
let num4B = 5;
let expression4 = num4B >= num4A || num4A !== 5;
// 5 >= 2 || 2 !== 5;
// true || true;
// console.log(expression4);

let predictExpression4 = true;


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  expression1,
  expression2,
  expression3,
  expression4,
  predictExpression3,
  predictExpression4,
};
