/*
Write a function sameCharCollapse that takes in a string and returns a collapsed
version of the string. To collapse the string, we repeatedly delete 2 adjacent
characters that are the same until there are no such adjacent characters. If
there are multiple pairs that can be collapsed, delete the leftmost pair.

For example, we take the following steps to collapse "zzzxaaxy":
zzzxaaxy -> zxaaxy -> zxxy -> zy

  input: "zzzxaaxy"
  "zy"
  output:  "zy"
  * zzzxaaxy -> zxaaxy -> zxxy -> zy

*/


function sameCharCollapse(string) {

  let stack = [];
  // let stack = [zy ]
  // let res = '';

  for(let i = 0; i < string.length; i++){
    let char = string[i];

    if(stack.length && stack[stack.length - 1] === char){
      stack.pop();
      // res = res.slice(0, -1);
      // res.slice(res.length - 1)

    } else {
      stack.push(char);
      // res += char;
    }
    // console.log(res);
  };

  return stack.join('')
  // return res;
}
// let sameCharCollapse = function (str) {
//   let res = ``;
//   while (res !== str) {
//     res = str;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//         str = str.slice(0, i) + str.slice(i + 2);
//       }
//     }
//   }
//   return str;
// };

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sameCharCollapse;
