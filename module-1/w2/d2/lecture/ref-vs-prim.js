/*


 Reference vs Primitive Types

  What are Reference Data Types?
    * Mutable - can be changed
    ** Objects (includes arrays!)

  What are Primitive Data Type?
   * Immutable - cant be changed
    ** Boolean
    ** Null
    ** Undefined
    ** Number
    ** String

*/

// primitive data type

let age = 27;
// age => 27

let newAge = age;
// newAge => age => 27

age += 1;// age = age + 1
// age => 28

// console.log('age', age, 'newAge', newAge);// age 28 newAge 27
// age => 28
// newAge => 27


// reference data types
// [] {} function

// cat1 => <reference1>
let cat1 = {
  name:'pumpkin',
  age: 4
};

// cat2 => cat1 => <reference1>
// cat2 => <reference1>
// cat1 => <reference1>
let cat2 = cat1;
console.log('cat1', cat1, 'cat2', cat2);
//cat1 { name: 'pumpkin', age: 4 } cat2 { name: 'pumpkin', age: 4 }

// <reference1>.name
cat1.name = 'mochi';

console.log('cat1', cat1, 'cat2', cat2);
// cat1 { name: 'mochi', age: 4 }   cat2 { name: 'mochi', age: 4 }

cat2.name = 'celebi';

// console.log(cat1, cat2);// { name: 'celebi', age: 4 } { name: 'celebi', age: 4 }

// how we do make a copy of an object

// copyCat => <reference2>
// cat1 => <reference1>
let copyCat = {...cat1};
// console.log(cat1);// { name: 'celebi', age: 4 }
// console.log(copyCat);// { name: 'celebi', age: 4 }

copyCat.name = 'garfield';

console.log('copyCat', copyCat, 'cat1', cat1);
// copyCat { name: 'garfield', age: 4 } cat1 { name: 'celebi', age: 4 }
// copyCat => { name: 'garfield', age: 4 }
// cat1 => { name: 'celebi', age: 4 }

// console.log({} == {});// false
// <ref34> == <56>


function generateCat(name) {
  return {
    name
  }
}



// console.log(generateCat('pumpkin'));// { name: 'pumpkin' }
// console.log(generateCat('mochi'));// { name: 'mochi' }

// let pumpkin  = generateCat('pumpkin');
// let mochi = generateCat('mochi');

// console.log(pumpkin === mochi);// false
