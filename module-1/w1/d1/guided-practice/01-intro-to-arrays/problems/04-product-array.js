/*
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.

  Polya's Framework

  Understanding The Problem
  Input: [10, 3, 5, 2]
  Output: 300
  * How do we get from an array to 300
  * 10 * 3 = 30 * 5 = 150 * 2 = 300

  Make a plan
  1. define a function product that takes an array an argument
  2. create a res variable
  3. iterate through the array to access every element
    a. store the current number in a variable num
    b. multiply the current number by res
  4. return res variable

  Execute the plan
  Refactor


*/

function product(numbers) {
  // console.log(numbers);// [ 10, 3, 5, 2 ]
  let result = numbers[0];

  // console.log(numbers.length)// 4
  for (let i = 1; i < numbers.length; i++) {
    let number = numbers[i];
    // console.log('number array',numbers, 'current index',i, 'number at that index', number);
    // result * number;
    // result = result * number
    result *= number;
    // let product = result * number
    // console.log(result);
  }

  return result;
}
// console.log('===>',11232130 * 0)

// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3]));        // 12

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = product;
