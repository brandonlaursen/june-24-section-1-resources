/*
Write a function named `restSum` that accepts all incoming parameters and sums
them.

**Hint**: Use rest parameter syntax!
*/

// numbers = [3,5,6]
function restSum(...numbers){
  // console.log(numbers);

  return numbers.reduce((num, sum) => sum += num);
}

console.log(restSum(3,5,6));                     // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
// console.log(restSum(0));                         // => 0


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = restSum;
} catch {}
