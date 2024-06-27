/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

// Your code here


// function logBetween(lowNum, highNum){

//   // -1 <= 2
//   // 0 <= 2
//   // 1 <= 2
//   // 2 <= 2
//   // ! 3 <= 2
//   // while(low <= high) {
//   //   console.log(low);
//   //   low++;
//   // };

//   // for (let i = low; i <= high; i++) {
//   //   console.log(i);
//   //   // return console.log(i);
//   //   // return;
//   // }
//   for (let range = lowNum; range <= highNum; range++) {
//     console.log(range);
// }

//   // return console.log(i);
// }

function logBetween(num1, num2) {

  for (let i = num1; i <= num2; i++) {
    console.log(i);
  };

  // return i;

  // let j = 0;
  // while(j < 10){
  //   console.log(j)
  //   j++
  }
// }

console.log(logBetween(-1, 2));

// logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
