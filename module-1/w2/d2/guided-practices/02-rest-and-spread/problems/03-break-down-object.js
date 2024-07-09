/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/



function breakDownObj(object) {

  // console.log(object);// { name: 'Rupert', age: 5, speak: 'Meow' }
  // get all the keys
  let keys = Object.keys(object);
  // console.log(keys);// [ 'name', 'age', 'speak' ]
  // get all the values
  let values = Object.values(object);
  // console.log(values)// [ 'Rupert', 5, 'Meow' ]

  let keysAndValues = [...keys, ...values];
  // console.log(keysAndValues);// [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

  // return keysAndValues;

  return [...Object.keys(object), ... Object.values(object)];
}

console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// console.log(breakDownObj(
//   { location: 'NY', borough: 'Brooklyn' }
// )); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
