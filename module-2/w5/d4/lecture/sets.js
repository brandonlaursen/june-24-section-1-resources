/*




  Sets
  * The name "set" comes from mathematics. In mathematics, a set is a well-defined collection of distinct elements or members. In computer science a set is an abstract data type which is used to store a collection of unique, unordered values.

  Properties of a set
    Sets have three important properties that will tell you when they are appropriate to use:
    * A set contains no duplicate elements
    * A set's elements are unordered
    * A set can check if an element is contained in O(1) time

  Syntax
  * const set = new Set(iterable);
  * iterable - strings and arrays



*/

let numbers = [1, 2, 2, 3, 3, 4, 5, 6];

const numbersSet = new Set(numbers);

console.log(numbersSet); // Set(6) { 1, 2, 3, 4, 5, 6 }

// .includes === .has
console.log(numbersSet.has(1)); // true

// delete
numbersSet.delete(2);
console.log(numbersSet); //  { 1, 3, 4, 5, 6 }

// .length === .size
console.log(numbersSet.size);

// push === add
numbersSet.add(7);
// numbersSet.add(7);
console.log(numbersSet);

// clear the set
// numbersSet.clear();
// console.log(numbersSet);

const uniqueVals = [
  ...new Set([
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3],
  ]),
];
console.log(uniqueVals); //[ 1, 2, 3 ]

// console.log(numbersSet.delete(1));
