

// 1. How many bits are in 10 kilobytes?
// * There are one thousand bytes in a kilobyte and 8 bits byte. Therefore, there are 80 thousand bits in 10 kilobytes.

// ! 80 thousand

// 2. What is the time complexity of arrayNums?
function arrayNums(n) {
  const arr = [];
  // n
  for (let i = 0 ; i < n ; i++) {
    // n
    arr.unshift(i);
  }
  return arr;
}
arrayNums(10);

// ! O(n^2)

// 3. What are the truth table values for A && (!A || !B)? Results should be in order from top to bottom.
// * and with a false always result in false
// * first 2 automatically 0
// * last one || statement results in 0 as well
// ! 0, 0, 1, 0


// 4. Which two of the following are equal to 0xC9?
// * test in node repl
// * C9 is ASCII
// ! 0x00C9 - adding extra zeros same as removing zeros
// ! 201


// 5.
// * Which of these functions has the worst space complexity?
function first(n) {
  if (n < 0) return;
  console.log(n);
  first(n - 1);
}
function second(n) {
  arr = [];
  for (let i = 0 ; i <= n ; i++) {
    arr.unshift(i);
  }
  console.log(arr.join('\n'));
}

// ! same complexity
// ! first takes up memory with each recursive call
// ! second takes up space in the array


// 6. What is the worst-case time complexity of array.push() in a dynamic array and what causes it?
// ! O(n), if the array has to resize to a new block of memory


function timesThreePlusTen(n) {
  let total = 0;
  for (let i = 0 ; i < n ; i++) {
    total++;
  }
  for (let j = 0 ; j < n ; j++) {
    total++;
  }
  for (let k = 0 ; k < n ; k++) {
    total++;
  }
  for (let l = 0 ; l < 10 ; l++) {
    total++;
  }
  return total
}


// 7. What is the time complexity of timesThreePlusTen?
// ! 0(n)
// * no nested loops just adjacent for loops
// 4n simplifies to n


// 8. Which of the following describes the order values are added and retrieved from a stack?
// ! First in, last out
// ! Last in, first out


// 9. Which of these best describes a pointer?
// * can have million points in a memory cache
// ! A byte value that indexes a location in memory

// 10. What are the three requirements that allow array values to be indexed in constant time?
// ! Occupies a contiguous block of memory
// ! Stores values of the same data type
// ! Stores elements in sequential order



// MC PART 2


// 1. Which of the following describes the order values are added and retrieved from a queue?
// * First in, first out
// * Last in, last out


// 2. Which of these are advantages of singly linked lists over doubly linked lists?
// * Less memory
// * Simpler code


// 3. What happens when you add two different values with the same key into a hash table?
// * The first value is overwritten by the second value

// 4. What is the worst-case time complexity of a lookup in a hash table and what causes it?
// * O(n), if every key in the hash table happens to collide to same bucket.
