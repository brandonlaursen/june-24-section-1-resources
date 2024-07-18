/*



  What does it mean for javascript to be a single threaded language?
    * Any instance during the program, only one task is being executed!
    * The current task will run to full completion, before the next task is handled


    What is multithreaded?
    * multiple commands can be processed at the same time
    * python


  Synchronous vs Asynchronous code

  What is Synchronous code?
    * Runs line by line
    * Commands executed one after another, only one command a time
    * Code that has inherit order
    * Order of execution is guaranteed

*/

// Synchronous code
// * We can predict the order of this code!

function synchronous() {
  console.log("two");
}

console.log("one");
synchronous();
console.log("three");


/*

  Asynchronous code?
    * no guaranteed order
    * does not block the execution of the call stack


  Why do we need async code?
  - user interaction/input
  - background task
  - fetching data
  - initiate enqueue system


   What is the Event Loop?
    * Consists of the call stack and the message queue
    * Checking if the call stack is empty, if it is we can move task from the message queue to the call stack

  Call stack - the track the current task in progress
    * Synchronous task
    * Last in first out - first in last out
       * ex: stack of plates
    * Add to stack - pushing
    * Removing from the stack - popping
    * Stack structure

  Message Queue - keep tracks of task that cannot be executed at the moment
    * Asynchronous task
    * First in first out - last in last out
      * ex: standing in line
    * add to back - enqueue
    * remove from the front - dequeue
    * queue structure

    * Task can only be performed one at a time because?
    * JS is a single threaded language!

*/



console.log('first');

// setTimeout(callbackFunction, delay in millisecond, param1)
setTimeout(console.log, 0, 'second');

setTimeout(console.log, 0, 'third');

console.log('fourth');
console.log('fifth');

// first -> fourth -> third => second
