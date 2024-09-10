# Week 11 Day 2

Intro to Sequelize

---

## Review from yesterday...

- assessment
- SQL Efficiency
  - 1. Indexes
  - 2. Benchmark tests
- N + 1 Queries
- SQL Injection Attacks

## What is Sequelize?

Sequelize is an Object-Relational Mapping (ORM) library for Node.js.

It allows you to interact with relational databases like SQLite3 and PostgreSQL using JavaScript/Node.js

<a href="https://sequelize.org/">Sequelize Docs</a>

---

## Getting Started

This requires quite a bit of boilerplate code. It is important to know what this code does, but not necessary to know it line for line by heart.

## Create directory

- `mkdir demo`

## Create server directory

- `mkdir server`
- `cd server`

## Initialize npm in root of server directory

- `npm init -y`

## Set up basic server in root of server directory

- `touch app.js`

### Add code to app.js

```js
// app.js
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
```

## Next install some packages we have seen before

- `npm install express`
- `npm install dotenv`

## And some dev dependencies for ease of use

- `npm install -D sqlite3`
- `npm install -D dotenv-cli` (needed to work with sequelize commands when connecting to DB)

## Optional - Use nodemon

- `npm install -D nodemon` (not necessary, but useful)

### Add script to package.json

```json
"scripts": {
   "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

---

## Set up environment variables

Create a `.env` file and add a `PORT` variable and `DB_FILE` variable

`touch .env`

Add code to `.env`

```env
PORT=5000
DB_FILE=db/dev.db
```

## Now for some new packages

- `npm install sequelize`
- `npm install sequelize-cli` (allows us to work with sequelize from the command line)

## Then we initialize Sequelize(without using .sequelizerc)

- `npx sequelize init`

### This command creates a bunch of folders and files for us

- Note: that we will delete the files generated
- This is what is just an example of what is generated when not using a `sequelizerc` file
- All the contents of data based is being initialized amongst are express files(not what we want!)

## Let's examine...

### Directories generated

- config
- migrations
- models
- seeders

## Migrations, Models, & Seeders

- The migrations file's job is to make changes to our DB
- Seeders files are filled with our initial DB data
- Model files are class representations of our tables

## config/database.js

- Defines the configurations for different development environments

## This is a bit messy, let's clean it up

Delete all the files we just made and create a .sequelizerc file.

- config
- migrations
- models
- seeders

## Create a `.sequelizerc` file

- `touch .sequelizerc`

Add the following to the .sequelizerc file:

```javascript
// .sequelizerc
const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};
```

## Now run `npx sequelize init` again.

- `npx sequelize init`

Note that config now has a database.js file and models, migrations, and seeders have all been allocated to a new `db` directory.

### Notice the db directory contains

- migrations
- models
- seeders

### Config directory contains a file names database.js

#### - This was all specified in our `.sequelizerc` file

## Replace everything in the database.js file with:

```javascript
//database.js
module.exports = {
  development: {
    storage: process.env.DB_FILE, // location of DB file
    dialect: "sqlite", // specify RDBMS
    seederStorage: "sequelize",
    benchmark: true, // prints execution time to terminal
    logQueryParameters: true, // logs SQL query parameters to the terminal
    typeValidation: true, // model-level data type validation
    // logging: false // prints SQL to terminal unless set to false
  },
};
```

### This defines the configuration for our database

- `storage`: Tells Sequelize where our actual DB is
- `dialect`: Tells Sequelize which RDBMS we are using
- `benchmark`: Basically just turns .timer on by default
- `logQueryParameters`: Allows us to see the values when we make changes to our DB
- `typeValidation`: Helps us enforce data types on our tables
- `logging`: Defaults to true and prints our SQL to the terminal

---

## Let's try to run our migrations to make sure everything is setup correctly and to create our db

- `npx dotenv sequelize db:migrate`
  - Runs initial migration and starts a .db file

---

At this point in time, Sequelize will attempt to connect to the database (or
create the file if it does not exist) and run any migration files that have not
yet been run. Since no migration files exist, this command will simply create
the database. You should see the output similar to the following:

```bash
Loaded configuration file "config/database.js".
Using environment "development".
Executed (default): SELECT 1+1 AS result
Executed (default): SELECT name FROM `sqlite_master` WHERE type='table' and
name!='sqlite_sequence';
Executed (default): CREATE TABLE IF NOT EXISTS `SequelizeMeta` (`name`
VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY);
Executed (default): PRAGMA INDEX_LIST(`SequelizeMeta`)
Executed (default): PRAGMA INDEX_INFO(`sqlite_autoindex_SequelizeMeta_1`)
Executed (default): SELECT `name` FROM `SequelizeMeta` AS `SequelizeMeta` ORDER
BY `SequelizeMeta`.`name` ASC;
No migrations were executed, database schema was already up to date.
```

### Inside `db` directory you'll see the dev.db

# Practice: Sequelize In Express

# Migrations and Models



## Migrations

- For making changes to the DB STRUCTURE
- Table names = PascalCased and Plural
  - Table: Users
- Column name = camelCased
  - Column: firstName

---

## Interacting with the CLI

- There are 2 types of commands:
  - Commands that create files
  - Commands that interact with the db
    These require us to add "dotenv" to the command

---

## Interacting with migrations in the CLI

_You can add -cli to the sequelize command, but not needed_

# Important notes

- Anytime we are running a command to interact with our db, we need Sequelize to
  see our environment variables, so we have to add the "dotenv"
- Every migration file we create has 2 parts: an "up" and a "down"
  - The "down" should always directly undo the "up"
- Migrations don't only create/edit our tables, they also act as version control for our DB
- All of our normal conditions like unique or not null are represented as key-value pairs in the column objects

---

### Generate a migration

`cd` into `server` directory

#### Syntax

- `npx sequelize-cli migration:generate --name <ModelName>`

#### Example

- `npx sequelize-cli migration:generate --name create-car`
  _Table name is singular in this command, sequelize handles pluralization_

## Models

- Class representations of each table, with built-in query methods
- Allow us to manipulate/validate data with plain JS before sending it to the database
- Model names = PascalCased and SINGULAR
  - Model: User
- CLI commands:

  - `npx sequelize model:generate --name <name> --attributes <table attributes>`

- Will use this more often than `migration:generate`

---

#### Example

- `npx sequelize-cli model:generate --name Car --attributes name:string`

### Generate a model and its migration

- What youre most likely to use
- Generates both the model and the migration files
- Migration file name is based on the singular version of the model
- ex: If model is Car, migration is create-car

## Important notes

- We do not have to add an "id" attribute. Sequelize will add that for us for models that we generate.
- We will be switching from snake_case to camelCase for our column names
- Make sure that any changes we make to migrations, such as adding constraints, we need to add those changes to the model as well
- Making changes to our model does not mean we need to run any additional commands

## A statement that has helped some students in the past:

All squares are rectangles, but not all rectangles are squares. Everything in our migrations goes into our model, but not everything in our model goes into migrations.

---

---


## Edit migration files
### Reference the docs
- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

Add constraints

```js
 name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
