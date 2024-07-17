


function myFunc(num){

  return num + 2
}


const myFunc2 = (num) => {

  return num + 2
}


// console.log(myFunc2(10));



((num) => {
  // console.log(num + 2)
  return num + 2
})(10)

console.log(
  ((num) => {
    // console.log(num + 2)
    return num + 2
  })(10))


((num) => {
  console.log(num + 2)
  return num + 2
})(10)
