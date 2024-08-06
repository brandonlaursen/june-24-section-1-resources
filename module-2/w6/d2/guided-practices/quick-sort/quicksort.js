function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];// 2
  let left = [];//[1]
  let right = [];//[4, 6, 8, 3, 5, 7, 9]

  // Orient the pivot so that...
  // every number smaller than the pivot is to the left


  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    // every number larger (or equal) than the pivot is to the right
    if (num >= pivot) {
      right.push(num);
    } else {
      // every number smaller than the pivot is to the left
      left.push(num);
    }
  }

  // Recursively sort the left
  // let leftSort = quicksort(left);//[1]

  // // Recursively sort the right
  // let rightSort = quicksort(right);// [3, 4 ,5, 6, 7, 8, 9]

  // Return the left, pivot and right in sorted order
  //  [1, 2, 3, 4 ,5, 6, 7, 8, 9]
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// console.log(quicksort([2, 4, 6, 8, 1, 3, 5, 7, 9])); //

/*

  pivot = 2
  left = [1]
  right = [4,6,8,3,5,7,9]


                         [7] 8 [9]
                   [5] 6 [8,7,9]
            [3] 4 [6,8,5,7,9]
  [1]  2  [4,6,8,3,5,7,9]
  [2,4,6,8,1,3,5,7,9]




  [1,2,3,4,5,6,7,8,9]
  [2,4,6,8,1,3,5,7,9]


  [2,4,6,8,1,3,5,7,9]

  linear
  n = 9

  log
   [4,6,8,3,5,7,9]
   [6,8,5,7,9]
   [8,7,9]
   [9]

   4

   log linear





















               [1, 2, 3, 4 ,5, 6, 7, 8, 9]

          [2, 4, 6, 8, 1, 3, 5, 7, 9] =>  [1, 2, 3, 4 ,5, 6, 7, 8, 9]




*/

module.exports = [quicksort];
