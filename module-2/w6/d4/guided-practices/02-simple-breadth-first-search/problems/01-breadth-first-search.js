/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function breadthFirstSearch(start, end) {
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length) {
    const curr = queue.shift();

    // DO THE THING
    if (curr === end) return true;

    const neighbors = adjList[curr];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  return false;
}

// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log(breadthFirstSearch(6, 1)); // -> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
