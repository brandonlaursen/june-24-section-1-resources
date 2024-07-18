/*

  setTimeout

  What is a setTimeout?
    * The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
    * setTimeout(callbackFunction, delayInMilliseconds, param1, param2);
    * you can pass anon callback to a setTimeout

  What does a setTimeout return?
    * The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout

*/

// setTimeout(callbackFunction, delayInMilliseconds, param1, param2);

// console.log(global);

// global.setTimeout(console.log, 5000, 'wazzzup!');

// setTimeout(console.log, 5000, 'wazzzup!');

function time() {
  console.log("time is up!");
}

// setTimeout(time, 4000);

// setTimeout(() => {
//   time();
// }, 4000);

function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

// setTimeout(
//   (name1, name2) => {
//     sayHi(name1, name2);
//   },
//   3000,
//   "brandon",
//   "maica"
// );

// setTimeout(sayHi, 3000, "brandon", "maica");

// let name = 'brandon';

// let timer = setTimeout(console.log, 4000, `annoying ad`, );

// // console.log(timer);//
// // clearTimeout(timer);

// let membership = true;

// if(membership) {
//   clearTimeout(timer);
// }




// fib
function somethingSlow(n) {
  if (n === 1 || n === 2) return 1;

  return somethingSlow(n - 1) + somethingSlow(n - 2);
}

function foo() {
  console.log("food");
}

function bar() {
  console.log("bark");
  baz();
}

function baz() {
  console.log("bazaar");
}

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// * tree recursion
// console.log(somethingSlow(50));// doesnt matter
// Predict the order of what will be outputted??
// no need to write what something slow will actually print








function delayedPrinter(delaysArr) {

  
}
