/*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/




// function sentenceMaker(word1, word2, word3, word4) {

//   return word1 + ' ' + word2 + ' ' + word3 + ' ' + word4
// };

// word1 = 'lets'
// words = ['make', 'a', 'sentence']
function sentenceMaker(...words) {

  console.log(words);// [ 'lets', 'make', 'a', 'sentence' ]
  // console.log(word1);// lets
  // console.log(words);// [ 'make', 'a', 'sentence' ]

  // let sentence = word1;
  // for(let word of words) {
  //   // console.log(word);
  //   sentence += ' ' + word;
  // }

  // return sentence;
  // return `${word1} ${words.join(' ')}`
  return words.join(' ')
};


// console.log(sentenceMaker('lets', 'make', 'a', 'sentence', '!'))
// console.log(sentenceMaker('hello', 'world'));// hello world


/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

    * Create a shallow copy

*/

let arr1  = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [0, ...arr1, ...arr2, 7];
// console.log(arr1.concat(arr2));

// [1,2,3,4,5,6];
// console.log(arr3);// [ 0, 1, 2, 3, 4, 5, 6, 7 ]

// arr3.push(true);

// let copyArr = [...arr3];
// // console.log(copyArr);
// // copyArr.push(true);
// arr3.push(true);

// console.log(copyArr);
// console.log(copyArr, arr3);

let matrix = [[1,2,3], [4,5,6]];
// matrix => <ref1> => [ [],  [] ]
//                       ^     ^
//                     <ref5> <ref6>

let copyMatrix = [...matrix];
// copyMatrix => <ref2> => [ [],  [] ]
//                           ^     ^
//                       <ref5> <ref6>

// console.log(copyMatrix);// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// copyMatrix.push(true);
// copyMatrix[0].push(true);


// console.log('matrix',matrix)// matrix [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
// console.log('copyMatrix',copyMatrix)// copyMatrix [ [ 1, 2, 3 ], [ 4, 5, 6 ], true ]



let obj1 = { name:'brandon'}
let obj2 = {age: 28};
let obj3 = {...obj1, ...obj2, location: 'tampa'};

// console.log(obj3);// { name: 'brandon', age: 28, location: 'tampa' }



