/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/


/*

  input: 'academy'
  output: 'mdc'
  0 1 2 3 4 5 6
  a c a d e m y
    c   d   m
    m   d   c

  make a plan
  1. define a function
  2. define a newStr
  3. iterate
      a. start at index 6
      b. stop at index 0
      c. step in increments of 2, or 1 and use a condition to check if current index is even
      d. as we iterate concatenate the current letter
  4. return our newStr

*/

function elementsOfOddIndicesReversed(str) {
  // Your code here
  let newStr = '';
  // console.log(str[str.length - 1]);// y
  for(let i =str.length - 1; i >= 0; i--){
    let letter = str[i];
    // console.log(letter);
    if(i % 2 !== 0) {
      // console.log(letter);
      newStr += letter;
    }
  }

  return newStr;
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'

// function elementsOfOddIndicesReversed(str) {
//   // Your code here
//   let index = str.length - 1;
//   let result = ""
//   while (index >= 0) {
//     let char = str[index];
//     if ( index % 2 !== 0) {
//       result += char;
//     }
//     index--
//   }
//   return result;
// }
// console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
