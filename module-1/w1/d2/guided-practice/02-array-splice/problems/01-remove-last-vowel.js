/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function removeLastVowel(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    // console.log(letter);
    if (vowels.includes(letter)) {
      // console.log('is vowel', letter, i);
      let firstPart = word.slice(0, i); // 0 -> 5 = bootc
      // console.log(firstPart);
      let secondPart = word.slice(i + 1); // 5 + 1 = 6 -> word.length mp
      // console.log(secondPart);
      return firstPart + secondPart;
    }
  };

  return word;
};

// console.log(removeLastVowel("bootcamp")); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
