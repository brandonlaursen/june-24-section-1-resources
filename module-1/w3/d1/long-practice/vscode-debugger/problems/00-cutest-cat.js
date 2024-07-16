/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  // let cutest; // undefined
  let cutest = cats[0] // is a cat obj
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    // 9 > undefined
    if (cat.cuteness > cutest.cuteness) {
      cutest = cat.cuteness;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
