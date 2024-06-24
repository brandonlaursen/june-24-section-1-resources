# `Week 6 Day 1`

- Assessment
- Sorting Discussion
- Bubble Sort Practice
- Insertion Sort Practice
- Selection Sort Practice


## `Why do we sort?`
  * makes data easier to manipulate
  * we can search sorted data much easier
    * inserting, deleting, searching
    * ex: binary search requires a sorted data structures

### Today we are learning naive sorts - O(n^2)
    * bubbleSort
    * insertionSort
    * selectionSort

### Niche use cases
  * May only come up in coding interviews
  * there are faster sorts
    * Quick sort + Merge sort - we will learn tomorrow
  * Useful when
    * array is already in ascending order
    * data is already somewhat sorted
    * working with small data sets

### Tips for learning sorting algos
  * Draw out the data flow
  * Walk through code line by line
  * Use visualizers to see how data moves
    * https://visualgo.net/en

### Get comfortable with
    * Swapping
    * Shifting

### Swapping
```JS
let arr = [0, 1, 2, 3];

// * Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

// console.log("ES5", arr); // [ 0, 2, 1, 3 ]

arr = [0, 1, 2, 3];

// * Swap two values with destructured array assignment
// * ES6

[arr[1], arr[2]] = [arr[2], arr[1]];

// console.log("ES6", arr); // [ 0, 2, 1, 3 ]
```
### Shifting
```JS
// * shift back to front
// * avoid overwriting values
const arr1 = [0, 1, 2, 3];
const arr2 = [0, 1, 2, 3];

// If you want to shift the array to the right by 1...

// ! Shifting from front to back will overwrite all values
for (let i = 1; i < arr1.length; i++) {
  // [0, 1, 2, 3]
  // [0, 0, 2, 3]
  // [0, 0, 0, 3]
  // [0, 0, 0, 0]
  arr1[i] = arr1[i - 1];
}

// console.log("BAD SHIFT", arr1); // [ 0, 0, 0, 0, 0, 0 ]

// * Instead, start from the back and shift backwards
for (let i = arr2.length - 1; i > 0; i--) {
  // [0, 1, 2, 3]
  // [0, 1, 2, 2]
  // [0, 1, 1, 2]
  // [0, 0, 1, 2]
  arr2[i] = arr2[i - 1];
}
```

## Bubble Sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array is sorted, the algorithm checks each adjacent pair and hence the best-case time complexity will be the same as the worst-case.
  * Space complexity -
    * O(1) - In place

  BubbleSort Pseudocode
  * Walk through the entire array, comparing each adjacent pair.
  * If they are out of order, swap their positions.
  * Keep doing this until the entire array is sorted.
  * Each pass will sort the array a bit more, with the larger values "bubbling up" to the top.

## `Practice: Bubble Sort 30m(SOLO)`

## `Bubble Sort Walkthrough`


## `Insertion sort`
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n) <- possible if already sorted depends on implementation
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place

### Insertion sort Pseudocode
    * similar to sorting playing cards
    * great to work with linked list
    * real world example - file search, data compression, path finding

### Make sure to make a copy
    * how can we make a copy?
    * how can we can add null to the end of an array? push null
    * iterate backwards and shift things to the right


## `Practice: Insertion Sort 30m(SOLO)`

## `Insertion Sort Walkthrough`


## Selection sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array has already been sorted, our algorithm looks for the minimum in the rest of the array.
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place
## `Practice: Selection Sort 30m(SOLO)`

## `Selection Sort Walkthrough`
