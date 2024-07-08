/*
Write a function called printNames that takes in an array of objects. It should
loop through all of the objects and print the "name" key from each object.
*/

// Your code here

// Example:



let printNames = (names)  => {

  // console.log(names[0]);
  for(let i = 0; i < names.length; i++){
    let nameObj = names[i];
    // console.log(nameObj);

    // console.log(nameObj.name);
    // console.log(nameObj['name'])
    // console.log(names[i].name);
    // console.log(names[i]['name']);

  }
}


printNames([
  { name: "Joey", likes: ["sandwiches"] },
  { hobby: "tells jokes", name: "Chandler" },
]); // prints 'Joey' then 'Chandler'



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
