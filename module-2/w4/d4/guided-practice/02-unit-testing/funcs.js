function isFive(num) {
  // Your code here
  // console.log(num);
  return num === 5;
}

// const num1 = 5;
// const actual1 = isFive(num1); // should be true
// console.log(actual1);//

function isOdd(number) {
  if (typeof number !== "number") {
    throw new TypeError("not a number");
  }

  return number % 2 !== 0;
}

// const num1 = 3;
// const actual1 = isOdd(num1);
// console.log(actual1);// true

function myRange(min, max, step = 1) {
  // Your code here
  const array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }

  return array;
}

// const [min1, max1] = [0, 5];
// const actual1 = myRange(min1, max1);
// console.log(actual1); // [0, 1, 2, 3, 4, 5];

module.exports = { isFive, isOdd, myRange };
