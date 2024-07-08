/*

  Iterating through objects
  * Objects store unordered key:value pairs
  * Cannot rely on indices to access values
  * We will have to use different ways to access and keys and values in an object

  * Well be covering
    ** for in
    ** Object.values
    ** Object.keys
    ** Object.entries

*/

let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};

people2 = {
  person1: "brandon",
  person2: "maica",
  person3: "charles",
  person4: "trevor",
};

// console.log(people.person1);
// console.log(people.person2);
// let person = people[i];

// for in
for (let person in people2) {
  // console.log("key", person);
  // console.log("   value", people2[person]);
}

people2 = {
  person1: "brandon",
  person2: "maica",
  person3: "charles",
  person4: "trevor",
};
// object.keys


let keysArr = Object.keys(people2);
// console.log(keysArr);
// [ 'person1', 'person2', 'person3', 'person4' ]

for(let i = 0; i < keysArr.length; i++){
  let key = keysArr[i];
  // console.log(key);
  let value = people2[key];
  // console.log(value);
}


// let valuesArr = Object.values(people2);
// console.log(valuesArr);// [ 'brandon', 'maica', 'charles', 'trevor' ]


let entries = Object.entries(people2);
// console.log(entries);




// for in USE ONLY ON OBJECTS
people2 = {
  person1: "brandon",
  person2: "maica",
  person3: "charles",
  person4: "trevor",
};

for(let key in people2){
  // let value = people2[key];
  // console.log(value);
}


// for of
// for us on arrays
let array = [1,2,3,4,5];

for(let i = 0; i < array.length; i++){
  let num = array[i];

}

for(let num of array){
  console.log(num);
}


// ! doesnt work!
// for(let num of people2){
//   console.log(num);
// }
people2 = {
  person1: "brandon",
  person2: "maica",
  person3: "charles",
  person4: "trevor",
};

for(let [key, value] of Object.entries(people2)){
  console.log(key, value);
}
