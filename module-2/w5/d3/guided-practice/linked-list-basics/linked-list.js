class LinkedListNode {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

/*

*/

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  /*

  const newNode = LinkedListNode(1);
  node { value: 1 next: null };


  const ll = LinkedList();
  ll { head: null, length: 0 }

  Constructor
  - default parma -  constructor(val = 5) when you may or may not get an argument
  - dont use param - constructor() - where you dont expect an argument, so its not reliant on input


  */

  addToHead(val) {
    // ll { head: { value: 1 next: null }, length: 1 }

    // create the new node -> { value: 2 next: null };
    // const newNode = new LinkedListNode(val);

    this.head = new LinkedListNode(val, this.head);
    this.length++;
    
    // point the newNodes next at the old head
    // { value: 2 next:  { value: 1 next: null } }
    // newNode.next = this.head;

    // // ll { head: { value: 2 next:  { value: 1 next: null } }, length: 2 }
    // // this.head point at the new node
    // this.head = newNode;
    // this.length++;
  }

  addToTail(val) {
    // create the new node
    const newNode = new LinkedListNode(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    // traverse through the linked list
    let curr = this.head;

    while(curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
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
}

const ll = new LinkedList();
// console.log(ll);

module.exports = LinkedList;
