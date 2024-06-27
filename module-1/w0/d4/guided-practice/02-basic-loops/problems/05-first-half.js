/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.



understand the problem
  input: 'academy'
  output: acad
  * how do i get from my input to my output?
  0 1 2 3 4 5 6
  a c a d e m y

  length = 7
  7 / 2 = 3.5

  make a plan
  1. define a function
  2. create a variable halfway that changes depending on if the string.length is odd or even
    a. check if string is odd or even with condition using modulo  n % 2 === 0
    b. edge case: check is there is no length
    c. edge case: if the string length is 1
  3. store the result in a string after using slice up to the halfway point
  4. return result

execute the plan
*/

const firstHalf = str =>  str.slice(0, str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2);
// }
function firstHalf(str) {
  // let halfway;
  // if (str.length % 2 === 0) {
  //   halfway = str.length / 2;
  // } else {
  //   halfway = (str.length + 1) / 2;
  // }

  // let halfway = str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2

  // console.log(halfway);
  let result = str.slice(0, str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2);
  return str.slice(0, str.length % 2 === 0 ? str.length / 2 : (str.length + 1) / 2);
}



console.log(firstHalf("academy")); // 'acad'
console.log(firstHalf("planet")); // 'pla'
console.log(firstHalf("sport")); // 'spo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
