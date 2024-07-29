/*



Space vs Time Complexity
  * Time deals with speed
    * How many operations are we dealing with
  * Space deals with memory
    * How much memory does a function require
    * What am I adding into array/object?
    * Space deals with reference data types
    * arrays and objects
    ! Usually more concerned about time as space is not an issues




  * OVERVIEW of BIG-O
  Big-O notation is used to describe the efficiency of algorithms with respect to the size of the input.
    * O - Order of
    * O - Theta

  Big picture ideas:
  1. function should be defined in terms of the size of the input
  2. Smaller Big-O function is more desireable than a larger one.
    * We want to use a minimal amount of time and space.
  3. Big-O describes the worst case scenario for our code
    * We don't think of best case or average case; Worst case
  4. Big-O function should be simplified to show only its most dominant mathematical term.
    Key Terms:
    n: the size of the input
    T(f): an un-simplified mathematical function
    O(f): the Big-O simplified mathematical function

    * Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input.

    Un-simplified	        Big-O Simplified
    T( 5 * n2 )	            O( n2 )
    T( 100000 * n )	        O( n )
    T( n / 12 )	            O( n )
    T( 42 * n * log(n) )	O( n * log(n) )
    T( 12 )	                O( 1 )

    * Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms.

    Un-simplified	        Big-O Simplified
    T( n3 + n2 + n )	    O( n3 )
    T( log(n) + 2n )	    O( 2n )
    T( n + log(n) )	      O( n )
    T( n! + 10n )	        O( n! )

  Growth is the rate at which the cost of the algorithm grows as the size of its input grows.
    * Simplify Products: if the function is a product of many terms, we drop the terms that don't depend on the size of the input.
    * coefficient -  -> 2n
      - drop coefficient

    * Simplify Sums: if the function is a sum of many terms, we keep the term with the largest growth rate and drop the other terms.
    * constant -     -> 3 + 2n
      - drop constants



  COMPLEXITY CLASSES:
  * There are 7 major complexity classes:

  Big-O	                    Complexity Class Name
  * O(1)	                      constant
  * O(n)	                      linear
  * O(n^3)                      quadratic

  * O(log(n))	                  logarithmic
  * O(n * log(n))	              log-linear, linearithmic, quasi-linear
  * O(nc) - O(n2), O(n3), etc.	polynomial
  * O(cn) - O(2n), O(3n), etc.	exponential
  * O(n!)	                      factorial

*/


function constant(n) {

  // 1 operations
  return n * 2 + 1;

};
// 1 + 1 = 1
// 1
// O(1)


//
function constant1(n) {
  // 1 + 100 + 1
  for(let i = 0; i < 100; i++) {
    //
    console.log(i);
  }
}

// 1 + 100 + 1 + 1 = 103
// O(1)




/*

  takes 1second to pack a box
  n = 1

  [-] - 1s

  n = 10
  [-][-][-][-][-][-][-][-][-][-] - 10s

  n = 100
  100s

  n

*/

// time complexity  - O(n)
// space complexity - O(1)
function linear(n) {

  // 1 + n + n
  for(let i = 0; i < n; i++){
    // 1
    console.log(i);
  };


};

// 1 + n + n
// O(n)
// time complexity  - O(n)
// space complexity - O(n)
function linear2(n){
  if(n === 1) return;


  linear2(n - 1);
}




/*


  takes 1 second to pack a box

  quadratic growth

  n = 1

  [ [-] ] = 1s


  n = 10
  n^2 = 100

[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s
[ [][][][][][][][][][] ] - 10s

n = 100
100^2 = 10000

linear growth
1 -> 10 => 100

quadr
1 -> 100 -> 10000 -> 1000000

*/



function quadratic(n) {
  // 1 + n + n
  for(let i = 0; i < n; i++) {

    // 1 + n + n
    for(let j = 0; j < n; j++) {

    }
  }
}

// (1 + n + n) * (1 + n + n)
//  (1 + 2n)   * (1 + 2n)
//  (n)   *   (n)
// n^2


/*

  n = 10

  n^3
  1 -> 10000 ->

*/


function cubic(n) {
  // 1 + n + n
  for(let i = 0; i < n; i++) {

    // 1 + n + n
    for(let j = 0; j < n; j++) {
    }
     // 1 + n + n
     for(let k = 0; k < n; k++) {

     }
  }
}


// O(n)
function function1(n) {
  // n
  for(let i = 0; i < n; i++) {

    // 1 + 100 + 100
    for(let j = 0; j < 100; j++) {

    }
  }
};

//  n * (201)
//  n


function function1(n) {
  // n
  for(let i = 0; i < n; i++) {
  };

   // n
   for(let i = 0; i < n; i++) {
  };
};

// n + n
// 2n
// n


function myFunc(n){
  let arr = [ ];

  for(let i = 0; i < n; i++){

  };

  return arr;
}



let arr = [1,2,3,4, 5];

function myPush(val) {

  arr[arr.length] = val;

  return arr.length;
}

// myPush(5)
// console.log(arr);


function shift() {

  for(let i = 0; i < this.length - 1; i++) {
    arr[i] = arr[i + 1];
  };
  
  return arr.length
}
