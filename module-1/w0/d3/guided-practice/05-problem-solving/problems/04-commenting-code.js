/*


Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.

*/

// defining a function called charactersNotQuiteAtTheEdge that takes in a string as an argument
// this where paramater is to used represent the argument passed
// str represents fringe
// str = 'fringe'
function charactersNotQuiteAtTheEdge(str) {

  // were storing in a variable the character at index 1 in the str
  let char1 = str[1];
  // console.log(char1);// r

  // were storing in a variable the character at the last index
  // were doing minus one to account for the 0th index
  // 0 1 2 3 4 5 6
  // f r i n g e undefined
  // 6 - 2 = 4

  let char2 = str[str.length - 2];
  // console.log(str[str.length - 1])
  console.log(char2);// e

  // concatenating the two strings together
  // r + g
  return char1 + char2;
}

// this where the function is called/invoked
// this is also where the arguments passed
// console.log is going to log the return value of calling this function
console.log('===>',charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
