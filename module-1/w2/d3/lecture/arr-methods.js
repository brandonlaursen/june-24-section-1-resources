/*

   Array Methods

   What are array methods?
    * Array methods are functions built-in to JavaScript     Array.forEach()
    * Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
    * Allow us to perform commonly used calculations/functions
    * quality of life
    * array methods iterate under the hood to pass each element of an array to a callback function

   What is a callback function?
    * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
    * Implementation of array methods are abstracted under the hood
      ** We do not need to explicitly provide a start, condition, and step
      ** It is implied you want to reach every element when using these array looping methods

   Array methods!
    * .forEach
    * .map
    * .filter
    * .reduce
    * .find
    * and many more!
  */

// 1. forEach
// * The forEach() method executes a provided function once for each array element.
// * We use forEach when we want a connivent/quick way to write a for loop
// ! you cannot return

let animals = ["tiger", "lion", "hippo", "monkey"];

for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  // console.log(animal);
}

// animals.forEach(function () {});
// 4
// ["tiger", "lion", "hippo", "monkey"].forEach(   (monkey) => { console.log(monkey) }       )
// pass every element under the hood to the callback
// index will automatically start at 0, this happens under the hood
// its going to increment index each time by one, this happens under the hood
// its going to iterate up the length of the array, happens under the hood
// the calling of the callback function, happens under the hood
// the parameter in the callback, is the element in the array[i], under the hood

function myFunc() {
  // let res = [];
  let bool = false;

  animals.forEach((animal) => {
    console.log(animal);
    // res.push(animal);
    // return false;
    // break
    if (animal === "lion") {
      // return false;
      bool = true;
    }
  });

  // console.log(res);
  return bool;
}

// console.log(myFunc());

let numbers = [1, 2, 3, 4];

// element, index, array
// let sum = 0;

// [5,6,7,8,9].forEach(function(num, i, arr) {
//   // num + 1
//   // console.log(num, i, arr);
//   // arr[i] += 1;
//   sum += num;
// })

// console.log(numbers);// [ 6, 7, 8, 9, 10 ]
// console.log(sum);// 35

let result = numbers.forEach(function (num, i, arr) {
  // num + 1
  // console.log(num, i, arr);
  // arr[i] += 1;
  // sum += num;
  // numbers.splice(0,1)
});

// console.log(result);// undefined

let arr = [1, 2, 3];
let sum = 0; // 6
// i =0; i < arr.length; i++;
// i = 2
// num = 3 | i = 2 | arr = [1,2,3]
arr.forEach(function (num, i, arr) {
  sum += num;
});


// console.log(sum);

function myFunc(num, i, arr) {}

// myFunc(1, 0, [1,2,3]);

[1, 2, 3].forEach((_, i) => {
  console.log(i, _);
});
