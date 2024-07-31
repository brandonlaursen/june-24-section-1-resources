/*




  Linked List
  * A linked list is an ordered sequence of nodes. Each node consists of a data value and a pointer to the next node.
  * Much like arrays, linked lists are used to store an ordered sequence of values.
  * Linked list in memory can be spread out in memory
  * Unlike arrays which are contiguous spaces in memory
  *   * They take up space and are slower but we have the advantage of pointers

  Pointers
  * Pointers allow you to store complex, multi-dimensional data in a linear memory bank.
  * They unlock features like multi-type arrays, pass-by-reference methods, graph traversal and many more.

  Each node would have a value and a next
  * next - reference/pointer to next node
  * value - any data value

  If a node is the first node
  * its the head node
  * if the heads points to null, the link list is empty
  * the head would be entry point to the linked list
  If a nodes next is null
  * its the last node

  * We can have node point in other directions
    * doubly linked list
    * tree
    * graphs
  * We will add a tail property for doubly linked list

  Space & Time complexity
  * Arrays vs Linked list

  Adding to front
    * linked list - O(1)
      * No need to shift nodes
    * array - O(n)
      * Shift all values over

  Adding to end
    * Linked list - O(n)
      * must traverse linked list to find last node
        * Unless we have a tail property
    * Array - O(1)
      * No need to traverse array, just need length

*/


