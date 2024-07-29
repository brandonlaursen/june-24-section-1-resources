const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let res = [];

  for (let i = 1; i <= 100; i++) {
    const startTime = Date.now();
    res.push(addNums(i * increment));
    const endTime = Date.now();

    console.log(`${endTime - startTime}`);
  }
  return res;
}

n = 1_000_000;
// console.log(`addNums(${n}): `);
// const startTime = Date.now();
// addNums10Timing(n);
// const endTime = Date.now();
// console.log(`Total Time${endTime - startTime}ms`)

function addManyNums10Timing(increment) {
  // Fill this in
  let res = [];

  // 10
  for (let n = 1; n <= 100; n++) {
    // n^2
    const startTime = Date.now();
    res.push(addManyNums(n * increment));
    const endTime = Date.now();

    console.log(`${endTime - startTime}`);
  }

  return res;
}

console.log("\n***********\n");
console.log(`addManyNums(${n}): `);
n = 1_000_000;
const startTime = Date.now();

addManyNums10Timing(1000);
const endTime = Date.now();
console.log(`Total Time${endTime - startTime}ms`)
