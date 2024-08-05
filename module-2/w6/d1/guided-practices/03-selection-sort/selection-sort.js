/*


*/

// Time - O(n^2);
// space - O(n)
function selectionSort(arr) {
  // Copy the original array
  const copy = [...arr]; // []

  // Create an array to store the sorted values
  const sorted = []; // [0, 1, 2, 4, 8]

  // While the array is not empty...
  while (copy.length) {
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minValue = Math.min(...copy); // 8
    let minIndex = copy.indexOf(minValue); //0

    // Save and remove the value at the min index
    copy.splice(minIndex, 1); //

    // Add the min value to the end of the sorted array
    sorted.push(minValue);
  }

  return sorted;
}

// console.log(selectionSort([2,4,0, 8, 1]))

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves

  // [0, 1, 2, 4, 8]
  //              ^
  let divider = 0; // 3

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider; //

    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let minValue = arr[minIndex]; // 1

    // Shift every unsorted value to the left of the min value to the right by 1
    // 2 >= 0
    for (let i = minIndex; i >= divider; i--) {
      //
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = minValue;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}

console.log(selectionSortInPlace([2, 4, 0, 8, 1])); //

module.exports = [selectionSort, selectionSortInPlace];
