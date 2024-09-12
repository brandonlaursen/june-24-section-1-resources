// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();
require("express-async-errors");

// Import the models used in these routes - DO NOT MODIFY
const { Cat, Toy, CatToy } = require("./db/models");

// Express using json - DO NOT MODIFY
app.use(express.json());

/*
STEP 1: Return the count, min price, max price, and sum of the price of all
the toys.
*/
app.get("/toys-summary", async (req, res, next) => {
  /*
        STEP 1A: Calculate the total number of all the toy records.
        Set it to a variable called `count`.
    */
  // Your code here

  const count = await Toy.count();
  console.log(count);

  /*
        STEP 1B: Calculate the minimum price of all the toy records.
        Set it to a variable called `minPrice`.
    */

  const minPrice = await Toy.min("price");
  // console.log(minPrice);

  /*
        STEP 1C: Calculate the maximum price of all the toy records.
        Set it to a variable called `maxPrice`.
    */
  const maxPrice = await Toy.max("price");
  // console.log(maxPrice)

  /*
        STEP 1D: Calculate the sum of the prices of all the toy records.
        Set it to a variable called `sumPrice`.
    */

 const sumPrice = await Toy.sum("price");

  res.json({
    count,
    minPrice,
    maxPrice,
    sumPrice,
  });
});

/*
STEP 2: Return the cat, its associated toys. Include the count, total price, and
average price of its associated toys.
*/
app.get("/cats/:catId", async (req, res, next) => {
  const { catId } = req.params;

  /*
        STEP 2A: Find a cat with their associated toys
    */
//   const cat = {};

//   const toys = cat.Toys;

    const cat = await Cat.findByPk(catId, {
        include: [
            { model: Toy }
        ]
    });


    // console.log(cat);
    const toys = cat.Toys;
    // console.log(toys);
  /*
        STEP 2B: Calculate the total amount of toys that the cat is
        associated with.
    */
  const toyCount = toys.length;
// console.log(toyCount);

  /*
        STEP 2C: Calculate the total price of all the toys that the cat is
        associated with
    */
  const toyTotalPrice = toys.reduce((sum, toy) => sum += toy.price,0);
//   console.log(toyTotalPrice)

  /*
        STEP 2D: Calculate the average price of all the toys that the cat is
        associated with
    */
  const toyAvgPrice = toyTotalPrice / toyCount;
//   console.log(toyAvgPrice);

  res.json({
    toyCount,
    toyTotalPrice,
    toyAvgPrice,
    // ...cat
    // STEP 3: Observe the difference between `...cat` and `...cat.toJSON()`
    ...cat.toJSON(),
  });
});

/*
BONUS STEP 4: Return the toy and its associated cats. Include the percentage of
cats associated with the toy that have a color of "Orange".
*/
app.get("/toys/:toyId", async (req, res, next) => {
  /*
    STEP 4A: Find a toy with their associated cats
    */
  // Your code here
  /*
        STEP 4B: Find or calculate the total amount of cats that the toy is
        associated with.
    */
  // Your code here
  /*
        STEP 4C: Find or calculate the total amount of cats that have a color of
        "Orange" and that the toy is associated with.
    */
  // Your code here
  /*
        STEP 4D: Find or calculate the percentage of cats that have a color of
        "Orange" and that the toy is associated with.
    */
  // Your code here
  /*
        STEP 4E: Return the toy, its associated cats, the count of
        cats associated with the toy, the count of orange cats associated with
        the toy, and the percentage of orange cats that the toy is associated.
    */
  // Your code here
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
  res.json({
    message: "API server is running",
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
