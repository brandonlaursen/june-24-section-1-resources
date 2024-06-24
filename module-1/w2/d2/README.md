# `Week 2 Day 2`

- Reference vs Primitives Demo
- Callbacks Demo
- Callbacks Practice
- Rest and Spread Demo
- Destructuring Demo

## `Reference vs Primitive`

### What are Reference Data Types?
  * Mutable - can be changed
  * Objects (includes arrays!)

### What are Primitive Data Type?
* Immutable - cant be changed
  * Boolean
  * Null
  * Undefined
  * Number
  * String

##  `Primitive data type`

### Point the age variable at the number 27 in memory
```js
let age = 27;
// * Point the newAge variable at whatever the age variable is point at; at this point, its the number 27
let newAge = age;
// * Increment the age variable - reassign what age is pointing at
age += 1;
console.log("age: ", age, "newAge: ", newAge); // age: 28 newAge: 27
```
 * Notice that age has changed and newAge remains the same
 * This is because primitive data types are immutable
 * primitive data types have assigned spots in memory
 * we just tell js what to point a variable at in memory
 * static memory allocation - memory already exists just need to allocate it
 * when we reassign, we change where we are pointing the age variable but not the newAge variable, so it still points at the same thing
 * age => 27
 * newAge => 28

## `Reference data type`
* JS creates reference data types by assigning portions of memory
* Dynamic memory allocation - memory needs to be freed and allocated for reference data types
* Memory is allocated as needed in order to save memory

### Lets create a reference in memory
* variable cat1 that points at a reference in memory
* cat1 => reference1
```js
let cat1 = {
  name: "pumpkin",
  age: 3,
};
```
* actually just pointing another variable at the same reference in memory
* cat2 => reference1

```js
let cat2 = cat1;

cat1.name = "celebi";
// * changing one; changes both
// * both variables are pointing at the same reference
// * cat1 => <reference1>
// * cat2 => <reference1>
// * <reference1> holds they properties/methods
console.log("cat1: ", cat1, "cat2: ", cat2);
```

## `Callbacks`

### We previously learned that functions are first class objects!
  *Three reason why!*
  1. Be stored in a variable:
    * Function Expression
  2. Passed as an argument to a function:
    * Callback Functions
  3. Returned from a function:
    * Closures/Recursion

### What is a callback function?
  * A callback function is a function passed into another function as an argument
  * Which is then invoked inside the outer function to complete some kind of routine or action
```js

// callback function
// * an anonymous function stored in a variable
let callback = () => console.log("Hello from callback function");
console.log(callback); // [function:callback];

callback(); // Hello from callback function
```
### What is a higher order function?
  * Function that receives or returns a function
  * passing the callback function to the higher order function as an argument
```js
function higherOrder(cb) {
  console.log("Entering higher order function");
  console.log("1");
  console.log("callback:", cb); // [function:callback]
  //* same function we say when we console.logged the callback outside the function
  cb(); // Hello from callback function
  console.log("2");
  console.log("Exiting higher order function");
}

higherOrder(callback);

// * no different than passing any other variable as an argument to the function
let variable = "this is a string";
higherOrder(variable);
```

When passing a anonymous callback function, use a arrow function
* Much cleaner and shorter
```js
[1,2,3].map(num => num * 10);// [10,20,30];
* vs
[1,2,3].map(function(num){
  return num * 10;
});
```
   * Its also MDN's recommended way

### Callback vs Helper functions
  * All callbacks are helper functions
  * But not all helper functions are callbacks
    * Callbacks must be explicitly passed as an argument to a function

### Different ways to pass function as callbacks
  1. Anonymous Implicit Callback
    * Implicit
    * Preferred way
```js
(name) => name.includes('o')
```
  2. Anonymous Explicit Callback
    * Explicit
    * Uses return keyword + {}
```js
(name) => {
  return name.includes('o');
}
```
  3. Anonymous Callback Function Keyword
    * Uses function keyword
