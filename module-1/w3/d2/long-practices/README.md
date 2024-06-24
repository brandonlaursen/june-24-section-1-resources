# `Week 3 Day 2`

- Call Stack Demo
- Recursion Demo
- Solving Problems Recursively Project pt.1
- Solving Problems Recursively Project pt.2
- Solving Problems Recursively Project pt.3

## `The Call Stack`
 * The call stack is a structure that js uses to keep track of evaluation of function calls
    * function is at the top stack, it is the function currently being executed
    * stack data structure
      * EX: Stack of plates
    * first in last out
    * when a function is called, it is pushed on the call stack
    * when a function is returned, it is popped off the call stack



### Observe stack
  * Can watch stack using debugger
```js
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
```
### Remember a function evaluates to its return!
* If there is no return value; a function evaluates to undefined
```js
function test(){
  return true;
  return test;
  return test();
}

// function evaluates to its return
console.log(test());// undefined
```

## `Recursion`

### What is recursion?
  * recursion is when a function calls itself
    * recursion is when a function calls itself
      * recursion is when a function calls itself

### What are the use cases for recursion?
  * For issues that can be broken down into several, smaller pieces, sub problems
    * fibonacci, factorial
    * search algorithms
    * `rm -rf`: recursively delete sub directories
    * traversing tree/graph like data structures

### Two cases:
  1. `base case` - tells our function when to stop recursing; can also be known as terminating case
  * ex: `if(n === 0);` `if(array.length === 0)`, `if(!string.length);`
  * goal is to work towards the base case, we do this by using the recursive step
  * you can have more than one base case!

  2. `recursive case` - area of code in which the function recurses, usually the opposite of the base case
  * does not have to explicitly be written out, usually just use the base case
  * `if(n > 0);` `if(array.length > 0);` `if(string.length > 0);`


### Recursive step:
  * step towards reaching the base case
  * ask ourselves, how do we get to the base case?
    ex:
    - `n--(decrement till we hit 0);`
    - `array.slice(1)`(shorten the array till its length is 0)
  * base case - `(!arr.length)` - stop when array is empty
  * recursive step - `array.pop()/array.shift()` - any method to shorten the array will work
  * we are shortening the array and working towards empty array

### Default params
  * Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
  ```js
  function myFunc(num = 10){
    return num + 2;
  }

  console.log(myFunc(10));// 12
  console.log(myFunc());// 12
  ```

Lets see what happens when a function calls itself in relation to the call stack
  * If we don't tell the function to stop recursing, we will get a stack overflow! Infinite Loop
  * Recursive functions risk placing extra load on the call stack.



### Iterating an arbitrary amount of time
  * we control the boundaries of a loop
  * `Start` - we are starting at the 0th index
  * `Stop` - we stop when the condition is no longer true: i < 3
  * `Step` - we works towards the condition using i++
```js
for (let i = 0; i < 3; i++) {
  console.log("i: ", i);
};
```

### Recursing an arbitrary amount of times
  * In a way we can control the boundaries
  * we can do so with our
  * `Start` - a staring value
  * `Stop` - base case
  * `Step` - recursive step

Print numbers from 0 to 3
 * start at number passed in
```js
function recurse(number) {
  console.log("number: ", number);

  // Base case
  // * stop recursing when number hits 0
  if (number === 0) return "Done recursing";
  if(number === 2) return number;

  // Recursive step
  // * subtract 1 from the number and pass the number to the next call to recurse
  // return recurse(number - 1);// only return recursive call if using return value
  // will pass return down call stack
  recurse(number - 1)
  // * each time we return recurse: a function call
  // * we are calling a function and passing it modified arguments
  // * we keep passing arguments recursively till the base case is it met
  // * in this case: when the number is 0
}

console.log(recurse(3)); // Done recursing
```
### Recursive Step
 * Same function as above but with recursive step
 * what keeps us recursing is the condition that number is greater than 0
