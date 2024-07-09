



/*

  Destructuring
  * Allows us to move and and access values within an array or object
  * We can use destructuring behavior to extract elements of an array or object

*/



let arr = [1,true, 'string'];


// num = 1
// rest = [true, 'string']
// rest is to left | spread is to the right
// rest = [true, 'string']
let [num, ...rest] = [...arr];

// console.log(rest);
// console.log(num, bool, string);// 1 true string


let obj = { name: 'brandon', age: 28, location: 'tampa' };

let { name, ...restOfObj} = obj;
// console.log(name, restOfObj);// brandon { age: 28, location: 'tampa' }

// let { name:newName, age:newAge } = obj;




// console.log(name, age);// brandon 28
// console.log(newName, newAge);// brandon 28

let obj2 = {
  key1: true,
  key2: {
    nestedKey: true,
    nestedKey2: false
  }
}

// let { key2: {nestedKey} } = obj2;
// console.log(nestedKey);

for(let key in obj2) {
  // console.log(key);
  let value = obj2[key];
  // console.log(value)
  for(let key2 in value) {
    // console.log(key2);
    let value2 = value[key2];
    console.log(value2);
  }
}



// for(let i = 0; i < 'string'; i++){
//   console.log('do we make it')
// }

// let firstName = 'brandon';
// let lastName = 'laursen';

// let temp = firstName;
// lastName = temp;
// firstName = lastName;


// [firstName, lastName] = [lastName, firstName];

// console.log(firstName, lastName);// laursen brandon
