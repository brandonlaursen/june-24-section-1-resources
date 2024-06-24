/*
Refactor checkIfLastCharIsAnE

Refactor the function `checkIfLastCharIsAnE` to have only one line of code in
the function code block instead of three lines of code.
*/

// 1. Define a function with the name `checkIfLastCharIsAnE`.
// 2. Define a single parameter for the function called `str`.
function checkIfLastCharIsAnE(str) {
    // 3. Find the last character of `str`.
    let lastChar = str[str.length - 1];
    // 4. Transform the last character of `str` to a lowercase character
    lastChar = lastChar.toLowerCase();
    // 5. Return true if the last character of `str` is an 'e'. Otherwise
    //    return false.
    return lastChar === 'e';
}

// console.log(checkIfLastCharIsAnE('stance')); //=> true
// console.log(checkIfLastCharIsAnE('FLOAT'));  //=> false
// console.log(checkIfLastCharIsAnE('PHONE'));  //=> true


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = checkIfLastCharIsAnE;
