# Sequelize Practice Phase 1, Migrations And Models

In this phase, you will

* Create one or more Sequelize migration that allows you to create a
  `Airplanes` table
* Implement the appropriate database-level constraints to the `Airplanes` table
* Create a Sequelize model that allows you to create a `Airplane` model
* Implement the appropriate model-level validations to the `Airplane` model

## Getting started

1. Create a **.env** file at root-level of your project and copy the contents of
   the **.env.example** file into the newly created **.env** file.
2. Run `npm test` in the __phase-1__ directory to run all the Phase 1 test
   specs.

## Instructions

Your employer wants you to create a feature for your users to track the status
and data of airplanes. An airplane should have the following attributes:

* `airlineCode`
* `flightNumber`
* `inService` (flag indicating if this airplane is operating or not) - should
  have a default value of `true`
* `maxNumPassengers` (maximum number of passengers that the airplane can hold)
* `currentNumPassengers` (current number of passengers on the airplane)
* `firstFlightDate` (date of the first official flight with passengers)

Your job is to create a database schema as well as a Sequelize model for this
feature.

### Valid/Invalid data

Here is some **important** information you should know about how the data in the
schema should be represented:

* `inService` should have a default value of `true`
* `currentNumPassengers` cannot be greater than `maxNumPassengers`
* `currentNumPassengers` **must be null** if `inService` is `false`
* the combination of `airlineCode` and `flightNumber` **cannot be repeated**
* the table name should be `Airplanes`
* the model name should be `Airplane`

Take a look at the **test/data/airplane-values.js** file.

This file holds examples for both valid and invalid example values for all the
attributes.

### Create migration(s) and a model

Based on the example attribute values for every column in the
**test/data/airplane-values.js** file, you should be able to determine the
database-level constraints and model-level validations necessary to represent
this data well.

You should create:

* one or more migration files with the proper database-level constraints
* a model file with the proper model-level validations (note: you cannot use
  model-**wide** validations for this assessment.)

To check all of your constraints and validations, run the following command in
the __phase-1__ directory:

```bash
npm test
```

To run each test file individually, run the appropriate command from the
following list in the __phase-1__ directory:

```bash
npm test test/00-airlineCode-spec.js
npm test test/01-flightNumber-spec.js
npm test test/02-inService-spec.js
npm test test/03-maxNumPassengers-spec.js
npm test test/04-currentNumPassengers-spec.js
npm test test/05-firstFlightDate-spec.js
npm test test/06-airlineCode-flightNumber-spec.js
npm test test/07-currentNumPassengers-maxNumPassengers-spec.js
npm test test/08-currentNumPassengers-inService-spec.js
npm test test/09-createdAt-spec.js
npm test test/10-updatedAt-spec.js
```

To remove the extra logging in the terminal when you run the test specs, in the
__config/database.js__ file, comment in the line `logging: false`.

**HINT**: Use the [Sequelize docs on Validations and Constraints] to fill out
your model-level validations.

[Sequelize docs on Validations and Constraints]: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
