# `Week 3 Day 4`

- The Event Loop Demo
- Timeout Project - Phase 1
- Timeout Project - Phase 2

## `Cameras On Reminder`

### What does it mean for javascript to be a single threaded language?
* Any instance during the program, only one task is being executed!
* The current task will run to full completion, before the next task is handled
### Note
  - No. NodeJs is not single threaded.
  - The NodeJs event loop operates on a single thread yes, but the async blocking operations are delegated to separate worker threads.

### What is multithreaded?
* multiple commands can be processed at the same time
* python

## `Synchronous vs Asynchronous code`

### What is Synchronous code?
* Runs line by line
* Commands executed one after another, only one command a time
* Code that has inherit order
* Order of execution is guaranteed


### Synchronous code
 * We can predict the order of this code!
```js

function synchronous() {
  console.log("two");
}

console.log("one");
synchronous();
console.log("three");

// one => two => three
```

### What is Asynchronous code?
* no guaranteed order
* does not block the execution of the call stack

### Why do we need async code?
* user clicks a button,
* have to send a api call
* perform two things at once,
* interact with the site we cant predict
    * users have short attention spans
* more dynamic websites, allowing people to do more things at once
* the environment in which we run our application is full of uncertainties


```js
console.log("first");

// This does not block the execution of the call stack
// * Because async code is sent to the message queue
setTimeout(() => {
  console.log("third");
}, 5000);

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// first => third => second
// * not what we expect
```

### What is the Event Loop?
* Consists of the call stack and the message queue
* Checking if the call stack is empty, if it is we can move task from the message queue to the call stack

### Call stack - the track the current task in progress
* Synchronous task
* Last in first out - first in last out
    * ex: stack of plates
* Add to stack - pushing
* Removing from the stack - popping
* Stack structure

### Message Queue - keep tracks of task that cannot be executed at the moment
* Asynchronous task
* First in first out - last in last out
    * ex: standing in line
* add to back - enqueue
* remove from the front - dequeue
* queue structure
* Task can only be performed one at a time because?
* JS is a single threaded language!

### NodeApi/Web api -  Built using C, interacting with API
* DOM
* ajax
* setTimeout

## `setTimeout`

### What is a setTimeout?
* The global `setTimeout()` method sets a timer which executes a function or specified piece of code once the timer expires.
* `setTimeout(callbackFunction, delayInMilliseconds, param1, param2);`
* you can pass anon callback to a setTimeout

### What does a setTimeout return?
* The returned timeoutID is a positive integer value which identifies the timer created by the call to `setTimeout()`. This value can be passed to `clearTimeout()` to cancel the timeout

```js
console.log(global); // shows global object

// global. is a method of the global object!
global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"

// example passing a console.log
setTimeout(console.log, 1000, "sup");

// example w/o args
function time() {
  console.log("time is up");
}

setTimeout(time, 1000);

// example w args
function sayHi(name1, name2) {
  console.log(`hello ${name1} and ${name2}`);
}

setTimeout(sayHi, 2000, "brandon", "anthony");

// clearTimeout
// * this will prevent the function from running at all
let name = "brandon";

// timer variable holds a timer id object
let timer = setTimeout(() => {
  console.log(`hello ${name}`);
}, 1000);

// clearTimeout(timer)
```

## `setInterval`

### What is setInterval?
* The `setInterval()` method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
* Very similar to `setTimeout`
* Takes in the same args
* `setInterval(callbackfFn, delayInMilliseconds, param1, param2);`
* executes a function repeatedly after specified delay

### What does a setInterval return?
* The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to `setInterval();` this value can be passed to `clearInterval()` to cancel the interval.


Execute the foo function every 1 second passing in these arguments
```js
function foo(food1, food2) {
  console.log(` I ate ${food1} and ${food2}`);
}

setInterval(foo, 1000, "chicken", "pizza");


// * can use the TimerId returned from setInterval to cancel the timer
// * similar to setTimeout
function timeMaker(count) {
  // store timer id in a variable
  let timer = setInterval(() => {
    count--;
    console.log(count);
    if (count === 0) {
      // pass timer id to clearInterval to stop when count hits 0
      return clearInterval(timer);
    }
  }, 1000);
}

timeMaker(5);

```

## `Timeout Project phase 1 + 2(Paired Till EOD)`
- When testing async code specs, you need to comment out the function calls!

## `Guessing Game Project (Optional)`

This project is a good time to flex your problem solving muscles. You will be starting the project from scratch, there is no starter provided. If you get through all of the guided portions, think of ways you can improve the program. There are many ways to improve this project, have some fun with it!
