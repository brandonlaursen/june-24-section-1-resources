/*
Write a function called `myMap` that behaves like the `Array.map`
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

function myMap(friends, callback){

  let result = [];

  // for(let i = 0; i < friends.length; i++){
  //   let friendObj = friends[i];
  for(let friendObj of friends){
    // console.log(friendObj);// { name: 'Albert', yearsOfFriendship: 3 }
    // console.log(callback(friendObj));//
    result.push(callback(friendObj));
  };

  return result;
}

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]

console.log(goodFriendsOrNot);


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
