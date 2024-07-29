animals = ['alligator', 'bear', 'cat', 'dog', 'elephant', 'fish', 'goose', 'hamster', 'iguana', 'jaguar', 'kangaroo'];

// Count how many animals are in the list
// Time complexity: O(n)
// Space complexity: O(1)
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(1)
// Space complexity: O(1)
function countAnimals2(animals) {
  return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(1)
// Space complexity: O(1)
function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}

// Print out all the animals
// Time complexity: O(n)
// Space complexity: O(1)
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

// Print out all the animals twice
// Time complexity: O(n)
// Space complexity: O(1)
function printAnimalsTwice(animals) {
  // n
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  //n
  // n + n = 2n => n
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(1)
function printAnimalPairs(animals) {
  // n
  for (let i = 0 ; i < animals.length ; i++) {
    // n
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(n^2)
// Space complexity: O(n^2)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push(  [animals[i], animals[j]]   );
    }
  }
  return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(n^3)
// Space complexity: O(n^3)
function getAnimalTriples(animals) {
  const triples = [   ];// n^3 + n^3
  // n - 10 = linear -> 10
  // n - 10 = quadratic -> 100
  // n - 10 = cubic -> 1000
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push( [animals[i], animals[j], animals[k]] );
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?)
// Space complexity: O(?)
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}


const letters = [...'abcde'];
function addAnimals(array) {
    const result = [];
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            // result.push('a');
            for(let k = 0; k < array.length; k++) {
              result.push('a');
            }
        }
    }
    return result;
}

for (let i=0; i<5; i++) {
    const arr = letters.slice(5 - i);
    console.log(i, addAnimals(arr).length);
}

console.log(addAnimals(animals))
