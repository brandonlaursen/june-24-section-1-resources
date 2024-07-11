/*
Write a function `tripler(nums)` that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.

Solve this using Array's `map()` method.

Examples:

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

  input: [2, 7, 4]
  output:  [ 6, 21, 12 ]

  Make a plan
  1. use the map method
    * ((number) => number * 3);
    * ( (parameter, i, array) => parameter)
    * what do we want to name the parameter in the callback func
    * what does the callback func need to return, that return go into the resulting array


*/

let tripler = function(nums) {
    // Your code here
    let result = nums.map(
      function(ele){
      // console.log(num);
      return ele * 3;
    }
  );

    // console.log(result);
    return result;
};


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = tripler;
} catch (e) {
  module.exports = null;
}
