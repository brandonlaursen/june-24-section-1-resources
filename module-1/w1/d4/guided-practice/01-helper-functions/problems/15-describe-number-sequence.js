/*
Implement the function describeCount(digit, count) so that it returns a string
of the count followed by the digit.
For example, describeCount("1", 3) should return "31" since there are three
"1"s.

Next, implement the function describeNumberSequence(str), where str is a
number sequence, so that the function returns a string describing the count of
each group of identical digits in the number sequence.
For example, the string "1" has "one 1" and would be described as "11".
The string "11" is interpreted as "two 1s" which is described as "21".
The string "1211" is interpreted as "one 1, one 2, two 1s" which is described
as "111221".

Constraint: You must use describeCount as a helper function to
describeNumberSequence.
*/

function describeCount(digit, count) {
  // Your code here 
}

// console.log(describeCount("1", 1)); // "11"
// console.log(describeCount("1", 2)); // "21"
// console.log(describeCount("1", 3)); // "31"
// console.log(describeCount("7", 5)); // "57"

function describeNumberSequence(str) {
  // Your code here 
}

// console.log(describeNumberSequence("233")); //1223
// console.log(describeNumberSequence("1")); // 11;
// console.log(describeNumberSequence("1211")); // 111221;
// console.log(describeNumberSequence("34")); // 1314;

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  describeCount,
  describeNumberSequence,
};
