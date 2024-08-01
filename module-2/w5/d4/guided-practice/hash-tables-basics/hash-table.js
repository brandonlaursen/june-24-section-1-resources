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
    // this.data[index]
    // if there is something there
    // that means we have a collision throw an error
    // if something isnt there
    // so well want to create a keyValuePair
    // and place it at that index
    // increment
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
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
