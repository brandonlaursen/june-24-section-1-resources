// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
  }

  insert(val, currentNode=this.root) {
    // Your code here

    // check if there a root
    // if there is not, the new node is the root

    // check the current nodes value
    // if the new value is less than the current node val
    // we traverse the left
      // check if there is left
      // if there isnt, set the newNode as the currentNodes left
      // if there is, traverse

    // if the new value is greater than the current node val
    // we traverse down the right
     // we traverse the right
      // check if there is right
      // if there isnt, set the newNode as the currentNodes right
      // if there is, traverse

  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
