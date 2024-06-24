# `Week 2 Day 3`

- Array Methods Demo
    - forEach
    - map
    - filter
    - find
    - reduce
- Advanced Array Methods Practice
- Pair Programming Demo

## `Array Methods`

### What are array methods?
  * Array methods are functions built-in to JavaScript
  * Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
  * Allow us to perform commonly used calculations/functions
  * quality of life
  * array methods iterate under the hood to pass each element of an array to a callback function



### What is a callback function?
  * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  * For now we are going to treat some of the implementation of array methods like a black box
    ** a black box is a device, system, or object which produces useful information without revealing any information about its internal working
  * Implementation of array methods are abstracted under the hood
    * We do not need to explicitly provide a start, condition, and step
    * It is implied you want to reach every element when using these array looping methods

`forEach`

- RUN THIS FUNCTION for each element in an array
- Does NOT have return value



## forEach
 * The forEach() method executes a provided function once for each array element.
 * We use forEach when we want a connivent/quick way to write a for loop
```js
let names = ["brandon", "maica", "charles", "trevor"];

names.forEach((name, i, names) => console.log(name, i, names));

function myForEach(names, cb) {
  // * As we iterate; we are passing the name, i, and names array to the callback function
  // * that callback function then takes in those variables as arguments to then print them to the terminal
  // * that is what an array method is doing; passing elements as we iterate to callback functions
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    cb(name, i, names);
  }
}

myForEach(names, (name, i, names) => console.log(name, i, names));
```


`map`

- Make a new array
- RUN THIS FUNCTION for each element in the array
- Push the return value of the function into the array
- Return the array

## .map
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * we use map whenever we want to return a new array of elements modified in some way

```js
let upperCasedNames = names.map((name) => name.toUpperCase());
console.log(upperCasedNames); //

function myMap(names, cb) {
  let upperCasedNames = [];

  // pass the upper cased names into a new array
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let upperCasedName = cb(name);
    upperCasedNames.push(upperCasedName);
  }
  return upperCasedNames;
}

console.log(myMap(names, (name) => name.toUpperCase()));
```

`filter`

- Make a new array
- RUN THIS FUNCTION for each element in the array
- Push the element into the array if the return value evaluates to true
- Return the array

## .filter
* The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition

```js
let filtered = names.filter(name => name.includes('x'));
console.log(filtered);//

function myFilter(names, cb) {
  let filtered = [];

  // push only names that result in true when passed to the callback function into the filtered array
  for(let i = 0; i < names.length; i++) {
    let name = names[i];
    console.log(cb(name));// returns a boolean
    if(cb(name) === true) {
      filtered.push(name);
    }
  }
}

console.log(myFilter(names, (name) => names.includes('x')));//
```

`find`

- RUN THIS FUNCTION for each element in the array
- Return the first element that matches the testing function.

```js
let boolean = names.find(name => names.includes('o'));
console.log(boolean);// brandon


function myFind(names, cb){
  for(let i = 0 ; i < names.length; i++) {
    let name = names[i];

    // stop loop as soon as result of passing name to callback is false
    // * aka name does not include the letter o
    if(cb(name) === true) {
      return name;
    }
  };
  // if we complete the iteration without meeting the condition;
  // then its implied that every name includes the letter o
  return undefined;
}

console.log(myFind(names, (name) => name.includes("o")));//
```

`reduce`

- No Default Accumulator
  - Make an accumulator and set it to the zeroeth element of the array
  - RUN THIS FUNCTION for each element in the array, starting at the first index
  - The return value of the function becomes the new accumulator
  - return the final accumulator

- Default Accumulator
  - Make an accumulator and set it to the second parameter given to you
  - RUN THIS FUNCTION for each element in the array, starting at the zeroeth index
  - The return value of the function becomes the new accumulator
  - return the final accumulator

Remember each array method is passing every element in an array to a callback function
  * Iteration happens under the hood
  * Its implied we want to iterate and reach every element of the array
`

## `Advanced Array Methods Practice 1h (SOLO)`
- Advanced Array Methods Header

## `Advanced Array Methods Practice Walkthrough`

- map
- filter
- reduce

## `Pair Programming`

### Driver vs Navigator

- Driver: hands on keyboard, only driver types
- Navigator: decision maker, choosing what to do next, solving the problem, lead development, choose the direction of where to go next

### Pairing Guidelines

- meet and greet - get to know each other
- decide whose gonna drive and navigate first
- driver is going to clone repo
- switch roles every 15 minutes
- stick to this pattern no matter what
- COMMUNICATE WITH EMPATHY
    - avoid using accusatory terms like "you did this",
    - use WE, THE, IT
    - Avoid - YOU, YOUR,

### Skills we gain from pairing

- How to communicate abstract and technical concepts - how to “speak in code”
- How to give and receive constructive, effective feedback
- How to problem solve aloud. This is an essential skill for technical interviews.

### What if your pair is more experienced?

- Don’t feel bad, it’s always okay to slow down
- Don’t get discouraged; it’s normal that people have different comfort and skill levels.
- Everyone has good and bad days, and over a 6 month course life will sometimes get in the way.  If you feel like you don’t know as much as your pair today, very likely tomorrow you will be the one who knows more
- Everyone learns differently: own what you know and what you don’t. Your instructors are here to answer all your questions - technical and non-technical
- If you’re silent about your needs and slowing down, you can hurt yourself and you are likely depriving your pair of an opportunity to practice communicating and dig deeper on concepts as well

### What if you are more experienced?

- Check in with your partner regularly - make sure they’re comfortable with solutions and topics before moving on.
- Do you think out loud or in silence? Talk openly about this so you know how to support each other
- Take this as an opportunity to practice talking about the concepts. You know you’ve learned the content if you can help another understand it.
- Take responsibility for your pairing experience.

### What if you feel like you are not being respected?

- That’s not okay!
- We all have differences, but you need to be able to work professionally with fellow students, your instructors, and your eventual coworkers
- Please speak up (to your pair, to your instructors 1:1, via optional pairing report or mandatory weekly report, via anonymous report)
    - Communicate if it’s great, communicate if it’s terrible.
    - We all have to take steps to improve the situation
    - You’re helping your pair improve: at a/A, in their careers

## `Git Flow`

Check out the git-flow.md file attached for step by step instructions.

Demo and Code-Along for getting a project onto github and ready for pairing

## `Advanced Arrays Long Practice (Paired, Until EOD)`

If you finish this, feel free to go back to work on the POJO Basics Long Practice / Callbacks Long Practice.
