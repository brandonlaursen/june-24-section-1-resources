/*


  What is a function?
  * A function is a procedure of code that will be run when called
  * writing function is know as a function declaration/definition
  * create reusable logic - do not have to repeat the same line codes
  * logic to be ran to output a value

  Javascript reads top to bottom
  * functions are read till its invoked/called

  Three things to remember about return statements
  * every function call evaluates to its return value
  * Every function returns undefined unless a return is specified
  * Once a return statements is encountered, the function will stop and return the value, any code below the return will not be ran

  Declaring the function

*/


// Declaring the function
function myFunc() {

  // console.log('entering myFunc');
  return true;
}


// calling/invoking the function
// I want to see what this func evals too?
// console.log(myFunc());// undefined
let result = myFunc();
// console.log(result);// true



// parameters are passed where the function is defined
// let firstName = 'maica'
// let lastName = 'santos'
// * input - arguments
// * output - return value
// write logic to get a input to an output
function printName(firstName, lastName){

  // console.log('entering printname');
  console.log(firstName, lastName);
  return firstName + ' '+ lastName
  // console.log('anything below a return is not going reached ');
};


// function call/invocation
// this is where there arguments are passed
// console.log('return value of printNames ====>',printName('brandon', 'laursen'));//brandon laursen
// printName('brandon', 'laursen')
// console.log(printName('maica', 'santos'));//maica santos


function addTwo(num) {
  // console.log(num);
  let result = num + 2;
  console.log('===>',result);// 7
  return;

};

// console.log(addTwo(5));//7
// console.log('function return value',addTwo(15));//17

// let returnVal = addTwo(10);
// console.log(returnVal);

// test specs
// addTwo(5) expecting output of 7

// word = [1,2,3]
function lastLetter(word){
  // console.log(word);// anything
  // console.log(word.length);// 8
  // console.log(word[word.length - 1]);// g
  // studio[5] =

  //[1,2,3][2] = 3
  return word[word.length - 1]
}


// console.log(lastLetter('anything'));// g

// result2
// let result2 = lastLetter('anything') + lastLetter('studio');
console.log(lastLetter([1,2,3]));

// console.log(result2);

// for(let i = 0; i< 0; i++ ){

// }
