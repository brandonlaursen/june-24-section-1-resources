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
    const newNode = new TreeNode(val);

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
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    // Your code here

    let currentNode = this.root;

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // 4 2 1 3 6 5 7
  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  // 1 2 3 4 5 6 7
  inOrderTraversal(currentNode = this.root) {

     // Your code here
     if(!currentNode) return;


     this.inOrderTraversal(currentNode.left);
     console.log(currentNode.val);
     this.inOrderTraversal(currentNode.right);
  }

  // 1 3 2 5 7 6 4
  postOrderTraversal(currentNode = this.root) {
    // Your code here

     if(!currentNode) return;

     this.postOrderTraversal(currentNode.left);
     this.postOrderTraversal(currentNode.right);
     console.log(currentNode.val);
  }



  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
    let queue = [this.root];

    while(queue.length > 0) {
      let currentNode = queue.shift();

      console.log(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }

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
// // bst.preOrderTraversal();
// // bst.inOrderTraversal();
bst.breadthFirstTraversal()
// bst.postOrderTraversal();
// console.log(bst);

module.exports = { BinarySearchTree, TreeNode };
