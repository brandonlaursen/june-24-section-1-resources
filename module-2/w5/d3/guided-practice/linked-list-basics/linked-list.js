class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
  }

  addToHead(val) {

    // create the new node
    // point the newNodes next at the old head
    // this.head point at the new node
  }

  addToTail(val) {
    // Your code here
    // create the new node
    // find the head
    // traverse through the linked list
      // by checking what the node.next
      // if the node.next is null, then thats the last node
    // point last nodes next at the new node
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
};

const ll = new LinkedList();
// console.log(ll);


module.exports = LinkedList;
