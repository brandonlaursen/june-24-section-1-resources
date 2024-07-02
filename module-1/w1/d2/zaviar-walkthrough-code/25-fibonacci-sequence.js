/*
Write a function fibonacciSequence that accepts a number as an argument. The
function should return an array representing the fibonacci sequence up to the
given length. The first and second numbers of the sequence are 1 and 1. To
generate subsequent numbers of the sequence, we take the sum of the previous two
numbers of the sequence.
*/

//! 5
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5

//! 7
// 1 + 1 = 2
// 2 + 1 = 3
// 3 + 2 = 5
// 5 + 3 = 8
// 8 + 5 = 13

// Loop until n === fibArr.length
// Take last value of fibArr + 2nd to last value of fibArr: //? newFibNum
// Push newFibNum into fibArr
// return fibArr

function fibonacciSequence(n) {
    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return [1];
    }

    if (n === 2) {
        return [1, 1];
    }

    let fibArr = [1, 1];

    while (n > fibArr.length) {
        let firstFibNum = fibArr.at(-1);
        let secondFibNum = fibArr.at(-2);

        let newFibNum = firstFibNum + secondFibNum;

        fibArr.push(newFibNum);
    }

    return fibArr;
}


// //? Hannah Giga Brain solution
// function fibonacciSequence(term) {
//     let fibArr = []; // [0, 1] => [0, 1, 1]
//     // console.log(fibArr);
//     if (term >= 1) {
//         fibArr.push(0, 1);
//         // console.log(fibArr);
//         for (let i = 2; i <= term; i++) {
//             // console.log("-------------New Loop----------------");
//             fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
//             // console.log(fibArr);
//         }
//         fibArr.shift();
//         // console.log(fibArr);
//     }
//     return fibArr;
// }

// console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
// console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
// console.log(fibonacciSequence(2)); // [ 1, 1 ]
// console.log(fibonacciSequence(1)); // [ 1 ]
// console.log(fibonacciSequence(0)); // [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fibonacciSequence;
