/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {

    let vowels = 'aeiouAEIOU';

    let vowelObj = {};

    let stringArr = string.split('');
    // console.log(stringArr);// [ 'd', 'e', 'l','i', 'c', 'i','o', 'u', 's']
    stringArr.forEach((letter) => {
        // console.log(letter)
        if(vowels.includes(letter.toLowerCase())){
            // console.log(letter);
            if(vowelObj[letter] === undefined){
                vowelObj[letter] = 1
            }
        }
    })

    // console.log(vowelObj);// { e: 1, i: 1, o: 1, u: 1 }
    // console.log(Object.keys(vowelObj).length);
    return Object.keys(vowelObj).length >= 3

};


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
