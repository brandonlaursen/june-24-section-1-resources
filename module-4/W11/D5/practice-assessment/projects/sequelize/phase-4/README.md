# Sequelize, Practice Phase 4 - Associations, Eager Loading, And Ordering

In this phase, you will

* Make relationships and associations using Sequelize
* Eager load associated data
* Order query results

## Getting started

1. Create a **.env** file at root-level of your project and copy the contents of
   the **.env.example** file into the newly created **.env** file.
2. Run `npm test` in the __phase-4__ directory to run all the Phase 4 test
   specs.
3. Run the migration files. (Do **NOT** run the seed files yet.)
4. Take a look at the migration and model files to familiarize yourself with the
   data of this application.

## Making edits to the files

**Do not** make edits to the **existing** migration and seed files. You can
create more migration files, but you cannot edit the existing migration files.

All edits you make to these files will be reset when you submit your project.
So make sure the test specs still pass even after those files are reset.

You can reset your edits to the original migration and seed files by running the
following command:

```bash
npm run reset-files
```

## Database schema

Currently, the existing migration files in this project will create a database
schema that follows this diagram:

![db-schema-without-relationships]

**Create new migration files** that will change the database schema to turn the
current schema into this second diagram.

![db-schema-with-relationships]

Here is some other important information to implement in your database schema
that the diagram doesn't show:

* The `currentTeamId` column on the `Players` table **CAN be `NULL`**
* The `sportId` column on the `Teams` table **CANNOT be `NULL`**
* When a `Fan` entry is deleted, all the related `DraftPicks` table entries
  should **automatically** be deleted

**Make sure to update the models** to reflect the database schema changes and
create the appropriate associations while going through the rest of this
project.

Run the seeds to make sure that the migration and model files are good enough
to continue to the API specs. You **should not move on** until all the seeds
are successfully seeded.

Change the database schema by doing **one or more of the following**:

* Creating new migration files
* Updating the existing model files
* Creating new model files

Do not change the database schema by:

* Updating the existing migration files

**Important:** You must create new migrations to implement the relationships.
Any changes to the existing migration files will be reset when you submit your
assessment.

The seed files are not testing whether or not your migration and model files are
correctly implemented. The instructions to come may still require you to change
them.

## API specs

This phase consists of 4 parts, each of which requires you to implement or fix
API endpoints on the server defined in the **app.js** file.

Run `npm test` in the __phase-4__ directory to make sure you pass all the tests.

* Part 1 - Fans and Teams (CRUD with Associations)
* Part 2 - Teams (Eager Loading)
* Part 3 - Sports and Teams (Ordering)
* BONUS Part (Optional)

[db-schema-without-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-without-relationships.png
[db-schema-with-relationships]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/assessments/practice-db-schema-with-relationships.png
