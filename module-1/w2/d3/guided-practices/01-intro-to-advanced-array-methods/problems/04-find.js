/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
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

// Hint: create an array of vowels to use in your solution.
// let vowels = 'aeiouAEIOU';
// let vowels = ['a','e','i','o','u'];

// const threeVowelFriend = friends.find( (friend, i, arr) => {
//   // console.log(friend);
//   // let { name } = friend// "Angela"
//   let name = friend.name;
//   // console.log(name);
//   let counter = 0;
//   for(let i = 0; i < name.length; i++){
//     let letter = name[i].toLowerCase();

//     if(['a','e','i','o','u'].includes(letter)){
//       counter++;
//     }
//   }
//   // console.log(counter);// 3
//   return counter >= 3;
// })

const threeVowelFriend = friends.find( ({name}) => {

  let counter = 0;
  for(let i = 0; i < name.length; i++){
    let letter = name[i].toLowerCase();

    if(['a','e','i','o','u'].includes(letter)){
      counter++;
    }
  }

  // console.log(counter);// 3
  return counter >= 3;
})


console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