```js
function recurse2(number) {
  // Recursive case
  // * recurse as long as this condition is true
  if (number > 0) {
    console.log(number);
    // Recursive step
    // * same recursive step
    return recurse2(number - 1); //
  } else {
    // This is where we stop recursing
    return "Done recursing";
  }
}

// * Same call stack as previous example
console.log(recurse2(3));
```

### Common recursing patten
 * Accessing all elements of a array
 * Good base line to approach accessing all elements
 * Good start with recursive problems is at least getting the elements to print
 * we start with a full array
```js
function recurseArr(arr) {
  // Base case
  // * stop when the array is empty
  if (!arr.length) return "Done recursing";
  // * same thing as
  // if(arr.length < 0) return 'Done recursing';

  // Many ways to work towards base case
  // pick a way to shorten the array
  // * .pop - remove last element
  let popped = arr.pop();
  console.log(popped);

  // * .shift - remove first element
  let shift = arr.shift();
  console.log(shift);

  // * used with .slice
  // console.log(arr[0])
  // * passing an array with first element removed
  return recurseArr(arr.slice(1));

  // ! Any of these approaches work
  // * what matters is we are working towards our base case of an empty array, starting from a full array, removing elements one by one till we hit the base case
}

console.log(recurseArr([1, 2, 3, 4])); // Done recursing
```


### Reversing a string
```js

// Lets reverse a string
// * access every letter
// ! start with a full string
function reverse(string) {
  // Base case
  // ! stop when string length is 0
  if (!string.length) return ""; //<- return value of top stack frame

  let first = string[0];

  // Recursive Step
  // ! remove the first letter each recurse
  return reverse(string.slice(1)) + first;

  // Alternatively
  // * do not have to return recursive call
  let result = reverse(string.slice(1)) + first;
  return result;

  // ! recursive case below this line
  // if (string.length > 0) {
  //   let first = string[0];

  //   // recursive step - slicing the string till it reaches a length of 0
  //   return reverse(string.slice(1)) + first;
  // } else {
  //   return "";
  // }
}
```

### Reverse call stack
 * were going to keep recursing till we hit a base case
 * once we do, we can use the return values and propagate them back up the stack
console.log(reverse("cat")); //tac

 * In order for me to take reverse('t') and add it to 'a' I first need to call reverse('t') and get its return value; but reverse('t') returns a function call to reverse('') + t so we must wait for reverse('') to evaluate; and so forth until we hit the base case
 ```js
 reverse('cat') => reverse('at') + c
 reverse('at') => reverse('t') + a
 reverse('t') => reverse('') + t
 reverse('') => return '' <-- At this point we hit the base case; we can start getting the return values
 ! popping off functions from call stack
 * we can now fill in what the functions evaluate too
 reverse('t') => " " + t ==> 't'
 reverse('at') => 't' + a ==> 'ta'
 reverse('cat') => 'ta + c ==> 'tac'
 ```



### Helpful resources
  * Visualizers
    https://recursion.vercel.app/
    https://pythontutor.com/visualize.html#mode=edit
    https://ui.dev/javascript-visualizer
  * Extra Recursion problems
    https://github.com/JS-Challenges/recursion-prompts
  * Helpful videos
    https://www.youtube.com/watch?v=FVZ-A_Akros&list=PL7mu5NfYICcGphu5CaYj52Ex2nrcCUFZV&index=1&t=110s

## `Solving Problems Recursively p1 - 1h (SOLO)`
- sum-to-n
- sum-array
- ice-cream-shop
- range

## `Solving Problems Recursively p1 Walkthrough`
- sum-to-n
- sum-array
- ice-cream-shop
- range

## `Solving Problems Recursively p2 (1h, SOLO)`
- reverse
- add-to-twelve
- exponent

## `Solving Problems Recursively p2 Walkthrough`
- reverse
- add-to-twelve
- exponent

## `Solving Problems Recursively (Paired, Until EOD)`
