/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

// function is called it is added to the call stack
// function is returned it is removed from the call stack
// the function at the top of call stack will be the function currently being executed



function range(start, end, result = []) {

  if (end <= start) return result;

  // return [start].concat(range(start + 1, end));// option 1

  // result.push(start);
  // let recurse = range(start, --end);
  // return range(start + 1, end, result);

  // return [start, ...range(++start, end)]
  return [...range(start, --end), end]

  // recurse.unshift(start);
  // result.push(start);
  // recurse.push(start);
  // return recurse;

};

/*
  Top of stack


  range(5, 5) =>  []
  range(4, 5) => [4].concat(   []    )  =   [4];
  range(3, 5) => [3].concat(   [4]   )  =   [3,4];
  range(2, 5) => [2].concat(   [3,4] )  =   [2,3,4];
  range(1, 5) => [1].concat( [2,3,4] )  =   [1,2,3,4]
  Bottom of Stack
*/

// console.log([1,2,3,4]); // [1, 2, 3, 4]
console.log(range(1, 5)); // [1, 2, 3, 4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