```

## Edit the model files

- Add model-level validations
- If adding multiple validations, must set value of key to an object

```js
  name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      }
```

## Run pending migrations

- The up function will be called
- `npx dotenv sequelize-cli db:migrate`

## View database in terminal

- `cd` into `db` directory
- `sqlite3 dev.db`

## View all schemas

- `.schema`

## View specific schema

- `.schema Cars`

## Roll back migrations

- The down function will be called

### rollback one migration

`npx dotenv sequelize-cli db:migrate:undo`

### rollback all migrations

`npx dotenv sequelize-cli db:migrate:undo:all`

# Practice Sequelize Models

# Seeders

## Generate a new seed file

#### Syntax

`npx sequelize-cli seed:generate --name <descriptiveName>`

#### Example

`npx sequelize-cli seed:generate --name cars`

## Modify seeder file

### Make sure import is present

```js
const { Car } = require("../models");
```



### Up function

```js
await Car.bulkCreate(
  [
    {
      name: "challenger",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "mustang",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "camaro",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  { validate: true }
);
```
`validate: true` allows us to enforce model level validations

---

## Basic layout

```js
    await <model>.bulkCreate([{
        <seeders>
    }], { validate: true })
```

---




## Run all pending seeds

`npx dotenv sequelize-cli db:seed:all`

### Down Function

```js
await queryInterface.bulkDelete("Cars", null, {});
```

## Confirm in database

- `cd db`
- `sqlite3 dev.db`
- `select * from cars;`

## Rollback seeds

### rollback one seed npx

`npx dotenv sequelize-cli db:seed:undo
`

### rollback all seeds

`dotenv sequelize-cli db:seed:undo:all`

## Important notes

- The seeder bulkInsert method tests against table constraints, but not against the model constraints use Model.bulkCreate instead (must import model)

- queryInterface is an object built into Sequelize and has a ton of built-in methods

- One thing that will help you out with Sequelize is envisioning the SQL that Sequelize will be creating

- The seederStorage property in our `config/database.js` file is what gives us the SequelizeData file in our DB

---




# Practice Sequelize Seeders


## Model Validations

- go on the model, on the columns we pick and choose
- like constraints, but applied at the model level
- we can write custom ones even if we need
- https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

---

### We set a validate key on our models like this

### In models/car.js

```javascript!
validate: {
    len: [2,20],
}
```

### Or we can add a custom error message

```js
validate: {
    len: {
        args: [2,20],
        msg: 'name must be between 2 and 20 characters'
    },
}
```


---


### This is something you are really going to want to get comfortable going to the docs for...


# Practice Validations and Constraints

---

## Database reset script:

Handy for when making changes early on

```js
"dbreset": "npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all"
```


## Using migrations for something other than creating tables

Remember that migrations can serve as version control, allowing us to see what changes were made and when, and allowing us to quickly roll-back a change w/o taking the entire app down.

If we change an existing migration file, the migration must be rolled back in order for the changes to take effect. This would wipe that table, causing significant loss of user data.

---

Start by creating a new migration file

- `npx sequelize migration:generate --name <descriptive name>`

Then write the up statement

```javascript
// new-migration.js
async up(queryInterface, Sequelize) {
await queryInterface.addColumn(<tableName>, <newColName>, {
      type: Sequelize.<DATATYPE>,
      allowNull: false,
      defaultValue: <defaultValue>,
    });
//...
```

---

## What goes up, must come down

Write the down command

```javascript
// new-migration.js
// ...
async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(<tableName, <newColName>);
//...
```

---

## defaultValue

If we set allowNull: false to the new column, we run into an error

We can get around this error by setting a defaultValue property

---

## The docs are our friends...

- https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface

---

# Practice Modify Column Migrations

---

# Break out for LP

---
