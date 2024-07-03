/*
Write a function pairsMaker(arr) that takes in a an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

// Your code here

function pairsMaker(arr) {
  let res = [];

  for(let i = 0; i < arr.length; i++){

    let number1 = arr[i];

    // console.log('outer loop',number1);
    for(let j = i + 1; j < arr.length; j++){
      let number2 = arr[j];
      // console.log('inner loop',number2);
      res.push([number1, number2]);
      // console.log(res);
    }
  }

  return res;
}



console.log(pairsMaker(["a", "b", "c", "d"]));
//=> [ [ 'a', 'b' ],
//     [ 'a', 'c' ],
//     [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'b', 'd' ],
//     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
