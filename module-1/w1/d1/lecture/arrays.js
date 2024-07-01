/*

  Arrays
  * make lists
  * group data together
  * store different data types
  * they're mutable, easier to work
  * Organization of data into a specific address

*/

let name = "brandon";
let age = 28;
let isInstructor = true;

let arr = ["brandon", 28, true];

// console.log(arr); // [ 'brandon', 28, true ]
// console.log(arr[0]); // brandon
// console.log(arr[1]); // 28
// console.log(arr[2]); // true

// let nameArr = ["b", "r", "a", "n", "d", "o", "n"];
// console.log(nameArr[0]);// b
// console.log(name[0]);

// let matrix = [ [1,2,3], [3,4,5]];
// console.log(matrix);// [ [ 1, 2, 3 ], [ 3, 4, 5 ] ]


arr = ["brandon", 28, true];


// console.log(arr[0]);// brandon
// let i = 0;

// console.log(arr[i]);// brandon

// length
// console.log(arr.length);// 3
// console.log(arr);// [ 'brandon', 28, true ]
// i = 0   arr[0] = 'brandon'
// i = 1   arr[1] = 28
// i = 2   arr[2] = true

for(let i = 0; i < arr.length; i++) {
  let value = arr[i];
  // console.log('i', i, 'value', value, arr[i]);
  // console.log(value, arr[i]);
}



arr = ["brandon", 28, true];

// console.log(arr);
// console.log(arr[0])// 'brandon'

// // 'brandon'[0]
// console.log(arr[0][0]);//'b'

// let name2 = arr[0];
// console.log(name2);// brandon
// console.log(name2[0]);// b
// let firstLetter = name2[0];
// console.log(firstLetter);// b

// console.log(arr[0]);
// arr = ["brandon", 28, true];
// let string = arr[0]
// for(let i  = 0; i  < string.length; i++){
//   // console.log('===>', string[i]);
// }


arr = ["brandon", 28, true];

// console.table(arr);

// console.table('string');
// console.log('===>',arr[1]);
// console.log(arr);// ["brandon", 28, true];
// console.log(arr[0]);// brandon
// console.log(arr[0].length);// 7

// let i = 7; i < 28; i++)
// for(let i = arr[0].length; i < arr[1]; i++){
//   // console.table(i);
// }

// var i = 3
for(i = 0 ; i < 3; i++){
  console.log(i);

}

// var i = 2;

// console.log(i);


// for(i = 5; i < 10; i++){
//   console.log(i);
// }

// console.log('==>',i);// will this run?/

// let myDog = 'little bear'
// console.log(myDog);
