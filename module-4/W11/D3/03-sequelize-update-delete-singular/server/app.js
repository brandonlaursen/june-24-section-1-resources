// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  // Your code here
  // console.log(req.body);
  // console.log(req.body, req.params);

  const updatePuppy = await Puppy.findByPk(req.params.puppyId);

  const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

//   console.log(name, ageYrs, breed, weightLbs, microchipped);

//   if (name !== undefined) updatePuppy.name = name;
  if (ageYrs !== undefined) updatePuppy.ageYrs = ageYrs;
//   if (breed !== undefined) updatePuppy.breed = breed;
  if (weightLbs !== undefined) updatePuppy.weightLbs = weightLbs;
  if (microchipped !== undefined) updatePuppy.microchipped = microchipped;

  await updatePuppy.validate();
  await updatePuppy.save();

  //   http
//   res.statusCode = 200;
  // express
  res.status(200);

  res.json({
    puppy: updatePuppy
  })

});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
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
