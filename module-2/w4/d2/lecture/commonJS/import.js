// const calculator = require('./export');

const { add, subtract, multiply } = require("./export");

// const { half } = require("./folder-module/half");

// const { half } = require('./folder-module/half')

// console.log(half);

// console.log(half(10));
// console.log(calculator);

// const [func1, func2, func3] = require('./export');

// console.log(func1, func2, func3);
// let add = calculator.add;
// let subtract = calculator.subtract;
// let multiply = calculator.multiply;

// console.log(add); // [Function: add]

/* {
  add: [Function: add],
  subtract: [Function: subtract],
  multiply: [Function: multiply]
}
*/

const { modulo } = require("./folder-module");

console.log(modulo); // [Function: modulo]
