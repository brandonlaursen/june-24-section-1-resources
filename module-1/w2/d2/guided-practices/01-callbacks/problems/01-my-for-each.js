/*
Write a function called `myForEach` that behaves like the `Array.forEach`
method.
*/

// Your code here

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];



// function myForEach(friends, callback){
//   // console.log(friends, callback);

//   for(let i = 0; i < friends.length; i++){
//     let friendObj = friends[i];
//     // console.log(friendObj);// { name: 'Albert', yearsOfFriendship: 3 }
//     // console.log(friendObj.name);
//    callback(friendObj);

//   }
// }


// myForEach(friends, friend => {
//   console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
// });


function myForEach(friends, callback){

  for (let i = 0; i < friends.length; i++){
    let friendObj = friends[i];
    // console.log(callback(friendObj));
    callback(friendObj);

  }
}

function callback(friend){
  console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
}

myForEach(friends, callback);

/* prints:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/


// let myFunc = friend => {
//   console.log(friend.name + ": " + friend.yearsOfFriendship + " years");// Albert: 3 years
// }



/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = myForEach;
} catch {}
