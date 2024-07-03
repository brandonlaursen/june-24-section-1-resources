/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  let result = [];
  let max = -Infinity;

  for (let i = 0; i < matrix.length; i++) {
    // console.log('re-entering outloop',max);
    
    for (let j = 0; j < matrix[i].length; j++) {
      let number = matrix[j][i];
      // console.log("====>", number);

      if (number > max) {
        max = number;
      }
    }
    // console.log('exiting outer loop',max);
  }

  return max;
}

matrix = [
  [11, 2, -99],
  [20, 19, 10],
  [47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
