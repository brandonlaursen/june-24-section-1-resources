/*
Given the `friends` array below, use the `Array.map()` method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Assign the output of
`Array.map()` to the `goodFriendsOrNot` variable.
*/

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

const goodFriendsOrNot = friends.filter((friend) => {
  // console.log(friend);// { name: 'Albert', yearsOfFriendship: 3 }
  // if(friend.yearsOfFriendship > 5) {
  //   return true;
  // }
    // return false;

    // return friend.yearsOfFriendship > 5 ? true : false;
    return friend.yearsOfFriendship > 5

});

console.log(goodFriendsOrNot); // [false, false, true, true]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
