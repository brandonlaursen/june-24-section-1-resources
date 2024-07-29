





// Adds up positive integers from 1-n
// Time complexity? = O(n)
function addNums(n) {
  // Fill this in

  // 1
  let sum = 0;

  // 1 + n + n
  for(let i = 0; i <= n; i++){
    // 1
    sum += i;
  };


  // 1
  return sum;
}
// (1) + (1 + n + n) + 1 + 1
// n


// 1 + 2 + 3 + 4 + 5 = 15
// console.log(addNums(5));  // 15

// Adds up values of addNums(1) through addNums(n)
// Time complexity = O(n^2)
function addManyNums(n) {

  // 1
  let sum = 0;

  // 1 + n + n
  for(let i = 0; i <= n; i++){
    // 1 + n
    sum += addNums(i);
  }

  // 1
  return sum;
};
// 1 + (1 + n + n) * (1 + n + n) + 1
// 1 + (1 + 2n)  * (1 + 2n) + 1
// 2 + (n)  * (n)
// 2 + n^2
// n^2


// console.log(addManyNums(3));  // 10


module.exports = [addNums, addManyNums];
