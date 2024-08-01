const sha256 = require('js-sha256');// npm i sha256

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    //* we initialize an array of a fixed size for data
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    // return 559aead0
  }

  hashMod(key) {
    // Your code here
  }

  insertNoCollisions(key, value) {
    // Your code here
    // grab the index of the key by running through hashMod
    // check if there is a pair at the index
    // this.data[index]
    // if there is something there
    // that means we have a collision throw an error
    // if something isnt there
    // so well want to create a keyValuePair
    // and place it at that index
    // increment count
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;
