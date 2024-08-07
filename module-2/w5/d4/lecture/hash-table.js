/*


  Hash Tables
  * Hash tables, sometimes known as hash maps, are arguably the most important data structure you will ever learn
  * Used to implement everything from JavaScript objects and sets to performance-boosting caches, hash tables are beloved by programmers for providing key/value storage with constant big-O time complexity for insertion, deletion, access and search.

  Hash Tables are just objects
  * key/value pairs
  * {}
  * Arrays indexed under the hood

  Advantages
  * inserting and reading is O(1)
  * Searching for keys is faster than in an array
  *  no need to iterate through the array


*/


class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

// * Class
class HashTable {
  constructor(numBuckets) {
    this.count = 0;
    this.capacity = numBuckets;
    //* we initialize an array of a fixed size for data
    this.data = new Array(this.capacity).fill(null);
  }

  // * We will then need a hashing function which coverts keys/input to integers
  // * A hash function maps arbitrary data to a deterministic, fixed-size output.
  // * Hashing, unlike encryption, only works in one direction.
  // * Cannot decrypt a hash output to find the input
  // ! Note: Our hashing function is not the most secure, we will instead use SHA256

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue;
  };


  // *  Finally, you will need a function to convert the key hash into a valid array index
  // * result of modulo will always be in range of 0 - number - 1
  hashMod(key) {
    // Code below will always return an index from 0 through to data.length - 1
    return this.hash(key) % this.capacity;
  }

  // * you'll be creating your own functions to resize the array whenever we hit the load factor in the practice
}

const myHash = new HashTable(8);

// * notice same output if same input
// console.log(myHash.hash('brandon'));// 740
// console.log(myHash.hash('brandon'));// 740


// * Once you have this index, you can store, read and delete key/value pairs just like you would in a regular array.
// console.log(myHash.hashMod('key1'));// 2
// console.log(myHash.hashMod('key2'));// 3
// console.log(myHash.hashMod('key3'));// 4


// * well want to insert this into our hash table
const pair1 = new KeyValuePair('key1', 'value1')
const pair2 = new KeyValuePair('key2', 'value2')
// console.log(pair1, pair2)

/*
    * It will look something like this
      HashTable {
        data: [
          null,
          KeyValuePair { key: 'key', value: 'value' },
          null,
          null,
          null,
          null,
          null,
          null
        ]
      }
*/

const pair3 = new KeyValuePair('key9', 'value2')
console.log(myHash.hashMod(pair1.key));// 2
console.log(myHash.hashMod(pair2.key));// 3

// ! uh oh! we've already used the bucket
// * we've ran into a hash collision
console.log(myHash.hashMod(pair3.key));// 2
