
/*

  Closures

  What is a closure?
    * A closure is the combination of a function and the lexical environment within which that function was declared.
    * A closure is when an inner function uses, or changes, variables in an outer function

  Basic closure rules
    * Closures have access to any variables within its own, as well as any outer function's, scope when they are declared.
    * A closure will keep reference to all the variables when it was defined even if the outer function has returned.

  Advantages of closures
    * private state
      ** data encapsulation
      ** security
    * currying

  Disadvantages to closures
    * Memory intensive - variables are not garbage collected because they are stored in the lexical environment

  Lexical environment
    * Anytime a function is defined a lexical environment is created
    * Lexical environments consist of all the variable defined and where they were defined

*/




function myFunc() {

  function myFunc2() {

  }

  // return 12
  // return true;
  return myFunc2;
}

// console.log(myFunc());


let myFunc3 = () => {
  return 12;

}

let number = myFunc3();
// console.log(number);// 12

function elephantCollector(){
  let elephants = ['dumbo'];

   return function inner(name) {
      elephants.push(name);
      return elephants;
    };

    // return inner;

    // return inner;
    // return (name) => {
    //   elephants.push(name);
    //   return elephants;
    // }
}

// console.log(elephantCollector);// [Function: elephantCollector]

// console.log(elephantCollector());// [Function: inner]
// let elephantParade2 = function inner(name) {
//   elephants.push(name);
//   return elephants;
// };
// console.log(elephantParade1());// [ 'dumbo', undefined ]

// console.log(elephantCollector()('zou'));// [ 'dumbo', 'zou' ]

// private state 1
/*
  elephantCollector : {
    elephants: ['dumbo'];
    inner: function
    inner: {
      elephants: ['dumbo']
      name: 'undefined'
    }
  }

  elephantParade1: {
      elephants: ['dumbo', 'funkfreed']
      name: 'funkfreed'
    }

  elephantParade2: {
      elephants: ['dumbo', 'jack']
      name: 'jack'
    }

*/

// let elephantParade1 = elephantCollector();//
// console.log(elephantParade1('funkfreed'));// [ 'dumbo', 'funkfreed' ]

// // private state 2
// let elephantParade2 = elephantCollector();
// console.log(elephantParade2('jack'));// [ 'dumbo', 'jack' ]

// let variable= 'string';



function createCounter() {

  let count = 0;

  return function inner() {
    count++;
    console.log(count);
    if(count === 3) {
      return count
    } else {
      return inner;
    }
  }
}


let counter1 = createCounter();
// console.log(counter1);
console.log(counter1());
console.log(counter1());
console.log(counter1());

// console.log(createCounter);// [Function: createCounter]
// console.log(createCounter());// [Function (anonymous)]
/*
let counter1 = function() {
    count++;
    return count;
  }
*/
// console.log(counter1);// [Function (anonymous)]

// console.log(counter1());// 1
// console.log(counter1());// 2
// console.log(counter1());// 3

console.log('========')
let counter2 = createCounter();
/*
let counter2 = function() {
    count++;
    return count;
  }
*/

// console.log(counter2());// 1
// console.log(counter2());// 2
// console.log(counter2());// 3
