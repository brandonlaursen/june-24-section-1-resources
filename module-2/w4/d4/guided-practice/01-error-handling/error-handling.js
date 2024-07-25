



// TypeError:
// 1.
function sum(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch(e) {
    // type
    console.log(e.message);
  }

  return sum;
}

// let res = sum(null);
// console.log(res);

// 2.

function sayName(name){

  if(typeof name !== 'string') {
    throw new TypeError("Invalid name! Must be a string!")
  }
  console.log(name);
}
// tests

// sayName(1);

try {
// sayName("Alex");
// sayName(1);
} catch(e) {
  console.log(e.message);
}

// console.log('do we make it?')
// Your code here

// 3.
function greet(greeting) {
  // console.log(greeting)
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}


try{
  // greet('hello');
  greet(greeting);
} catch(error) {
  console.log('hello world');
}
