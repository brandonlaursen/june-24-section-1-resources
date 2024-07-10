/*
Given the array `friends` below, use the `Array.forEach()` method to iterate
through each element and print the `name` and `yearsOfFriendship` properties
stylized as "`name`: `yearsOfFriendship` years".

For example: "Albert: 3 years"
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

//

let res = friends.forEach( (friendObj) => {
  console.log(friendObj.name + ': ' +  friendObj.yearsOfFriendship + " years");
} )

console.log(res);


// friends.forEach(function (friendObj) {
//   console.log(friendObj.name + ": " + friendObj.yearsOfFriendship + " years");
// });

// function logFriend(friendObj) {
//   console.log(`${friendObj.name}: ${friendObj.yearsOfFriendship} years`);
// }
// friends.forEach(logFriend);

friends.forEach((obj) => console.log(obj[Object.values(obj)]) )

// console.log(obj[[ 'Angela', 2 ]])
// [ 'Angela', 2 ]
// console.log(Object.values( {
//   name: "Angela",
//   yearsOfFriendship: 2,
// }))
/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
