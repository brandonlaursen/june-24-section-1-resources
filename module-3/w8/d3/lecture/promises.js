const pendingPromise = new Promise((resolve, reject) => {
  // console.log(resolve, reject); // [Function (anonymous)] [Function (anonymous)]
});

// console.log(pendingPromise);// Promise { <pending> } <-- A promise Object

function function1() {
  // * returning promise object
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      // let number = "asdf";
      let number = 10;
      console.log("in setTimeout");
      // * If the promise is resolved the number is variable is passed as an argument to the resolve or rejected function
      if (!isNaN(number)) {
        // * resolve takes the value
        resolve(number);
      } else {
        // * rejected takes the reason for the rejection
        rejected(`${number} is not a number`);
      }
    }, 1000);
  });
  // .then(
  //   (value) => console.log("resolved", 10 + value),
  //   (reason) => console.log("1.rejected", reason)
  // )
  // .catch((reason) => console.log("2.rejected", reason));
}

// function1();
// console.log("we reached her first");

// ❯ npm i node-fetch@2.6.1
const fetch = require("node-fetch");

function function2(id = 1) {
  return new Promise((res, rej) => {
    const jokes = fetch(`https://official-joke-api.appspot.com/jokes/${id}`);

    // console.log(jokes);
    if (jokes) {
      res(jokes);
    }
  })
    .then((data) => data.json())
    .then((data) => console.log(data));
}

// function2();

async function chainPromises() {
  function1()
  .then((id) => function2(id))
  .then((id) => function2(id))
  .then((id) => function2(id))


  // let id = await function1();
  await function2(id);
  await function2(45);
  await function2(30);
  // await function4();


}

chainPromises();

function function4(){

}
