/*
Write a function pyramidArray(base) that takes in an array of numbers
representing the base of a pyramid. The function should return a two-dimensional
array representing the completed pyramid. To generate an element of the next
level of the pyramid, we sum the elements below and to the left and below and to
the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
            85
          37  48
        15  22  26
    5   10   12   14
  2   3    7    5    9
*/

// Your code here 

// let p1 = pyramidArray([2, 3, 7, 5, 9]);
// console.log(p1);
/*
[
  [ 85 ],
  [ 37, 48 ],
  [ 15, 22, 26 ],
  [ 5, 10, 12, 14 ],
  [ 2, 3, 7, 5, 9 ]
]
*/

// let p2 = pyramidArray([2, 2, 2, 2]);
// console.log(p2);
/*
[
  [ 16 ],
  [ 8, 8 ],
  [ 4, 4, 4 ],
  [ 2, 2, 2, 2 ]
]
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pyramidArray;
