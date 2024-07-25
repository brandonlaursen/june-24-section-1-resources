








// * Creating our own errors
// * syntax - new Error([message[, fileName[, lineNumber]]])



const firstError = new Error('I am error');
const secondError = Error('I am an error to')
// console.log("secondError:", secondError);
// console.log(firstError);



function giveMeNumber(num) {

  if(typeof num !== 'number') {
    throw new Error('Thats not a numba!!')
  } else {
    return 'Nice numba!'
  }

  console.log('do we make it?')
};

// console.log(giveMeNumber(10));
// console.log(giveMeNumber('23'));



function half(num) {

  try {
    if(typeof num !== 'number') {
      throw new Error('not a number')
    } else {
      return num / 2;
    }
  } catch(e) {
    console.log(e);
  }

};

// console.log(half(10));
// console.log(half('10'));
// console.log('do we make it')

try {
  // statements that will be attempted to here
} catch (error) {
  // if an error is thrown it will be "caught"
  // allowing the program to continue execution
  // these statements will be run and the program will continue!
}

class customError extends Error{

};

// console.log(customError);

try {
  // console.log(half(100));
  console.log(half(`100`));
} catch(e) {
  // console.log('==>',e);
  console.log(e.name);
  console.log(e.message);

} finally {
  // this will always run
  console.log('this is in the finally block')
}

// console.log('do we make it?')
