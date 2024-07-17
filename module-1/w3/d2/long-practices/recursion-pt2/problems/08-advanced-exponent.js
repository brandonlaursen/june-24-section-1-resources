/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64
advancedExponent(2, 7); // 128
advancedExponent(2, 8); // 256
advancedExponent(2, 9); // 512
advancedExponent(2, 10); // 1024
advancedExponent(2, 11); // 2048
advancedExponent(2, 12); // 4096

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

***********************************************************************/

let counter = 0;
function advancedExponent1(base, power) {




  counter++;
  if (power === 0) return 1;
  if(power === 1) return base;
  if(power === 2) return 2 * base;

  if (power % 2 === 0) {
    const half = advancedExponent1(base, power / 2);
    return half * half;
  } else {
    const half = advancedExponent1(base, (power - 1) / 2);
    return half * half * base;
  }
}
/*

2^4
2**4 = 16

2^2 = 4

4 * 4 = 16



og call

2^64 * 2^64

2^32 * 2^32

2^16 * 2^16

2^8 * 2^8

2^4 * 2^4

2^2 * 2^2

2^1 * 2^1

*/

// console.log('==>',2**100000);

// function advancedExponent2(base, power) {
//   counter++;
//   console.log(counter);
//   if (power === 0) return 1;

//   if (power > 0) {
//     return base * advancedExponent2(base, power - 1);
//   } else {
//     return (1 / base) * advancedExponent2(base, power + 1);
//   }
// }

// og + 2 * 2 * 2 * 2
// console.log(advancedExponent2(2, 4)); // 5 times
// console.log(advancedExponent2(2, 64)); // 70 times
// console.log('times function is called:',counter);
console.log(advancedExponent1(2, 100000)); // 18 times
console.log('times function is called:',counter);//


// og + 2 * 2 * 2 * 2
// console.log(advancedExponent1(2, 4)); // 4 times
// console.log(advancedExponent1(2, 64)); // 8 times
// console.log(advancedExponent1(2, 100000)); // 18 times
// console.log('times function is called:',counter);//


// console.log(advancedExponent(2, 9));// 512
// console.log(advancedExponent(2, 100000)); //
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = advancedExponent;
} catch (e) {
  module.exports = null;
}
