/*
Define a function called variableAsKey that accepts an object parameter and a
string parameter and returns the value from the object at the key of the string
passed in.
*/

// Your code here

// Example:
const obj = {
  first: "1",
  second: 2,
  third: "three"
}

// string => str => "first"
// string => 'second'
function variableAsKey(obj, string) {

  // console.log(str, string);
  // console.log(obj, string);// { first: '1', second: 2, third: 'three' } first

  // obj['second']
  return obj[string];

}


const str = "first";
// console.log(str);
// console.log(string);
// console.log(variableAsKey(obj, str)); //=> "1"
// console.log('between function calls');
// console.log(variableAsKey(obj, 'second')); //=> "2"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = variableAsKey;
} catch {}
