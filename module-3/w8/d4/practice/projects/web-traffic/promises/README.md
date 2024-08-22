# Promises Assessment

In this part of the assessment, you will be tested on your knowledge of Promises
and `fetch`.

Run `npm test` to see all the specs you need to pass. (Do **NOT** modify the
files in the __test__ directory.)

Each of the 10 test specs in this part is worth **1 point**.

## Objective

Your objective is to implement the code in __01-promise.js__ and __02-fetch.js__
so that all test specs pass.

## 01-promise.js

Create a function called `potPlant(seed)` and use the given `addSoil`,
`plantSeed` and `growPlant` functions that return Promises to plant a seed and
grow it.

First, call the `addSoil()` function.

After the promise returned from the `addSoil()` function is resolved, call the
`plantSeed(seed)` function invoked with the given `seed` parameter.

Once the promise returned from the `plantSeed` function is resolved, pass the
resolved value from the `plantSeed` function into the `growPlant(plant)`
function as an argument.

The `potPlant(seed)` function should resolve to the resolve value of the Promise
returned from the `growPlant(plant)` function.

## 02-fetch.js

Make a `PUT` request to `/colors/1` with the following JSON body:

```json
{
  "color": "green"
}
```

If you format your request properly, you can expect the body of the response to
be:

```json
{
  "id": 1,
  "color": "green"
}
```

Print the body of the response to the console.
