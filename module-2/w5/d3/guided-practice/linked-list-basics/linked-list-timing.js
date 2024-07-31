const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/


function linkedListHeadTime(iterations) {
  let linkedList = new LinkedList();
  console.time('Linked List Head:');
  for (let i = 1; i <= iterations; i++) {
      linkedList.addToHead(i);
  }
  console.timeEnd('Linked List Head:');
}


function linkedListTailTime(iterations) {
  let linkedList = new LinkedList();
  console.time('Linked List Tail:');
  for (let i = 1; i <= iterations; i++) {
      linkedList.addToTail(i);
  }
  console.timeEnd('Linked List Tail:');
}

function doubleLinkedListHeadTime(iterations) {
  let linkedList = new DoublyLinkedList();
  console.time('Double Linked List Head:');
  for (let i = 1; i <= iterations; i++) {
      linkedList.addToHead(i);
  }
  console.timeEnd('Double Linked List Head:');
}

function doubleLinkedListTailTime(iterations) {
  let linkedList = new DoublyLinkedList();
  console.time('Double Linked List Tail:');
  for (let i = 1; i <= iterations; i++) {
      linkedList.addToTail(i);
  }
  console.timeEnd('Double Linked List Tail:');
}

const iter = 100000;

linkedListHeadTime(iter);
linkedListTailTime(iter);
doubleLinkedListHeadTime(iter);
doubleLinkedListTailTime(iter);
