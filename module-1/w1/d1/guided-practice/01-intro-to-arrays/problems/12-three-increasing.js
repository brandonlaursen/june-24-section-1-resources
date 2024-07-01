/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.

  Understand the problem
  input: [3, 2, 11, 12, 13, 2, 4]
  output:true

  Make a plan
  1. iterate through the array
    a. we can store the number at the current index 0
    b. we can store the number at the next index 1
    c. we can store the number at 2 indexes away
    Write conditional to check
      d. check if the current number + 1 is equal to the next number in the array
      e. check if the current number + 2 is equal to the number two indexes away
      f. return true
  2. return false

*/


function threeIncreasing(numbers) {

  // console.log(numbers);
  for(let i = 0; i < numbers.length; i++) {

    let firstNum = numbers[i];//3
    let secNum = numbers[i + 1];//2
    let thirdNum = numbers[i + 2];//11
    // console.log(firstNum, secNum, thirdNum)

    if((firstNum + 1 === secNum) && (firstNum + 2 === thirdNum)) {
      // console.log(true)
      return true;
    }

  };

  return false;
}

// console.log('===>',12 + undefined);


// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;
