/*
Given the function getVowelKeys(obj) below that iterates through an object and
returns all values associated with keys that are vowels using Object.keys(),
refactor the code to not use Object.keys() but still passes the test specs.

Key point here is to note how there are multiple ways to iterate through an
object that are interchangeable. Don't use Object.keys().
*/

function getVowelKeys(obj) {
  let vowelKeys = [];
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (hasVowels(key)) vowelKeys.push(key);
  }
  return vowelKeys;
}

let VOWELS = 'aeiou';
function hasVowels(str) {
  for (let char of str) {
    if (VOWELS.includes(char)) return true;
  }
  return false;
}

// const locationCount = {
//   hotel: 6,
//   gym: 10,
//   ATMs: 2,
//   train: 20,
// }
// console.log(getVowelKeys(locationCount));
// //=> ['hotel', 'train']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getVowelKeys;
} catch {}
