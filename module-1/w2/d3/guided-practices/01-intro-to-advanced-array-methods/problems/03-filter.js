/*
Given the array `friends` below, use the `Array.filter()` method to filter the
array to only contain friends whose name starts with an "A" and who has been
friends for over 5 years. Assign the output of `Array.filter()` to the
`filteredFriends` variable.
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

// filteredFriends is a variable that holds the return value of filter
// filter returns an array of all the elements that meet a condition
// filter is called on an array
// filter takes in a callback function
// callback function is a function that is passed to a function as another argument
// friend, i and arr, are parameters to represent the arguments passed
// these arguments are passed under the hood through filter
const filteredFriends = friends.filter( function(friend, i, arr) {

  console.log('====',friend.yearsOfFriendship);

  // console.log(friend.name[0] === 'A' && friend.yearsOfFriendship > 5);

  // what is friend  { name: 'Albert', yearsOfFriendship: 3 },
  // we are keying the friend object
  if(friend.name[0] === 'A' && friend.yearsOfFriendship > 5) {

    return true;
  };

  return false;

});


// const filteredFriends = friends.filter((filtered) => {
//   console.log(filtered);
//   if (filtered.name[0] === 'A' && filtered.yearsOfFriendship > 5) return true;
//   else return false;
// });

// const filteredFriends = friends.filter((word) => {

//   if (word.name[0] === `A` && word.yearsOfFriendship > 5) {
//     console.log(word.name + word.yearsOfFriendship)
//     return word.name + word.yearsOfFriendship;
//   }

//   });

// const filteredFriends = friends.filter(
//   (friend) => friend.name[0] === "A" && friend.yearsOfFriendship > 5
// ).map(obj => obj.name);

console.log(filteredFriends); // [ { name: "Agatha", yearsOfFriendship: 6 } ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
