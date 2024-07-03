/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

/*


  Understanding the problem
  input: [[1, 3], [-4, 7, 10], [2]];
  output: 19
  * sum of every number across all the sub arrays

  Make a plan
  1. we can define a sum variable
  2. we can iterate to gain access to the sub arrays
    a. define variable for subArr [1, 3]
  3. we can iterate through the sub arrays to gain access to the numbers
    b. define var for number
  4. add the current number to our sum
  5. return sum

*/

function twoDimensionalSum(arr) {
  // console.log(arr);// [ [ 1, 3 ], [ -4, 7, 10 ], [ 2 ] ]
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    // console.log(subArr);

    for (let j = 0; j < subArr.length; j++) {
      let number = subArr[j];

      // console.log(number);
      sum += number;
    };

  };

  return sum;
}

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
