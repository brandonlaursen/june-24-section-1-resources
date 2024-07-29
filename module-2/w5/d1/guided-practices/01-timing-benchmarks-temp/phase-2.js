const [addNums, addManyNums] = require("./phase-1");


// Runs `addNums` in 10 increasing increments
// Time complexity - O(n)
// Space complexity - O(1)
function addNums10(increment) {
  // Fill this in
  let res = [];

  // 10
  for(let n = 1; n <= 10; n++) {

    // n
    res.push(addNums(n * increment));

  }

  return res;
}

// console.log(addNums10(10));


// Time complexity - O(n^2)
// Space complexity - O(1)
// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
   // Fill this in
   let res = [];

   // 10
   for(let n = 1; n <= 10; n++) {

     // n^2
     res.push(addManyNums(n * increment));

   }

   return res;

};



module.exports = [addNums10, addManyNums10];
