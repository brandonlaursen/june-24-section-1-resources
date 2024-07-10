/*
Given the `friends` array, use the `Array.reduce()` method to get the
sum of all the years of friendship with all the friends in the array. Assign the
output of `Array.reduce()` to the `totalYears` variable.
*/

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

// 1 iteration | acc = 0  |   { name: "Angela", yearsOfFriendship: 3 }
// 2 iteration | acc = 3  |   { name: "Albert", yearsOfFriendship: 2 }
// 3 iteration | acc = 5  |   { name: "Freddy", yearsOfFriendship: 8 }
// 4 iteration | acc = 13  |  { name: "Agatha", yearsOfFriendship: 6 }
// totalYears = 19

// const totalYears = friends.reduce(

//   (acc, friend) => {
//   console.log('acc:',acc,'yearsOfFriendship', friend.yearsOfFriendship);
//   acc *= friend.yearsOfFriendship;
//   return acc;

// },1)


const totalYears = friends.reduce(sum, 0);

function sum(acc, friend){

  return acc += friend.yearsOfFriendship;
}

console.log(totalYears); // 19


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = totalYears;
} catch {}
