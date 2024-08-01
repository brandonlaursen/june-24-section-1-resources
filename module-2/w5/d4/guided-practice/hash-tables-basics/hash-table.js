const sha256 = require("js-sha256"); // npm i sha256

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
    // console.log('do we make it', key)
    const hashString = sha256(key).slice(0, 8);
    // console.log(hashString);

    return parseInt(hashString, 16); // 745595179
  }

  hashMod(key) {
    return this.hash(key) % this.capacity; // 3
  }

  insertNoCollisions(key, value) {
    // grab the index of the key by running through hashMod
    const index = this.hashMod(key);
    // check if there is a pair at the index
    if (this.data[index]) {
      throw new Error("hash collision or same key/value pair already exists!");
    } else {
      const newPair = new KeyValuePair(key, value); // {key, value};
      this.data[index] = newPair;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    const newPair = new KeyValuePair(key, value); // {key, value};
    // grab the index of the key by running through hashMod
    const index = this.hashMod(key);
    // check if there is a pair at the index
    if (this.data[index]) {

      // set the newPairs next as the pair at that index
      newPair.next = this.data[index];
      // set the pair at the index to be the newNode
      this.data[index] = newPair;

    } else {
      this.data[index] = newPair;
    }

    this.count++;
  }

  insert(key, value) {
    // find the index by running the key through the hashMod function
    // grab the pair at the index

    // check if there currentPair at that index is the key we are trying to insert
      // if it is stop
      // if it isnt, check the next pair

    // check if the currentPair with they key were look for is there
      // if it is, overwrite the value

    // If there isnt a pair with key were looking for
    // create a new KeyValuePair

    // set the newPairs next to be the pair currently at that index
    // set the pair at that index to be the newPair
    // increment our count
  }
}

// const ht = new HashTable();
// ht.insertNoCollisions("key", "value"); // 3
// ht.insertNoCollisions("key1", "value"); // 2
// ht.insertNoCollisions("key2", "value"); // 2
// console.log(ht);
// console.log(ht);
// console.log(ht.hashMod('key'));// 3
// console.log(ht.hashMod('key1'));// 2
// console.log(ht.hashMod('key2'));// 2

module.exports = HashTable;
