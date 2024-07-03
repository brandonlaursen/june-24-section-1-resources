/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/01-avg-value-spec.js
*/

// Define a function called avgValue that takes in an array of numbers. Return
// the average number value of all the numbers in the array.



function avgValue(numbers){

  let avg = 0;
  if(numbers.length === 0) return avg;


  for(let i = 0; i < numbers.length; i++){

    let number = numbers[i];
    // console.log('i', i, 'number', number)
    avg += number;
    // console.log(sum);
  };

  avg = avg / numbers.length
  return avg;
};


// console.log(avgValue([1, 2, 3, 5, 6, 7]))// should return 4
// console.log(avgValue([3, 2]) )//should return 2.5
// console.log(avgValue([-10, -18]))// should return -14
// console.log(avgValue([]))// should return 0
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgValue;