```js
function(name) {
return name.includes('o');
}
```
### Example

Callback function
```js
let double = (num) => num * 2;
```
Higher order function
```js
function doubleNumbers(numbers, callback) {
  console.log(callback); // [function];
  console.log(numbers); // [1,2,3];
  console.log(callback(21)); // 23;

  let doubled = [];

  // double number and pass to new array
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log("number before being passed to callback: ", number);

    // pass number to callback function
    let doubledNumber = callback(number);

    console.log("number after being passed to callback: ", doubledNumber);
    // * we are storing the return value of passing the current number to the callback function in a variable called doubledNumber
    // * we will then push the doubled number into the doubledArray

    doubled.push(doubledNumber);
    console.log(doubled);
  }

  return doubled;
}

// passing function stored in variable to higher order function
// * callback is the double function
console.log(doubleNumbers([1, 2, 3], double)); // [2,4,6];

// * no different than passing the array in a variable instead
let array = [1, 2, 3];
console.log(doubleNumbers(array, double)); // [2,4,6];

// we can pass an anonymous callback to our function
// * Implicit return - no curly's or return keyword
// * this is the cleanest way to pass callbacks
console.log(doubleNumbers([10, 20, 30], (num) => num * 2)); // [20,40,60];

// anonymous callback with explicit return
// * uses return keyword and curly's
console.log(
  doubleNumbers([100, 200, 300], (num) => {
    return num * 2;
  })
); // [200,400,600];

// anonymous callback using function keyword
console.log(
  doubleNumbers([1000, 2000, 3000], function (num) {
    return num * 2;
  })
); // [2000,4000,6000];
```



## `Callbacks - 1h (SOLO)`

- Callbacks Header

## `Callbacks Walkthrough`

- my-for-each
- my-map
- my-filter

## `Rest and Spread`

### What is the rest parameter?
  * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
    ** Represent variadic function
  * The rest parameter will the gather any additional arguments and place them in a an array

### Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

### Using rest
 * create a function that takes in varying amounts of words and creates a sentence out of them
 * Rest is gather the REST of the arguments and placing them an a array

```js
function sentenceMaker(word1, ...words) {
  console.log(word1, words); //lets ["make", "a", "sentence"]
  let sentence = word1;

  // concatenate on to the sentence string the current word as we iterate
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    sentence += " " + word;
  }

  return sentence;
  // return words.join(' ') + '!';
}

// * Are functions can now be more dynamic in accepting varying different arguments
console.log(sentenceMaker("lets", "make", "a", "sentence")); //
console.log(sentenceMaker("hello", "world")); //
console.log("varying", "amount", "arguments"); //
```

### Example 2
```js
function product(...numbers) {
  // console.log(numbers);// [1,2,3,4]
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    total *= number;
  }
  return total;
}

console.log(product(1, 2, 3, 4)); // 24
console.log(product(1, 2, 3)); // 6
console.log(product(2)); // 2
```

## Spread Operator

### What is the Spread Operator?
  * The spread operator allows you to break down a data type into the elements that make it up.
### Two Basic Behaviors
  * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
  * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.
  * Create a shallow copy


### Spread with Arrays
 * spread values of array into another array
```js
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [0, arr1, arr2];
console.log(arr3); // [ 0, [ 1, 2, 3 ], [ 4, 5, 6 ] ];
// * not what we want, we want the values not as nested arrays

// * Use spread instead
let arr4 = [0, ...arr1, arr2];
// * spread into an array literal the number 0, the elements of arr1 and the elements of arr2 and store in the variable arr4
console.log(arr4); //  [ 0, 1, 2, 3 , 4, 5, 6  ];

// * Spread can be used to create a shallow copy
// *  old way to make copy
let copy1 = arr1.slice();
// *  new way to make copy using spread
let copy2 = [...arr1];
```

### Spread with Objects
 * spread key:value pairs of object into another object
 * avoid spread between different data types
