/*



  Arrays
  * Arrays are the most fundamental of all data structures.
  * A string, for example, is an array of characters in memory.
  * Arrays are the most time and space efficient way to store data

  * Definition: An array is a sequence of elements of the same type, stored in a contiguous block of memory
  ! JS arrays are not represented of all arrays in computer science
    * js do not have to have the same type

  * Not only are arrays the most space efficient method of data storage, they also allow the fastest method of access via indexing.
    * O(1) Access time - Thats fast!

  *Indexing formula (under the hood of .indexOf()):
    valueAddress = startAddress + index \* sizeof(dataType)

  * All three parts of this definition are required for O(1) indexing equation.
  * The reason that JavaScript arrays allow for different types is because they are actually hash tables (we'll get to those soon).
  * They contain a sequence of pointers (memory addresses) and each element's type is interpreted at runtime.

  let arr = [_ _ _ _ _ _ _];
  * Each index has its own memory address
  * Contiguous blocks of memory ->[01001001, 10100100, 01001001, 01001001, 01001001]
    Index -       0         1     2     3     4     6     7
      arr = [ StartAddress  _     _     _     _     _     _   ];


  Dynamic Arrays

  JavaScript under the hood automatically resizes arrays for us
  * High-level languages like Python, JavaScript and Ruby come with built-in functions to add and remove array values automatically.
    * there are cost however
  * whenever an arrays length reaches a certain length
  * JS will allocate empty spaces for the array in anticipation of new values

  JS Resizing
  * whenever an array needs more memory
  * each value must be copied from the old memory to the new memory location one at a time making it in O(n) operation
    * n being the size of the array
    * large arrays means it a slow process



  arr = [ <empty>,<empty>,<empty>,<empty> ]
  arr.push(1);
  arr = [ 1,<empty>,<empty>,<empty> ]
  arr.push(2)
  arr = [ 1, 2, <empty>,<empty> ]
  arr.push(3)
  arr = [1,2,3 <empty>]
  arr.push(4);

  arr = [1,2,3,4][<function>]
  arr.push(5);

  arr = [ 1,2,3,4, <empty>,<empty>,<empty>,<empty>]

  arr.push(5,6,7,8);
  arr = [ 1,2,3,4, 5,6,7,8 ];
  arr.push(9);
  arr = [ 1,2,3,4, 5,6,7,8,  <empty>,<empty>,<empty>,<empty>, <empty>,<empty>,<empty>,<empty> ]

  arr =[1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,
  10,1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,]

  arr = [1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,
  10,1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  1,2,3,4,5,6,7,8,9,10,
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>
  <empty>,<empty>,<empty>,<empty>

  ]
  arr = [a,b,c,d, e]

  arr = [1,2,3,4, 5]

  memory [  A b c d <function> - - - - - ]

  memory [  1 2 3 4 <e> <e> <e> <e> <e> <e> <e> <e> <e>
            a b c d  - - - - - - - - - - -
  ]

  memory [ obj - - - - -
           - - - - obj2  ]
  obg -> obj2


*/


// let arr = new Array(8);
// console.log(arr);
// arr.push(1);
// console.log(arr);
