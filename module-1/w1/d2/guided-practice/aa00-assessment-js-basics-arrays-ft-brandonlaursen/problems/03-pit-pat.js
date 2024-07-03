/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/03-pit-pat-spec.js
*/

// Define a function called pitPat that takes in a minimum number and a maximum
// number as two parameters. Return an array containing all the numbers between
// the minimum and maximum numbers (inclusive) that are divisible by 4 or 6, but
// not by both.

function pitPat(min, max) {
  let numbers = [];

  for (let i = min; i <= max; i++) {
    if ((i % 4 === 0 && i % 6 !== 0 ) || (i % 4 !== 0 && i % 6 === 0))
      numbers.push(i);
  }

  return numbers;
}

// console.log(pitPat(0, 6))// should return [4, 6])
// console.log(pitPat(40, 50)); // should return [40, 42, 44]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;
