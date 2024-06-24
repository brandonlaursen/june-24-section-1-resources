# `Week 4 Day 4`

- Sets Demo
- Hash Tables Demo
- Hash Table Practice


## `Sets`
  * The name "set" comes from mathematics. In mathematics, a set is a well-defined collection of distinct elements or members. In computer science a set is an abstract data type which is used to store a collection of unique, unordered values.

### Properties of a set
  Sets have three important properties that will tell you when they are appropriate to use:
  * A set contains no duplicate elements
  * A set's elements are unordered
  * A set can check if an element is contained in O(1) time

### Syntax
  * const set = new Set(iterable);
  * iterable - strings and arrays


### Commonly used Set methods:

- has: checks if a value exists in the set
- add: adds an element to a set
- delete: removes an element from a set

```js

let numbers = [1,1,2,3,3,4];

const numbersSet = new Set(numbers);

console.log(numbersSet);// Set(4) { 1, 2, 3, 4 }
// removes duplicate values

// * has === .includes
// * check if set has a value
console.log(numbersSet.has(1));// true


// * deletes value from set
numbersSet.delete(2);
console.log(numbersSet);// Set(3) { 1, 3, 4 }

// * add === .push
// * adds a value to a set
numbersSet.add(6);// Set(3) { 1, 3, 4, 6 }

// * size === .length
// * checks length of set
numbersSet.size;// 4

// * removes all values in the set
set.clear();// Set(0) {}

```

## `Caching`

Caching is a commonly used way of increasing performance, where you store
computed values so that you don't need to calculate those values multiple times.

An example of caching that you are familiar with is the `array.length` property.
That property is not calculated when you request is its value, it is cached and
updated, which is what allows a `.length` check to count `n` values in `O(1)`
time.

- `Memoization`: Caching results of recursive function calls so that they dont need
to be repeated, from the top down.
- `Tabulation`: Caching results of iterative function, from the bottom up.

Both Memoization and Tabulation are forms of dynamic programming. Which means
solving a sub-problems once and then using those solutions to solve the main
problem. Don't worry about the names and the differences, what's important is
understanding that all of this is caching.

```js
//Caching example, creating a memo cache, memoization
let count = 0
let cache = {1: 0, 2: 1};

function fib(n) {
  count++
  console.log(`Running fib(${n})`);
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fib(n-1) + fib(n-2);
}

function fibMemo(n) {
  count++
  console.log(`Running fibMemo(${n})`);
  if (cache[n] === undefined) {
    cache[n] = fibMemo(n-1) + fibMemo(n-2);
  }
  console.log(cache);
  return cache[n];
}

console.log(fib(10));
// console.log(fibMemo(10));
console.log("count of calls fib: ", count)

function fibTab(n) {
  for (let i = 3 ; i <= n ; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }
  return cache[n];
}
```

## What is hashing?

Hashing is basically just running some input through a formula
and getting back a different, but consistent result.

Hashing is ONE WAY, we don't care about the original data, just
that we get something more 'unique'.

Here's a super simple hashing function

```js
const hashIt = (word) => {
  return word
    .split('')
    .reduce((res, char) =>{
      console.log("res: ", res)
      return Number(char.charCodeAt().toString(2)) + res
    }, 0);
  };
  console.log(hashIt('william'))
```

Not great, that's why we have some better hashing algorithms out there.
Better just means similar inputs have vastly different outputs. Many possibilities
that would be hard, near impossible to crack.

- SHA256
- MD5
- A lot more

## `Hash Tables`
  * Hash tables, sometimes known as hash maps, are arguably the most important data structure you will ever learn
  * Used to implement everything from JavaScript objects and sets to performance-boosting caches, hash tables are beloved by programmers for providing key/value storage with constant big-O time complexity for insertion, deletion, access and search.

### Hash Tables are just objects
  * key/value pairs
  * {}
  * Arrays indexed under the hood

### Advantages
  * inserting and reading is O(1)
  * Searching for keys is faster than in an array
  *  no need to iterate through the array

### POJO
```js
const hashTable = {};
hashTable["key"] = "value";
hashTable["key"]; // return value
```

### How do we create a hash table using classes?
 * we initialize an array of a fixed size for data
* each slot in this array would be called a bucket and will be initialized to null

```js
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
```


### Hash collisions
  * Happens when two keys has to the same bucket
  * Hash tables can only store one value per index
    * inserting will overwrite the previous key/value pair



### What do we do?
 * reduce probability by increasing array size
 * we can do dynamically by using equation
 * probability of 1 /buckets.length
   * similar to dynamic array resizing
   * if we resize the buckets; each key will need to be rehashed to determine new bucket
 * but always still a chance of collision

 ### Clever solution
 * allow multiple key/val pairs to exists in the same bucket
 * each bucket would contain a linked list
 * if two keys have the same bucket, then create a pointer to the second key

```
    0 = null

    1 =  null

    2 = { key:'key3' } -> { key:'key1' }

    3 = { key:'key2' } -> null
```

* We will first find the bucket index
* check the first key to see if its the key were looking for
* if not; we will go down the linked list chain and find the key we need
* if we encounter null; the key does not exists

Notes for first practice
* you will be building out the hashTable class and methods
* hash method will use SHA256 instead of our example
* will need to npm install js-sha256
const sha256 = require('js-sha256');
console.log(sha256("Hello, world!"));

Note: because the output is to large to parseInt
* we will grab only the first 8 characters


## `Hash Table Practice p1 (SOLO, 20m)`

## `Hash Table Practice p1 Walkthrough`

## `Hash Table Practice p2 (SOLO, 20m)`

## `Hash Table Practice p2 Walkthrough`

## `Hash Table Practice p3 (SOLO, 20m)`

## `Hash Table Practice p3 Walkthrough`

## `Hash Table Practice p4 (SOLO, 20m)`

## `Hash Table Practice p4 Walkthrough`

## `Hash Table Long Practice (PAIRED)`
