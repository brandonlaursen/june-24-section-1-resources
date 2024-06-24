# `Week 8 Day 3`

- Promises Demo
- Practice: Create and Handle Promises
- Promise.all & async/await Demo
- Practice: Promise.all
- Practice: async/await
- Fetch Demo
- Practice: Fetch From Server
- Practice: fetch



### `Promises`
* A Promise in JavaScript is a commitment that sometime in the future, your code will get a value from some operation (like reading a file or getting JSON from a Web site) or your code will get an error from that operation (like the file doesn't exist or the Web site is down).
MDN
* A Promise is an object representing the eventual completion or failure of an asynchronous operation.


Promises can exist in one of three states:
  * `pending:` The promise has been neither `fulfilled` nor `rejected.`
  * `fulfilled:` The promise's action has succeeded.
  * `rejected:` The promise's action has failed.

A promise is considered settled when it has either been fulfilled or rejected.

Due note!
* A promise can only succeed or fail once
* A promise cannot change its state from fulfilled to rejected or vice-versa.
* If a promise has already been settled and a callback is added that matches the promise's state, that callback will be invoked immediately.


### Promise
Takes in a single executor function as an argument -> `callback function () => {}`
* `executor function` take two optional parameters
*  `resolved`
*  `rejected`

```js
const pendingPromise = new Promise((resolve, reject) => {
  console.log(resolve, reject); [Function (anonymous)] [Function (anonymous)]
});

console.log(pendingPromise);// Promise { <pending> } <-- A promise Object

// ! Promises are useful for when handling async code

function function1() {
  // * returning promise object
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      // let number = "asdf";
      let number = 10;

      // * If the promise is resolved the number is variable is passed as an argument to the resolve or rejected function
      if (!isNaN(number)) {
        // * resolve takes the value
        resolve(number);
      } else {
        // * rejected takes the reason for the rejection
        rejected(`${number} is not a number`);
      }
    }, 2000);

    // then .then takes in two arguments
    // * the first is a function to handle a resolved promise
    // * the second is a function to handle a rejected promise
    // * the value passed to the resolve function will be represented by the parameter in the callback function
  }).then(
    (value) => console.log("resolved", 10 + value),
    (reason) => console.log("rejected", reason)
  );
}

function function2() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      let number = "asdf";
      // let number = 20;

      if (!isNaN(number)) {
        resolve(number);
      } else {
        // * could also pass value and have the catch handle the rejection message
        rejected(number);
      }
    }, 2000);

    // * Value is passed as an argument to the resolve or rejected function to be then use in the .then or .catch

    // * Tho .then takes in a rejected function as a second argument
    // * its better convention to use a catch to handle the rejected promise
  })
    .then((value) => console.log("resolved", 10 + value))
    .catch((value) => console.log(`${value} is not a number`));
}

```
## `Practice: Create and Handle Promises - 20min(Solo)`
## `Practice: Create and Handle Promises Walkthrough`


## Async Await/ Promise.all

```js
async function chainPromises() {
  function1()
    .then(() => function2())
    .then(() => function3())
    .then(() => console.log("done with promise chain"));

  Promise.all([function1(), function2(), function3()]).then(() =>
    console.log("done with promise chain")
  );


  try {
    await function1();
    await function2();
    await function3();
  }catch(e) {
    console.log("Error: ", error)
  }

}

chainPromises();
```

## `Practice: Promise.all - 20min(Solo)`
## `Practice: Promise.all Walkthrough`
## `Practice: async/await - 20min(Solo)`
## `Practice: async/await Walkthrough`

## Fetch
* using node-fetch package to use the fetch keyword in node
* fetch is built into browser not node

```js
const fetch = require("node-fetch");

function function3() {
  return new Promise((res, rej) => {
    // * promises can be useful when accessing data from an api
    // * we will learn a much simpler way to do this with async await
    const jokes = fetch("https://official-joke-api.appspot.com/jokes/random");

    // ! What happens if the url passed to fetch doesn't work
    // * we would hit out rej function and pass the
    // const jokes = fetch('https://oficial-joke-api.appspot.com/jokes/random');

    if (jokes) {
      res(jokes);
    }

    // * .json
    // * method on request that reads the request body and returns a promise that parses the body as JSON
    // * https://developer.mozilla.org/en-US/docs/Web/API/Request/json
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("ERROR MESSAGE:", err));
}
function3()
```
## `Practice: Fetch From Server - 20min(Solo)`
## `Practice: Fetch From Server Walkthrough`
## `Practice: fetch - 20min(Solo)`
## `Practice: fetch Walkthrough`

## `Work on Long Practice till EOD`
