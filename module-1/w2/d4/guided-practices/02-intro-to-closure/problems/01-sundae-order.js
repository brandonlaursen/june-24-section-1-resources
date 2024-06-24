/*
Implement the `sundaeOrder()` function. This function should return another
function that accepts a string (`topping`) to add to the sundae. 
A sundae will start off with a default "A bowl of ice cream with hot fudge".
Each incoming topping should be separated by "and". The function skeleton has
already been created for you - your job is to fill in the missing logic.

Look at the example test cases to see how this function is invoked:
*/

function sundaeOrder() {
  // Your code here 

  return function (topping) {
    // Your code here 
  };
}

// const sundae1 = sundaeOrder(); // => returns a function
// console.log(sundae1("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
// console.log(sundae1("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

// const sundae2 = sundaeOrder(); // => returns a function
// console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = sundaeOrder;
} catch {}