```js
let obj1 = { name: "brandon" };
let obj2 = { pet: "cat", favColor: "red" };
let obj3 = { obj1, obj2, city: "brooksville" };
console.log(obj3); // end up with nested object
```

* use spread instead
```js
let obj4 = { ...obj1, ...obj2, city: "tampa" };
// *  spread into an object literal all the key:value pairs of obj1 and obj2, while also adding the key:value pair of city:'tampa' and store it in the variable obj4
console.log(obj4);
```


## `Destructuring`

  * Destructuring is just matching a pattern.
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object


### Destructuring with Arrays
```js
let array = [1, true, "hello world"];

// Unpacking array values into variables
// * we can use destructuring to unpack values into variables
let [num, bool, str] = array;
// * extract from the array to the right of the equal sign
// * the values from the array into variables positionally

console.log(num); // 1
console.log(bool); // true
console.log(str); // hello world

// * can skip elements
// * using comma operator
// let [num, ,str] = array;
console.log(num, str); // 1 hello world
```

### Swapping variables using destructuring
  * we can use destructuring to swap the values a variable holds
```js
let firstName = "brandon";
let lastName = "laursen";

// positionally provide the variable you'd like to swap the contents of
[firstName, lastName] = [lastName, firstName];

console.log(firstName); // laursen
console.log(lastName); // brandon

// can swap index in array
let arr5 = [10, 20, 30];
console.log(arr5); //[ 10, 20, 30 ]

// positionally provide the index you'd like to swap the contents of
[arr5[1], arr5[2]] = [arr5[2], arr5[1]];
console.log(arr5); //[ 10, 30, 20 ]
```

### Destructuring with rest
  * we can use rest outside of function parameters
  * the premise is the same, gather the REST of the elements and store them in a data type.
  * we can use destructuring to in combination with rest to create some interesting behaviors
```js
let numbers = [1, 2, 3];
[num1, ...restOfNums] = numbers;

console.log(num1, restOfNums); // 1 [2,3];
// * destruct the first arg into num1, and take the rest and store in a variable called restOfNums
```

### Using both rest and spread with destructuring
```js
[firstNum, ...rest] = [...numbers, 4];
// so were saying to the right, SPREAD all the elements of the numbers array into this new array literal, but also a the number 4
// on the left, store the first element of the array literal to the right of the = sigh in firstNum, store the REST of the elements in an array called rest

console.log(firstNum, rest); // 1 [2,3,4];
```

### Destructuring with Objects
```js
let user = {
  name: "John",
  address: {
    street: "123 Street Rd",
    city: "Orlando",
  },
  age: 30,
};

// *  lets destructure some values out of the user object
let { name, ...restOfObj } = user;

// this will destructure the name of the user giving us the value as well as store the rest of the key:value pairs in a object named restOfObj
// * note that we maintain the data type
console.log(name); // John
console.log(restOfObj); // { address: { street: '123 Street Rd', city: 'Orlando' }, age: 30 }

// *  we can take it a step further
// * we just need the key name: the we can get the value store at that key
let {
  name,
  address: { street, city },
} = user;

// console.log(street, city); // 123 Street Rd Orlando

// console.log(address);// Error
// * cant do this because we destructuring out of address
```

### Destructuring in a loop
```js
for (let [key, value] of Object.entries(user)) {
  console.log(key, value); //
}
```

### Destructuring taking in function argument
```js
function destructure({ name }) {
  console.log(name); // brandon
}

destructure({ name: "brandon" });
```

## `Rest and Spread Practice + Destructuring Practice  - 45m(SOLO)`
- Rest and Spread Header
- Destructuring Arrays and Objects Header

## `Destructuring Practice Walkthrough`
- rest-sum
- break-down-object
- copy-array

## `Rest and Spread Practice Walkthrough`
- array-destructuring
- object-destructuring

## `Callbacks Project till EOD`
