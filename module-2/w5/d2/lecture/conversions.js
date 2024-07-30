


// Base 10 - Decimal
  // * 10 Options: 0 - 9
// Base 2  - Binary
  // * 2 Options: 0 & 1
// Base 16 - Hexadecimal
  // * 16 Options: 0 - 9, A,B,C,D,E,F


// 0b 0101 0101
// * Binary digit is a bit
// 1 or 0
// * 4 bits is a nibble
// 0101
// * 8 bits is a byte
// 0101 0101


// ! 1 byte = 8 bits

// Kilobyte - thousand
// * 8000 bits
// * 4 billion nibbles
// 0101
// * 1 billion bytes
// 0010 0101



/*

  Converting from binary/hex to decimal
  * Also used to count in decimal
  * Formula
  * Find out what are we converting between
  * Assign each value to index
    * Left to right starting with 0
  * Raise base to the current index
  * Take result and multiply by value at index
  * Sum results



  Base 10 - Decimal
  - 4 7 2 9
  * start from the right
  * smallest number first
  * what base are we working with?
    * We are working with base 10
  * Raise to base to the index
  * time our value by that number
  * sum all the values

  <---
  Index -   3        2       1       0
  B^I   - 10^3      10^2     10^1    10^0
          1000      100         10        1
  Value -  4         7         2       9
(B^I)*V - 4000      700        20      9
          4000 + 700 + 20 + 9

          Sum = 4729




 sum = 128 + 64 + 8 + 2
  202


   decimal/base 10 -> binary/base 2
  * Formula
  * Find out what we are converting between
  * Take decimal value and divide by base(either 2 or 16)
  * Note the remainder
  * Keep doing so till decimal value cannot be divided
  * Starting from last value
  * concatenate values and append proper pre-fix: 0b or 0x


  decimal/base 10 -> binary/base 2
  202 -> 0b 1100 1010

  202 / 2 = 101 - r0
  101 / 2 = 50  - r1
  50 / 2  = 25  - r0
  25 / 2  = 12  - r1
  12 / 2  = 6   - r0
  6 / 2   = 3   - r0
  3 / 2   = 1   - r1
  1 / 2   = 1   - r1 <-- starting first value

  0b1100 1010


    Binary/base 2 ->  decimal/base 10

  0b 1100 1010  -> 202

  Index -  7    6    5    4    3    2    1     0
  B^I   -  2^7  2^6  2^5  2^4  2^3  2^2  2^1    2^0
          128  64     32   16   8    4    2    1
  Value -  1    1    0    0    1    0    1     0
 (B^I)*V   128  64   0    0    8    0    2     0

 0b 1100 1010
 11,001,010

*/

const binary = `0b11001010`;

function binaryToDecimal(binaryStr) {

  binaryStr = binary.slice(2);
  // console.log(binaryStr);// 11001010
  // binaryStr = [...binaryStr].reverse();
  binaryStr = binaryStr.split('').reverse().join('');
  // console.log(binaryStr);

  let sum = 0;

  for(let i = 0; i < binaryStr.length; i++){
    let bit = binaryStr[i];
    // console.log(bit);
    let num = Math.pow(2, i) * parseInt(bit);
    // console.log(num);
    sum += num;
  };

  return sum;

};

// console.log(binaryToDecimal(binary));// 202
// parseInt(string, radix)
// ! 0b dont work
// console.log(parseInt(11001010, 2))
// console.log(parseInt(`11001010`, 2))


// let decimal = parseInt(11001010, 2)

// decimal to binary
// console.log(decimal.toString(2));// 11001010
