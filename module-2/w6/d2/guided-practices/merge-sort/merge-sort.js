



// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if(arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  let midPoint = Math.floor(arr.length / 2);// [2,4]


  let left = arr.slice(0, midPoint);// [ 2, 4, 6, 8 ]  -> [2,4]  -> [2]

  let right = arr.slice(midPoint);// [1, 3, 5, 7, 9]   -> [6,8]   -> [4]
  // Merge the halves together and return

  // Recursively sort the left half
  const leftSorted = mergeSort(left);//
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // console.log(leftSorted, rightSorted);
  // return [...leftSorted, ...rightSorted]
  return merge(leftSorted, rightSorted);
}

// console.log(mergeSort([2, 4, 6, 8, 1, 3, 5, 7, 9]));


// Takes in two sorted arrays and returns them merged into one
/*
  a = [ 2, 4 ]
               ^
  b = [ 6, 8 ]
               ^

 */
function merge(arrA, arrB) {
  // Create an empty return array
  let arr = [];// [2, 4, 6, 8]

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;

  // While there are still values in each array...
  while(indexA < arrA.length || indexB < arrB.length) {
  // Compare the first values of each array
    if(indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      arr.push(arrB[indexB]);
      indexB++;
    } else {
      arr.push(arrA[indexA]);
      indexA++;
    }

  }

  return arr;
  // Add the smaller value to the return array
  // Move the pointer to the next value in that array
  // Return the return array
}

// console.log(merge([ 2 ], [ 4 ]));

// console.log(mergeSort([2, 4, 6, 8, 1, 3, 5, 7, 9]));
/*






                     [2,4,6,8]  [1,3,5,7,9]
                              ^          ^
                      [1, 2, 3, 4, 5, 6, 7, 8, 9]


                        [1, 2, 3, 4, 5, 6, 7, 8, 9]

                        [2,4,6,8,1,3,5,7,9]


*/

module.exports = [merge, mergeSort];
