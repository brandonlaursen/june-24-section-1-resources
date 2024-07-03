/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.


  Input:
  matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15],
];
  output: [12, 19, 21]

  col - top to bottom
  row - left to right

  Plan
  1. define var for height - matrix.length
  2. define var for width - matrix[0].length
  3. define newArr to store max values
  4. iterate up to the width
    a. define a variable for the max value
  5. iterate up to the height
    a. define a variable for current num
    b. conditional to check if current num is larger than are max value
      a. if it reassign the max value
    6. push max value into our newArr
  6. return newArr
*

*/

function maxColumn(matrix) {
  // Your code here
  let height = matrix.length;
  let width = matrix[0].length;
  let newArr = [];

  for(let i = 0; i < width; i++) {
    // let colMax = matrix[0][i];
    let colMax = -Infinity;
    // console.log('re-entering outloop',colMax);

    // while(j< height)
    for(let j = 0; j < height; j++) {
      let number = matrix[j][i];
      // console.log('====>',number);
      if(number > colMax) {
        colMax = number;
      }
    }
    // console.log('exiting outer loop',colMax);
    newArr.push(colMax);
  };

  return newArr;
}

matrix = [
  [-5, 9, 21],
  [-9, 19, 6],
  [-12, 14, 15],
];

// console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
