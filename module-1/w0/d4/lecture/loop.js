/*

  Loops

  Loops provide us a way to repeat behavior a set number of times.
  * We can use that behavior to progress through data structures and take a look at individual elements.
  * Loops consist of 3 main components:
    1. Initial Expression
    2. Condition for which we keep looping
    3. Step towards completing the loop/meeting the condition

  With loops we control the boundaries!
  There are may use cases of loops!
    * counting numbers
    * progressing through strings/arrays
      * we loop through these data types to get information
      * arrays can hold user information that we may need to access to print to the string

*/

//  1. Initial Expression
//  2. Condition for which we keep looping
//  3. Step towards completing the loop/meeting the condition
// ctrl + c - stop loop

let start = 0;
let end = 10;
let step = 2;

// for (let i = 0; i <= 10; i += 2) {
// for (let i = start; i <= end; i += step) {
//   console.log(i);
// }

let string = "anything";
// console.log(string.length);// 8

// console.log(string[0]);
// console.log(string[1]);
// console.log(string[2]);
// console.log(string[3]);
// console.log(string[4]);
// console.log(string[5]);
// console.log(string[6]);
// console.log(string[7]);
// let i = 4;
// console.log(string[i]);//

function iterateThroughString(string) {

  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let letter = string[i];
    newString += letter;
    console.log("letter", letter, "index", i, newString);
  }

  console.log(newString);
}

// iterateThroughString("anything");
// iterateThroughString('dog')


//  1. Initial Expression
//  2. Condition for which we keep looping
//  3. Step towards completing the loop/meeting the condition

// for(let i = 0; i < 5; i++) {
//   console.log(i);
// }

// * while loop
//  1. Initial Expression
// let i = 0;

//  2. Condition for which we keep looping
// while(i < 5){

//   console.log(i);
//   //  3. Step towards completing the loop/meeting the condition
//   i++;
// }


let num = 10;

while(true) {

  num++;
  if(num % 5 === 0) {
    console.log(num);
    break;
  }

}
