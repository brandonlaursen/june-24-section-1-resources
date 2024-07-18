/*

  What is setInterval!
    * The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
    * Very similar to setTimeout
    * Takes in the same args
    * setInterval(callbackfFn, delayInMilliseconds, param1, param2);
    * executes a function repeatedly after specified delay

    What does a setInterval return?
    * The returned intervalID is a numeric, non-zero value which identifies the timer created by the call to setInterval(); this value can be passed to clearInterval() to cancel the interval.

*/

function imHungry(food1, food2) {
  console.log(`I want to eat ${food1} and ${food2}`);
}

// setTimeout(imHungry, 3000, 'sushi burrito', 'TJ Pickle chips')

// setInterval(imHungry, 3000, 'sushi burrito', 'TJ Pickle chips')

function annoyingKids(count) {


  let timerObj = setInterval(() => {
    count--;
    console.log("ARE WE THERE YET?", count);
    if (count === 0) {
      console.log("WERE THERE SHUT UP!");
      clearTimeout(timerObj);
    }
  }, 1000);

  if(count === 0) clearInterval(timerObj);


}

// annoyingKids(5);
// annoyingKids(0);



setInterval(annoyingKids, 1000, 5)
