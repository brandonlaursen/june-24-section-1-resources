/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Given a number, write a function called within5Of100 to return true if the given
number is within 5 of 100.

  1. understanding the problem
  input: number - 94
  output: boolean - false
  * how do i get from the input to the output
    95 -> 100 <- 105

  * find way to check if the number greater than 5
  * but also less than 5

  2. make a plan
  * define the function within5of100
  * taking in a number as parameter
  * use comparison operators to compare numbers to check if there within 5
  * 95 < n < 105
  * return the result of comparing the number
  3. execute the plan
  4. refactor

*/

function within5Of100(num){

  // console.log(num <= 105);

  // return num >= 95
  return Math.abs(num - 100) <= 5
  // return num >= 95 && num <= 105


}

console.log('==>',within5Of100(94, 3));  //=> false

console.log(within5Of100(95));  //=> true
console.log(within5Of100(100)); //=> true
console.log(within5Of100(105)); //=> true
console.log(within5Of100(106)); //=> false

// CHALLENGE: Can you design a function that would return true if a given number
// is within X of another given number Y?


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = within5Of100;
