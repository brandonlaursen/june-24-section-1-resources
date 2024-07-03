/*
Arrays: Use what you have learned about arrays to complete the problem below.

Implement a solution so that all test specs pass when you run the following
command in your terminal:
npm test test/06-extract-initials-spec.js
*/

// Define a function called extractInitials that takes in a string. Return a new
// string consisting of the first letter of every word in the argument string,
// uppercased.
// Eg: If the input string is 'john smith', then the function should return a
// string of 'JS'.

function extractInitials(string) {

  //  [ 'John', 'Fitzgerald', 'Kennedy' ].map()
  //  ['J','F','K']
  //  'JFK'
  // return string.split(' ').map(name => name[0].toUpperCase()).join('');

  let initials = "";

  let names = string.split(" ");
  // console.log(names);// [ 'John', 'Fitzgerald', 'Kennedy' ]

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    // console.log(name, name[0]);
    let inital = name[0].toUpperCase();
    // console.log(inital);

    initials += inital;
  }

  return initials;
}

// console.log(extractInitials('John Fitzgerald Kennedy'))// should return 'JFK
// console.log(extractInitials('michael jackson'))// should return 'MJ'
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = extractInitials;
