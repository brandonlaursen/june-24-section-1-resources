# Sequelize, Practice Phase 2 - Seeding

In this phase, you will

* Create a Sequelize seeder that allows you to seed the `Superheros` table

## Getting started

1. Create a **.env** file at root-level of your project and copy the contents of
   the **.env.example** file into the newly created **.env** file.
2. Run `npm test` in the __phase-2__ directory to run all the Phase 2 test
   specs.

## Instructions

Take a look at all the files in the **db/models** and **db/migrations** folders.

Use the information in those files to add seed data in the
**db/seeders/20220413205503-valid-superheros.js** file. This file has a
`validSuperheros` array. Each object in the array should be valid data for a
creating a single `Superhero` when the seeder file is committed. Here's an
example of how the data should be formatted for books instead of superheros:

```js
// example of valid data formatting:
const validBooks = [
  // first book seed data:
  {
    title: 'Pride and Prejudice', // title attribute
    year: 1813,
    genre: 'ROMANCE',
    author: 'Jane Austen',
  }
];
```

Fill out the `validSuperheros` array so that the seeder file will successfully
seed **at least** `5` valid superheros. Use the information in the migration and
model files to guide you on determining the attributes and valid attribute
values for a superhero.

**Note:** You do not need to use real superhero data as values! The data values
just need to pass the constraints and validations in the migration and model
files.

Run `npm test` in the __phase 2__ directory to make sure you pass all the tests.

Feel free to make edits to the migration and model files. All edits you make to
the migration and model files, however, will be reset when you submit your
project. So make sure the test specs still pass even after those files are
reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```
