/*
Another common question is the degrees of separation between two nodes. In other
words, what is the shortest number of steps you can take to get from one to
another.

You most commonly see this in Facebook, as friends-of-friends, or in LinkedIn,
where a connection is shown as a 2nd, 3rd, etc. degree connection.

Refactor your shortestPath function implementation to instead return the degrees
of separation between two nodes. This should be relatively easy!  The degrees of
separation are just the length of the path between the nodes.

Return 0 if the start node is equal to the end node.
Return null if the end node cannot be reached from the start node.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
}

// console.log(degreesOfSeparation(1, 3)); // -> 2
// console.log(degreesOfSeparation(5, 2)); // -> 1
// console.log(degreesOfSeparation(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = degreesOfSeparation;
