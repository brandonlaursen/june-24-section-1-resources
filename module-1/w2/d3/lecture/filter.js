


// 3. .filter
// * The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// * we use filter whenever we want to return a new array of elements that meet a condition


let numbers = [1,2,3,4,5,6,7,8,9,10];


let odds = numbers.filter( (number) => {

  // if(number % 2 !== 0) {
  //   return true
  // }

  // return false;

  return number % 2 !== 0
})

console.log(odds);// [ 1, 3, 5, 7, 9 ]
