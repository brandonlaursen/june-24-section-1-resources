/*


  Call Stack!
    * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function is at the top stack, it is the function currently being executed
    * stack data structure
      * EX: Stack of plates
    * first in last out
    * when a function is called, it is pushed on the call stack
    * when a function is returned, it is popped off the call stack


*/

function myFunc(num){

  return num + 10
};

console.log(myFunc(12))

function addTwo(num){
  return num + 2;
};

// functions must first evaluate to there return value before adding the result together and storing them in a variable
// this is the premise of recursion
// we can only start removing values from the call stack when we have a return value that is not a function call
let expression = addTwo(10) + addTwo(20);
console.log(expression);
console.log(addTwo(10) + addTwo(20))

// Observe stack
// * Can watch stack using debugger

function foo() {
  console.log("a");
  debugger;
  bar();
  console.log("e");
}

function bar() {
  console.log("b");
  debugger;
  baz();
  console.log("d");
}

function baz() {
  debugger;
  console.log("c");
}

foo(); //a,b,c,d,e

function test(){
  return true;
  return test;
  return test();
}

// function evaluates to its return
console.log(test());//


// Iterating an arbitrary amount of time
// * we control the boundaries of a loop
// * Start - we are starting at the 0th index
// * Stop - we stop when the condition is no longer true: i < 3
// * Step - we works towards the condition using i++
for (let i = 0; i < 3; i++) {
  console.log("i: ", i);
}


// passing return value back up call stack
function recurse(num){
  if(num === 0) return 'stop recursing';

  console.log(num);

  return recurse(num - 1);
  // recurse(num - 1)
}

recurse(3)
