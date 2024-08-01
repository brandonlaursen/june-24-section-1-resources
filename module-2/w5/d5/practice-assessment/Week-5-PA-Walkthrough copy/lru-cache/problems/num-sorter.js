class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // * add to back - push
  enqueue(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // * remove from front - shift
  dequeue() {
    if (!this.head) {
      return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/*
  Above is the given linked list based queue; it should not be modified
  Below is the NumSorter class that is to be refactored
*/


class NumSorter {
  constructor() {

    // * Change to Linked List
    // * Read comments throughout code to get hints
    this.numList = new LinkedList();

    // * allowed nums should have only uniq values
    this.allowedNums = new Set();

    //!!
    //! advice comment out what you changed just in case you need to go back
    // this.numList = [];
    // this.allowedNums = [];
    //!!
  }

  /*
    Add a number to the list of allowed numbers
    Should not have any duplicates in allowedNums
    ! Big hint that allowedNums should be a set - NO DUPLICATES
  */

  addAllowedNum(num) {

    // * now that allowedNums is a set
    // * we want to use has and add
    // * includes = 0(n)
    // * has = O(1)
    // * both add and push will be O(1)
    // ! Time complexity O(1)
    if (!this.allowedNums.has(num)) {
      this.allowedNums.add(num);
      return `${num} added to allowedNums`;
    } else {
      return `${num} already in allowedNums`;
    }

    //!! Time complexity - 0(n) -> O(1)
    // if (!this.allowedNums.includes(num)) {
    //   this.allowedNums.push(num);
    //   return `${num} added to allowedNums`;
    // } else {
    //   return `${num} already in allowedNums`;
    // }
    //!!
  }

  /* Returns true if the number is allowed, false otherwise */
  // * poorly name function - checking if element is already us array - false implies it is allowed
  isNumAllowed(num) {// T - O(n) -> 0(1)

    // * has is O(1)
    return this.allowedNums.has(num);

    //!!
    // * allowedNums is a set so we must now use has
    // * O(n)
    // return this.allowedNums.includes(num);
    //!!
  }

  /*
    Add a new number to the back of the numList
    Returns value at the back of numList
    ! Big hint that numList should be a linked list
    ! We will be enqueuing and dequeuing
  */


  addNumToBack(num) {// push  - O(1) worst case O(n) -> enqueue - 0(1)

    // * numList changes to a linkedList must use enqueue to add to the back
    // ! enqueue - 0(1)
    if (this.isNumAllowed(num)) this.numList.enqueue(num);
    // * instead of indexing last index, we can grab the tails value
    return this.numList.tail.value;


    //!! push  - O(1) worst case O(n)
    // if (this.isNumAllowed(num)) this.numList.push(num);
    // return this.numList[this.numList.length - 1];
    //!!
  }

  /*
    Remove and return the first number in the numList
    If numList is empty, return undefined
  */

  getFirstNum() {// shift O(n) ->  dequeue -> O(1)


    if (this.numList.length > 0) {
    // * numList is now a queue, so we would dequeue to remove from the front
    // ! dequeue -> O(1)
      return this.numList.dequeue();
    } else {
      return undefined;
    }

    //!! shift O(n)
    // if(this.numList.length > 0){
    //   return this.numList.shift();
    // } else {
    //   return undefined;
    // }
    //!!
  }

  /* Returns the count of nums in numList */

  numCount() {// O(n) -> O(1)

    // * no need to traverse, we can just grab the numList length
    // ! O(1)
    return this.numList.length;

    //!!
    // O(n)
    // let count = 0;
    // while (this.numList[count] !== undefined) {
    //   count++;
    // }
    //
    // return count;
    //!!
  }


  /*
    Resets numList, builds a numlist of integers from 0 to amount
    Only include allowed numbers; returns amount of nums in numList
    ! Only include
  */


  buildNumList(amount) {// O(n^2) -> O(n)

    // * numsList is now a linkedList
    this.numList = new LinkedList();

    // O(n)
    for (let i = 0; i <= amount; i++) {
    // * allowNums is now a set
    // * well check using has
    // * has is O(1) vs includes O(n)
      if (this.allowedNums.has(i)) {
    // * numList is a queue
    // * well use enqueue to add to back
        this.numList.enqueue(i);
      }
    }

    return this.numCount();

    //
    // O(n^2)
    // this.numList = [];
    // for (let i = 0; i <= amount; i++) {
    //   if (this.allowedNums.includes(i)) {// 0n
    //       this.numList.push(i);// 0(1) -> worse case 0(n)
    //   }
    // }

    // return this.numCount();
    //!!
  }
}

/* Comment in code below to run local test */
//  ! If running node youll want to make sure to comment all these test so that there are values in the set and linked list for testing
// const newNumSort = new NumSorter(3);
// console.log(newNumSort.addAllowedNum(0));   // '0 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 already in allowedNums'
// console.log(newNumSort.addAllowedNum(2));   // '2 added to allowedNums'

// console.log(newNumSort.isNumAllowed(1));    // true
// console.log(newNumSort.isNumAllowed(5));    // false

// console.log(newNumSort.addNumToBack(1));    // 1
// console.log(newNumSort.addNumToBack(2));    // 2
// console.log(newNumSort.addNumToBack(5));    // 2

// console.log(newNumSort.getFirstNum());      // 1
// console.log(newNumSort.getFirstNum());      // 2
// console.log(newNumSort.getFirstNum());      // undefined

// console.log(newNumSort.numCount());         // 0

// console.log(newNumSort.buildNumList(5));    // 3

// console.log(newNumSort.numCount());         // 3

module.exports = { NumSorter, LinkedList };
