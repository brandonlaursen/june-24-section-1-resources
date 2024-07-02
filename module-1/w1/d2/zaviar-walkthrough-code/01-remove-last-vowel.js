/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Split the word into an array:  //! wordArray
// Loop backwards through wordArray
// Stop the loop once I find a vowel
// Splice out the vowel
// Join the array into a string and return

function removeLastVowel(word) {
    let VOWELS = "aeiouAEIOU";

    let wordArray = word.split("");

    // for (where to start ; where to stop ; how much to change by)

    for (let i = wordArray.length - 1; i >= 0; i--) {
        let currChar = wordArray[i];

        if (VOWELS.includes(currChar)) {
            wordArray.splice(i, 1);

            //? Why return?
            // If we continue looping, we'll remove more vowels
            // We only want to remove one vowel :)
            return wordArray.join("");
        }
    }
    
    return word
}

// console.log(removeLastVowel("bootcamp")); // 'bootcmp'
// console.log(removeLastVowel("better")); // 'bettr'
// console.log(removeLastVowel("graph")); // 'grph'
// console.log(removeLastVowel("thy")); // 'thy'

// Create an empty array: strArray
// Loop through the string
// Push each character into the strArray

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
