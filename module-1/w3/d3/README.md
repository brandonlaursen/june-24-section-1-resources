# `Week 3 Day 3`

- IIFE 
- Function Hoisting
- Falsey Values
- Review Recursion


## `Immediately Invoked Function Expressions`

### What is an IIFE? What does it allow us to do?
- Define and immediately run anonymous function
- iife can only be ran once

### How could IFFE be useful?
- Want to run a function one time
- Don't want use the global name space
- Protects function names and variables

### Example

### Function expression
 - storing in anon function in a variable
 - as soon as you do that, it is no longer anonymous
 - because we can alias the function with the variable we've stored it within
```js
let sayhI = function() {
  console.log('hello')
};

// sayhI();
```

### Function expression with fat arrow
```js
let sayHi2 = () => console.log('hello 2');
```
### An iffe is the anon portion wrapped in parenthesis
```js
(function() {
  console.log('only runs once')
})();
```
### Fat arrow syntax
```js
(() => console.log('only runs once in fat arrow'))();
```

### Passing an argument to an iffe
```
((name) => console.log(`Hello ${name}`))('krandon')
```

### Proof an iffe runs once
```js
let sayHi2 = (function() {
  console.log('will only run once');
  return 'hello'
})();

//iffe will only run the console log in the function once!
// console.log(sayHi2);//after this call will we be able to run the function again
// console.log(sayHi2);
// console.log(sayHi2);
// console.log(sayHi2);
```

## `Function Hoisting`

### let, const, and var
- var - hoist the declaration not the assignment, but has a default value of undefined
- const/let - hoist the only declaration but does not have a value, therefore throws an error when trying to access before initialization
Hosting with Functions!

```js

function hoistVar(){
  console.log(name); //undefined
  var name = 'brandon'
};

// hoistVar()

function hoistConstAndLet() {
  console.log(name);//Cannot access 'name' before initialization
  let name = 'brandon';
  // const name = 'brandon';
}

// hoistConstAndLet()

//hoist the function declaration but not the assignment
notHoisted(); //Cannot access 'notHoisted' before initialization
let notHoisted = () => console.log('function will not get hoisted')


hoisted();//hoisted!
//function declaration
function hoisted() {
  console.log('hoisted!')
}

};
```

## Falsy Values [mdn link](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- A value that JS coerces to be considered false when used in a boolean expression
    - null
    - undefined
    - false
    - NaN
    - 0
    - -0
    - 0m
    - ''
```js

if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
```

## `Recursion Practice Time (Solo)`

- You are free to pair up if you would like to, but this is dedicated time to study recursion.
- I recommend starting over on the practices from yesterday and going back through everything
- Use the debugger to help you analyze your recursive functions
- You can also practice using the js-challenges/recursion-prompts repo that I shared yesterday
