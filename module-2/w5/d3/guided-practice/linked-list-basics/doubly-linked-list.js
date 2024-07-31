class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    let sum = 0;
    while (current) {
      process.stdout.write(`${current.value} <-> `);

      // if (current.value === 200) {
      //   console.log(200);
      // }
      sum += current.value;
      current = current.next;
    }

    // console.log(sum);
    console.log("NULL");
  }
}

const dll = new DoublyLinkedList();
// console.log(dll);// DoublyLinkedList { head: null, tail: null, length: 0 }
dll.addToHead(100);
dll.addToHead(200);
dll.addToHead(300);
// console.log(dll);
dll.print();

module.exports = DoublyLinkedList;
