/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

/*

  what data type am i working with? - string -> house
  what am i starting with? a Full string
  what do i need to access? each letter h o u s e
  how do i know when i accessed letter? when we reach an empty string => ''
  How do i shorten my string? a slice

  base case: an empty string => ''
  recursive step: slice the string
  * what do i each time i have a letter

*/


// console.log(''.length);// 0

const reverse = str => !str.length ? '' :   reverse(str.substring(1)) + str[0];

function reverse(str) {
  // console.log('==>',reversedStr);

  // if(str.length === 0)
  if (!str.length) return '';

  // let currentLetter = str[0]; //
  // console.log('first letter:',currentLetter); // h

  // let allButFirst = str.slice(1);
  // console.log(allButFirst);// ouse
  // currentLetter += reversedStr;
  // reversedStr += currentLetter
  // reversedStr = currentLetter + reversedStr;
  // reversedStr
  // console.log(reversedStr);

  // return reverse(allButFirst) + currentLetter;

  let recurse = reverse(str.substring(1)) + str[0];
  // console.log(recurse);
// return recurse;
}

/*

reverse("")      => ''

reverse("e")     => ''  + e =>  'e'

reverse("se")    => 'e' + s => 'es'

reverse("use")   => 'es'  + u => 'esu'

reverse("ouse")  => 'esu' + o => 'esuo'

reverse("house") => 'esuo' + h => 'esuoh'
*/

console.log(reverse("house")); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
