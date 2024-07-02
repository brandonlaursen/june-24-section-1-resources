/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function removeLastVowel(word) {
    let wordArray = [];
    let VOWELS = "aeiouAEIOU";
    let finalStr = "";
    let haveFoundVowel = false;

    for (let i = 0; i < word.length; i++) {
        wordArray.push(word[i]);
    }

    for (let i = wordArray.length - 1; i !== -1; i--) {
        console.log(
            "------------------------ LOOP #",
            i,
            "------------------------ "
        );
        let currentChar = wordArray[i];
        console.log(
            "\n---------",
            "\nThe current char:",
            currentChar,
            "\n----------"
        );

        if (VOWELS.includes(currentChar) && !haveFoundVowel) {
            console.log('WE FOUND THE LAST VOWEL!!!!!!');
            haveFoundVowel = true;
            continue;
        } else {
            finalStr = currentChar + finalStr;
        }
    }

    return finalStr;
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
// console.log(removeLastVowel("better")); // 'bettr'
// console.log(removeLastVowel("graph")); // 'grph'
// console.log(removeLastVowel("thy")); // 'thy'
