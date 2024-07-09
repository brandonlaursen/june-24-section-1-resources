/*
Write a function called `myEvery` that behaves like the `Array.every`
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

function myEvery(friendsArr, callback) {
  // console.log(friendsArr, callback);

  // for(let friendObj of friendsArr) {
  for(let i = 0; i < friendsArr.length; i++){
    let friendObj = friendsArr[i];

    console.log(friendObj);
    // console.log(callback(friendObj));
    if(!callback(friendObj)) {
      return false;
    }
  };
  return true;
}

// const allFriendsStartWithA = myEvery(friends, friend => {
//   return friend.name.startsWith('A');
// }); // false

// console.log(allFriendsStartWithA);

const allFriendsUnder10Years = myEvery(friends, friend => {
  return friend.yearsOfFriendship < 10;
}); // true

console.log(allFriendsUnder10Years)
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    allFriendsStartWithA,
    allFriendsUnder10Years,
  };
} catch {}
