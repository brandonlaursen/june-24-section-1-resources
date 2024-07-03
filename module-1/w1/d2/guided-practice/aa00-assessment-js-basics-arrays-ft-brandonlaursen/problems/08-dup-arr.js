/*
Arrays and Mutability: Use what you have learned about arrays and mutability to
complete the problems below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/08-dup-arr-spec.js

NOTE: There are TWO problems to complete in this file.
*/

// Problem 1: Define a function called dupArr that takes in an array. Duplicate
// the original input array and return the duplicated version of the array.



function dupArr(array){

  return array.slice();
};




// Problem 2: Define a function called reverseDupArr that takes in an array.
// Duplicate the elements of the original input array, but reverse them and
// return the duplicated, reversed version of the array.
// Your code here

function reverseDupArr(array) {

  return array.slice().reverse();
}

// reverseDupArr(['world', 6, '!']) should return ['!', 6, 'world']
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const exportObj = {};
try {
  exportObj.dupArr = dupArr;
} catch {}
try {
  exportObj.reverseDupArr = reverseDupArr;
} catch {}

module.exports = exportObj;
