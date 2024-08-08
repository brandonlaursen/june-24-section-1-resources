/*

/*

  Graphs
  * Graphs are an abstract data type that represent a collection of nodes and edges.
  * Graphs represent relationships between objects.
  * do not necessarily have a starting node
  * many different types of graphs
  * Represent graphs with integers values

  All are forms of graphs
  * singly linked list
  * doubly linked list
  * binary trees
  * binary search trees

  Real world examples
  * street maps
  * social networks
  * internet
  * decision making trees

  Advantages
  * finding shortest path between two locations
  * finding friends of friends on social media app
  * AI decision making
  * web crawlers

  Types of graphs

  Directed vs undirected
  * Directed
    * may contain arrows to signify direction of relationship between nodes
    * ex: twitter follows
      * May follow someone but they don't follow you back

  * Undirected
    * no arrows means the graphs has a two way relationship between nodes
      * ex: Facebook Friend
        * a mutual connection

  Cyclic vs. acyclic
  ! Key difference between tree + graphs, graphs can have cycles, trees cannot
  * Cyclic
    * contains at least one cycle

  * Acyclic
    * contains no cycles

  Weighted vs. Unweighted
  * Edges can also have weight to them
    * connection between two nodes

  * Weighted graph
    * Roads could represent edges between two locations
    * traffic could impact the distance between two locations
    * different roads/edges may be weighted differently

  * Unweighted graphs
    * every edge has a weight of 1

  We represent graphs with adjacency list
  * object with a key for each node in the graph with the value of a list of nodes it points to.
  * No particular order or root node
  * No duplicate edges - represent using a set
    * makes checking if two nodes are neighbors O(1) - .has vs .includes - O(n)

  Graph Vocabulary:
  * Vertex: A node in the graph. Vertex and node can be used interchangeably
  * Directed edge: A one-way connection from one vertex to another
  * Undirected edge: A two-way connection between two vertices. Functionally the same as a bidirectional edge
  * Bidirectional edge: A two-way connection between two vertices that can be traversed in either direction
  * Edge weight: The cost of traversing an edge.
  * Cyclic/acyclic: A cyclic graph is a graph with at least 1 cycle, or the potential to have a cycle
  * Adjacency list: A way of representing a graph in code with an object

*/

// Draw it out
adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};


