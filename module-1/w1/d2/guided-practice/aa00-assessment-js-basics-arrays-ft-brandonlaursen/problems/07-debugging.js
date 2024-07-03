/*
Debugging: Use what you have learned so far about problem solving, debugging,
and arrays to complete the problem below.

Fix the problem(s) so that all test specs pass when you run the following
command in your terminal:
npm test test/07-debugging-spec.js
*/

// fizzBuzzArr(nums) should take in an array of numbers as a parameter and should
// return original array parameter with the numbers mutated following the
// the Fizz-Buzz logic.

// Fizz-Buzz logic:
// If the number is divisible by 3, but not by 5, then transform it to 'Fizz'.
// If the number is divisible by 5, but not by 3, then transform it to 'Buzz'.
// If the number is divisible by both 3 and 5, then transform it to 'Fizzbuzz'.
// Otherwise, leave the number as it is.

// For example, fizzBuzzArr([3, 4, 5]) should return ['Fizz, 4, Buzz'] because
// because the 3 gets transformed into 'Fizz' and the 5 gets transformed into
// 'Buzz' using the Fizz-Buzz logic.

function fizzBuzzArr(range) {
  for (let i = 0; i <= range.length; i++) {
    // console.log(i);
    let num = range[i];
    if (num % 3 === 0 && num % 5 === 0) {
      range[i] = "Fizzbuzz";
    } else if (num % 3 === 0) {
      range[i] = "Fizz";
    } else if (num % 5 === 0) {
      range[i] = "Buzz";
    }
    // range[i] = i;
    // console.log(range);
  }

  return range;
}

// console.log(fizzBuzzArr([3, 4, 5]));// ['Fizz, 4, Buzz']
console.log(fizzBuzzArr([15, 16, 17, 18]))// should return ['Fizzbuzz', 16, 17, 'Fizz']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzzArr;
