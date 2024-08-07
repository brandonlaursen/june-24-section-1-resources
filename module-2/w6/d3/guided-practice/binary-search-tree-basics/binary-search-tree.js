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
    this.root = null;
  }

  insert(val, currentNode = this.root) {

    const newNode = new TreeNode(val)

    // check if there a root
    if (!this.root) {
      this.root = newNode;
      return;
    }
    // if there is not, the new node is the root

    // check the current nodes value
    if (val < currentNode.val) {
      // if the new value is less than the current node val
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left)
      }
    }  else {

      if(!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }

  }

  search(val) {
    // Your code here

    // 
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

const bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);
// console.log(bst);

module.exports = { BinarySearchTree, TreeNode };
