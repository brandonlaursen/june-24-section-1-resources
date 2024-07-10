const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1000;
// acc = 0 currentValue = 1
// acc = 1 currentValue = 2
// acc = 3 currentValue = 3
// acc = 6 currentValue = 4
// acc = 10
const sumWithInitial = array1.reduce(
  function (accumulator, currentValue) {
    // console.log('acc',accumulator, 'currentValue',currentValue)
    return accumulator + currentValue; // 6 + 4 = 10
  },

  initialValue
);

let newString = ["lets", "make", "a", "string"].reduce((acc, currentString) => {
  // console.log(acc, currentString);
  // return acc += ' ' + currentString
}, "");

// console.log(newString);

// apple
// { a:1, p:2, l:1, e:1 }

let string = "apple";

console.log([...string]);


let obj = [...string].reduce((acc, letter) => {
  // console.log(acc, letter);
  if (acc[letter] === undefined) {
    acc[letter] = 1;
  } else {
    acc[letter] += 1;
  }
  return acc;
}, {});



// console.log(obj);


