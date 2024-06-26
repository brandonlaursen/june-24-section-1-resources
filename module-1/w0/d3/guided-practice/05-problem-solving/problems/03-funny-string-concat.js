/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Write a `funnyStringConcat` function that receives two string parameters:
`str1` and `str2`. The function should return a new string consisting of the
first 3 letters of `str1` followed by the last 3 letters of `str2`.

(You can assume that the strings passed to `funnyStringConcat` will always have
at least 3 letters.)

Understand the problem
  input: str1, str2 - "abc", "def"
  output: string - "abcdef"
  * how do we get from out input to our output?
  * abcdef
  * "number", "soldier"
  * numier

Make a plan
  1. define/declare a function(funnyStringConcat) that takes in two str parameters
  2. make sure the strings have more than 3 characters
  3. iterate or use substr, slice
  4. create variable to store new string
    a. may need to concat to the new string
  5. return new Str

Execute the plan
Refactor

**Challenge:** Once you get `funnyStringConcat` working, refactor it so that it
uses the String `substring` method--look it up on MDN!--and consists of only one
line inside the function block.
*/
// 1. define/declare a function(funnyStringConcat) that takes in two str parameters
function funnyStringConcat(str1, str2) {
  // 2. make sure the strings have more than 3 characters
  if (!(str1.length >= 3 && str2.length >= 3)) {
    // return "one of these strings isnt long enough";
  }

  let firstStr = str1.slice(0, 3);

  let result = "";
  for (let i = 0; i < 3; i++) {
    let char = str1[i];
    result += char;
  }

  let secondStr = str2.slice(-3);

  for (let i = str2.length - 3; i < str2.length; i++) {
    let char = str2[i];
    result += char;
  }

  // return result;
  // return firstStr + secondStr;
  return str1.slice(0, 3) + str2.slice(-3);
  // return str1.substr(0,3) + str2.substr(str2.length - 3)
}
// console.log('as'.slice(0))
console.log(funnyStringConcat("a", "def")); //=> "abcdef"
console.log(funnyStringConcat("abc", "def")); //=> "abcdef"
console.log(funnyStringConcat("number", "soldier")); //=> "numier"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = funnyStringConcat;
