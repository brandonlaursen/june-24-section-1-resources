# `Week 6 Day 2`

- Quicksort Practice
- Merge Sort Practice
- Binary Search Practice


## `Quick sort`
  * Just like Merge Sort, Quick Sort uses a divide and conquer strategy.

### The key ideas of Quick Sort are:
  * 1. It is easy to sort elements of an array relative to a particular target value.
  * 2. An array of 0 or 1 elements is already sorted


### Time Complexity
  Best case: O(n log(n))
  * First, we’ll divide the array into two sub-arrays recursively, which will cost a time complexity of O(log n).
  * For each function call, we are calling the partition function, which costs O(n) time complexity.
  * Hence the total time complexity is O(nlogn).

### Worst case: O(n^2)
  * When the array is sorted in descending order or all the elements are the same in the array, the time complexity jumps to O(n²), since the sub-arrays are highly unbalanced.

### Space complexity
  * O(n) - proportional to size of call stack

### This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves

### Use cases
  * In computer graphics, QuickSort is used for image rendering.
  * Data visualization.
  * In numerical computations, QuickSort is used for matrix sorting.

 When the partitioning algorithm always chooses the middle element or near the middle element as the pivot

## `Practice: Quicksort (SOLO, 30m)`

## `Quicksort Walkthrough`


## Merge sort
  * Merge sort is the first of the efficient algorithms you will learn.

  * Merge sort operates with a much better time complexity than the more naive approaches we started with.

### The main ideas of merge sort are:
  * 1. It is easy to merge elements of two sorted arrays into a single sorted array
  * 2. You can consider an array containing only a single element as already sorted
  * 3. You can also consider an empty array as sorted

### Time Complexity
  * Best case: O(n log n)
  * Worst case: O(n log n)
## Space complexity
  * O(n) - proportional to size of call stack

This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves
## `Practice: Mergesort (SOLO, 30m)`

## `Mergesort Walkthrough`

## `Logarithm`

![big-o-comparison](./big-O-chart.svg)

// * Linear search
// return index of target
function linearSearch(arr, target) {

  // ? Can you solve this in one line?
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) return i;
  // }
  // return -1;
  //

  return arr.indexOf(target);
};

// linearSearch([2,4,6,8], 6);  // 2
// linearSearch([2,4,6,8], 10);  // -1


/*

## What is a Logarithm?
  * inverse of an exponent
  * super-efficient
  * The logarithm base-n of a number is how many times it must be divided by n to reach 1

### Exponents
```
    * 2^5 === 2 * 2 * 2 * 2 * 2 = 32
      ? 2 multiplied by itself 5 times is 32
```
### Logarithm
  * log base(n)
  * log2(32) = 5
    * How many times would we need to divide 32 by 2 to equal 5

### Binary search
  * finding an item from a sorted list of items
  * Time complexity
    * Average - O(log n)
    * Best - O(1) <-  find it first try
  * Space complexity: O(N)
  * Divide and conquer

Binary Search utilizes the divide and conquer approach.
  * You've already used this without even knowing...
          ex: Phone books, dictionaries, etc.
  * Binary search method first looks at the midpoint of a SORTED array, and then checks to see if that element is greater than, less than, or equal to the element you are looking for.


### In order to perform a binary search in logarithmic time, your data must satisfy two conditions.
  * 1.Data must be sorted
  * 2.Data can be accessed by index in constant time
```
  Binary search logarithm
   * A binary logarithm is a base-2 logarithm
    log2( 1 )    = 0     |      2 ** 0   // 1
    log2( 2 )    = 1     |      2 ** 1   // 2
    log2( 4 )    = 2     |      2 ** 2   // 4
    log2( 8 )    = 3     |      2 ** 3   // 8
    log2( 16 )   = 4     |      2 ** 4   // 16
    log2( 32 )   = 5     |      2 ** 5   // 32
    log2( 64 )   = 6     |      2 ** 6   // 64
    log2( 128 )  = 7     |      2 ** 7   // 128
    log2( 256 )  = 8     |      2 ** 8   // 256
    log2( 512 )  = 9     |      2 ** 9   // 512
    log2( 1024 ) = 10    |      2 ** 10  // 1024

    Math.log2(2);    // 1
    Math.log2(4);    // 2
    Math.log2(8);    // 3
    Math.log2(16);   // 4
    Math.log2(32);   // 5
```
  O(log n) - logarithmic growth
  * Logarithmic curves grow so slowly that they are virtually constant.
  * slower than O(1) - constant
  * faster than O(n) - linear
## `Practice: Binary Search (SOLO, 30m)`

## `Binary Search Walkthrough`

## `Custom Sorting Project (PAIRED)`

## `Homework`

When you are finished with the long practice start on tonights homework, trees are a big subject that deserve a lot of thought
