/*
Write a function called `myFilter` that behaves like the `Array.filter`
method.
*/

// Your code here

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3,
  },
  {
    name: "Angela",
    yearsOfFriendship: 2,
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8,
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6,
  },
];

function myFilter(friendsArr, callback) {
  let result = [];
  // console.log(friendsArr, callback);
  for (let friendObj of friendsArr) {
    // console.log(friendObj);
    // console.log(callback(friendObj));
    if (callback(friendObj) === true) {
      result.push(friendObj);
    }
  }

  return result;
}

function callback(friend) {
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
}

const filteredFriends = myFilter(friends, callback); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

// const filteredFriends2 = myFilter(
//   friends,
//   (friend) => friend.name[0] === "A" && friend.yearsOfFriendship > 5
// ); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

console.log(filteredFriends);

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
