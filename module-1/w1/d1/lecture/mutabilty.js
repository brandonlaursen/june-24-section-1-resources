



/*

  Mutability
  * Mutability is the concept of certain pieces of data being able to changed or mutated.Of the datatypes that we've seen so far, only arrays are mutable.

  Mutable - can be changed
    * arrays
    * objects - learn next week

  Immutable - cannot be changed
    * strings
    * numbers
    * booleans


*/

// let sequence = ['T','A','C','G'];

// console.log(sequence);// [ 'T', 'A', 'C', 'G' ]

// sequence[0] = 'C';

// console.log(sequence);// [ 'C', 'A', 'C', 'G' ]

// let name = 'brandon';
// console.log(name);// brandon
// name[0] = 'k';
// console.log(name);// brandon

// let newName = '';

// for(let i = 0; i < name.length; i++){
// let letter = name[i];
//  newName += letter.toUpperCase();
//  console.log(newName);
// }

// console.log(newName);// BRANDON




// let pushArr = ['hip', 'hip'];

// let copyArr = pushArr.slice();

// copyArr.push('array');

// console.log(pushArr);
// console.log(copyArr);



// console.log(months);

// const removed = months.splice(0, 2, 'example', 'example1');

// // mutated array
// console.log(months);// [ 'example', 'April', 'June' ]
// // elements spliced off
// console.log(removed);// [ 'Jan', 'March' ]

//                0       1        2        3
const months = ['Jan', 'March', 'April', 'June'];

months.push('july')
// console.log(months);// [ 'Jan', 'March', 'April', 'June', 'july' ]

// console.log(months.push('August'));// 6
let returnValOfPush = months.push('August')
// console.log(returnValOfPush);// 6


console.log(months);// [ 'Jan', 'March', 'April', 'June', 'july', 'August' ]
// months.pop();
// console.log(months.pop());// August
let newLength = months.pop();
// console.log(months, newLength );// [ 'Jan', 'March', 'April', 'June', 'july' ]




// mutated the array
// is returning value
