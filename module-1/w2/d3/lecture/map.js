// 2. .map
// * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// * we use map whenever we want to return a new array of elements modified in some way

function double(numbers, callback) {
  // console.log(numbers, callback);

  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    // console.log(number);
    let doubled = callback(number);
    // console.log(doubled);
    result.push(doubled);
  }

  return result;
}

// console.log(double([1,2,3], (number) => number * 2));// [ 2, 4, 6 ]

function doubledWithMap(numbers) {
  // the return of map is a newArr
  // let  [2, 4, 6] = [1,2,3].map( (number) => number * 2  )
  let returnOfMap = numbers.map(function (number) {
    // console.log(number);
    // number * 2
    return number * 2;
    // return true;
  });

  // console.log(returnOfMap);// [ 2, 4, 6 ]

  // return numbers.map((number) => number * 2);

  // return numbers.map((number) => { return number * 2});

  // console.log(numbers.map((number) => number * 2));// [ 2, 4, 6 ]
}

// console.log(doubledWithMap([1, 2, 3]));











function doubledWithMap(numbers) {



  let returnOfMap = numbers.map(function (number) {

    return number * 2;

  });


}

console.log(doubledWithMap([1, 2, 3]));
