/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.

  input:
  const obj = {
  red: 'circle',
  blue: 'octagon',
  green: 'square'
}

output: ['red']

  make a plan
  1. define a function that takes in obj
  2. define an array to store keys
  3. for in loop to get the keys; then use those keys as we iterate to get the value
    a. define a variable value - 'circle'
    b. define a variable to track the count of c's - count
    c. loop through the value to access the letters
      a. we can check if that letter is a 'c' - condition
        a. if it is, increment out counter
    d.when we exit the loop that loop through the value string
      a.if the counter is greater than or equal to 2; pushing the key into array
  4.return array

*/

function get2CKeys(obj) {
  console.log(obj); // { red: 'circle', blue: 'octagon', green: 'square' }
  let result = [];

  for (let key in obj) {
    let value = obj[key];
    console.log("key:", key, "value:", value);
    let count = 0;
    for(let i = 0; i < value.length; i++){
      let letter = value[i];
      // console.log(letter);
      if(letter === 'c') count++;

    }
    // console.log(count);
    if(count >= 2) result.push(key);
  };

  return result;
}

const obj = {
  red: "circle",
  blue: "octagon",
  green: "square",
};
// console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
