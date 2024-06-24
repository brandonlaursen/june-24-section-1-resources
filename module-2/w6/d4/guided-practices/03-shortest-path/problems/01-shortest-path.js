/*
One of the most common uses of a breadth-first search is to find a SINGLE
shortest path from one node to another. Refactor your implementation of
breadth-first search and use the technique from the reading. If it is possible
to reach the end node from the start node, return a SINGLE shortest path as an
array of nodes from the start to the end node. Otherwise, return null.

**IMPORTANT TIP:**  Be very careful creating your new path.  If you modify
currentPath, you're not just modifying the local copy.  You are also making a
change to the path in the queue.  You should not push to currentPath because
currentPath is a reference that gives another name to easily access that
array.  Instead, use `Array.concat()` or another method to copy the values into
a new array.

DO NOT USE:
currentPath.push(neighbor)
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function shortestPath(start, end) {
  // Your code here 
}

// console.log(shortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log(shortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log(shortestPath(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestPath;
