/*

 Imports and exports/common js modules

 Common JS Modules
  * In Node.js, each JavaScript file defines a module.
  * Think of modules like an object - {}
  * can see the object if you console.log(module)
  * think about node_modules
    * They are downloaded using npm install which installs dependencies within in the package.json
    * Which then allow to import code from other files or Modules

  * Exporting

*/




function add(num1, num2) {

  return num1 + num2;
}

function subtract(num1, num2) {
  return num2 - num1
}

function multiply(num1, num2) {
  return num1 * num2
}


// module.exports = {
//   add: add,
//   subtract: subtract,
//   multiply: multiply
// };

module.exports = {
  add,
  subtract,
  multiply,
};


// module.exports = add;

// module.exports = [add, subtract, multiply];


// console.log(module);
