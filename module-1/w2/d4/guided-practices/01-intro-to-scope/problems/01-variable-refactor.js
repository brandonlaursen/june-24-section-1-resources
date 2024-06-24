/*
Below is a solution for the Anagrams problem. Anagrams are words that contain
the same characters but not necessarily in the same order. The function returns
`true` if `word1` and `word2` are anagrams.

This solution only uses the `var` to declare all variables. The code runs as
expected, but could be improved. Refactor this solution to only use `let` and
`const` instead of `var`.

Which variables should be declared with `let`? Why?
Which variables should be declared with `const`? Why?
What are the potential consequences of declaring all variables with `var`, even
if the function gives you the correct output?

BONUS: If you have time after refactoring the variables, feel free to refactor
the logic to further improve this solution to only use one count object.
*/

var areAnagrams = (word1, word2) => {
  var result = true

  if (word1.length !== word2.length) {
    result = false;
    return result;
  }

  var count1 = {};

  for (var i = 0; i < word1.length; i++) {
    if (count1[word1[i]]) {
      count1[word1[i]]++;
    } else {
      count1[word1[i]] = 1;
    }
  }

  var count2 = {};

  for (var i = 0; i < word2.length; i++) {
    if (count2[word2[i]]) {
      count2[word2[i]]--;
    } else {
      count2[word2[i]] = 1;
    }
  }

  for (var char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}

// console.log(areAnagrams("cat", "act"));          // true
// console.log(areAnagrams("restful", "fluster"));  // true
// console.log(areAnagrams("cat", "dog"));          // false
// console.log(areAnagrams("boot", "bootcamp"));    // false
// console.log(areAnagrams('bott', 'boot'));        // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = areAnagrams;
} catch {}
