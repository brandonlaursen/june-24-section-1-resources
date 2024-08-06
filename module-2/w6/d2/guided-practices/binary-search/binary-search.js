/*




       [1,2,3,4,5]
              ^

       low - 3
       hi  - 3
       mid - (low + hi) / 2  =  3




      value = 4

*/

function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.indexOf(target);
}

// console.log(linearSearch([1,2,3,4,5], 90));
/*

    [1,2,3,4,5]
         ^

         3
*/
function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let low = 0;
  let high = arr.length;
  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    const mid = Math.floor((low + high) / 2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
    // Return the midpoint index
    if (arr[mid] === target) return mid;
    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    else if (arr[mid] < target) low = mid + 1;
    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    else high = mid - 1;
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
};


console.log(binarySearch([1,2,3,4,5], 4));//
// function binarySearch(arr, target) {
//   // Set integers pointing to the high and low range of possible indices
//   let lo = 0; // 0
//   let hi = arr.length; // 5
//   // While high and low indices do not overlap...

//   while (lo <= hi) {
//     // Find the midpoint between high and low indices
//     let midPoint = Math.floor((lo + hi) / 2);

//     // Compare the target value to the midpoint value
//     // If the target equals the midpoint...
//     // Return the midpoint index
//     if (arr[midPoint] === target) {
//       return midPoint;
//     } else if (arr[midPoint] < target) {
//       // If the target is higher than the midpoint...
//       // Move the low pointer to midpoint + 1
//       lo = midPoint + 1;
//       // lo++;
//     } else {
//       // If the target is less than the midpoint...
//       // Move the high pointer to midpoint - 1
//       hi = midPoint - 1;
//       // hi--
//     }
//   }

//   // Return -1 if the loop exits with overlapping pointers
//   return -1;
// };


module.exports = [linearSearch, binarySearch];
