<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 10` `W10D3`

---

# Databases
## Week 10 Day 3

---


## Review from yesterday...

- Middleware
    - must take 3 parameters
    - call next to move on to the next
    - can apply it to one route, all routes, or some routes
    - we use app.use to apply to all
    - we are app.use with a Route Path to limit it to some routes
- Error Middleware
    - must have 4 parameters
    - when we pass an arguement to next(arg) we create an error, and we can only enter middleware that can hamdle an error (4 parameters)

---

## Review from yesterday...(cont)

- Router
    - grouping like routes in seperate files
    - namespacing
- Environmental Varialbes
    - sensative key value pairs
    - use a .env file and DO NOT push to github
    - env.example
    - npm install dotenv

---


What is a database?

- Collection of data
  - Stored in Tables in column/row format
  - Add, Access, Update, and Delete data
  - We can apply individual rules to each column
  - An instance in a row is called a record
  - Tables have a plural name because they hold multiple things

---

What is the tool called that we use to manage and interact with DBs?

- Relational Database Management System (RDBMS)

---

What is SQL?

<div style="font-size: 30px">
    <li>Structured Query Language</li> 
    <li>A programming language for storing and processing information in a relational database</li>
    <li>Made up of several sublanguages that have specialized purposes</li>
</div>

![image](https://hackmd.io/_uploads/rkR0OVJA6.png)

<a href="https://www.w3schools.com/sql/sql_intro.asp">SQL documentation</a>

---

## SQLite3

Running "sqlite3" in the cli will allow us to connect to a sqlite db

- Note the transient in-memory database printout. This means that any changes made to this DB will be gone once we leave the instance.
    - To create a database that will persist, we can run the command `sqlite3 <database name>.db`

- <a href="https://www.sqlite.org/docs.html">SQLite docs</a>

---

## Notes on SQL
- SQL does not like trailing commas, and we must add the semi-colon after we are done
    - This is because SQL is going to take our multi-line commands and put it all together in a single line, so SQL needs to know when we are terminating the command versus continuing on the next line.
- We can use the ".tables" command to see all the tables in our db

---

## Using a .sql file

We can create SQL files for us to write SQL commands in. This makes editing commands much easier!
Create an `example.sql` file and create a new table

```sql
-- example.sql
CREATE TABLE test (id INTEGER);
```
In sqlite cli, we run the ".read example.sql" command to run those commands

---

# 10 mins for SQLite3 CLI SP  (SOLO!!!)

---

## Let's design a database!

We can start setting it up for our instagram clone!

<div style="display: flex; justify-content: center">
    <img style="max-height: 200px;"     src="https://hackmd.io/_uploads/BycNI8AaT.png"/>
</div>

---

## 🧠 What tables will we need for this clone?
We will use a Google Sheet to help layout our tables

- Think about the components we will need to keep track of
- We will definitely need a Users table to keep hold properties like the user's id and name
- What other properties does a user NEED to have?
- What other tables do we need?

---

# 💡💡💡💡💡💡
## Remember that table and column names will be lowercase and snake_case, and tables will be plural

---

## Build the main table

Let's use <a href="dbdiagram.io">DB Diagram</a> to build out our schema

We can screenshot/download this and store it in our project folder for quick reference

---

## Basic Schema

<div style="display: flex; justify-content: center">
    <img style="max-height: 350px;"     src="https://hackmd.io/_uploads/HkbCcIRaT.png"/>
</div>

---

## Convert the dbdiagram table to sql in our example.sql file

```sql
CREATE TABLE <table name> (
    <column name> <data type> <attributes>
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    <CONTINUE FILLING IN TABLE>
);
```

Make sure that we demonstrate NOT NULL and UNIQUE somewhere

---

## Create new DB and create the first table

How do we run the `.sql` file to create the new table?

What is the `sqlite` command to see the create table command used for our tables?

How do we drop a table?

---

## Dropping if a table exists

When we are running our `.sql` files, we can run into issues if the database already exists in our file. To fix this we add a `DROP TABLE IF EXISTS <table>;` at the top of our file.

---

# 20 mins for CREATE/DROP Tables SP

---

## Inserting data into a DB

```sql
INSERT INTO <table name> (LIST OF COLUMNS WE ARE ADDING DATA FOR)
VALUES <comma separated list of seeds>
```

- SQL prefers single quotes, but can allow for double quotes. NO back ticks!
- For apostrophes, we use 2 single quotation marks i.e. 'Kiki''s Delivery Service'

---

# 🧠🧠🧠🧠🧠🧠

## Pro-tip

We can run `.headers on` and `.mode column` to make our queries easier to read. Newer versions can use `.mode box` as a single command

---

# 15 mins for INSERT Data SP

---

## Create a queries.sql file to start going through queries

All queries need at least 2 statements: SELECT and FROM

- SELECT - What columns do we want?
- FROM - What table are we querying?

---

## We can do more than that though

- WHERE - Allows us to filter or target specific values or sets of values
- We can chain multiple filters using AND/OR

---

# 15 mins for SELECT Data SP


---

## Deleting and Updating data in the DB

### Delete

```sql
 DELETE FROM <table name> WHERE <condition>;
```

Note that if we leave off the WHERE clause, it will delete all of the data from that table, and it will NOT ask for confirmation

---

## Update

```sql
UPDATE <table name> SET <column name> = <value> WHERE <condition>;
```

Again, the WHERE clause is not required. However, if we leave it off, it will update every record in the table to have that updated value

---

# 25 mins for DELETE Data SP & UPDATE Data SP

---

## Implementing SQL into Express

Important to note that the assessment does not test you on this, so it's ok if you aren't fully comfortable with this yet.

---

## Create new app.js in demo

We need to npm install sqlite3

Import sqlite3 at the top of app.js

Create a db variable

```javascript
// app.js
// ...
const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);
```
The OPEN_READWRITE are what permissions we are giving to this db instance

---

## Create endpoint to get all data

```javascript
app.get("/", (req, res) => {
  const sql = "SELECT * FROM <table name>;";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.json(err);
    }
    res.json(rows);
  });
});
```

---

## Create endpoint to get data specified by id

```javascript
app.get("/:id", (req, res) => {
  const sql = "SELECT * FROM <table name> WHERE id = ?;";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      return res.json(err);
    }
    res.json(row);
  });
});
```

---

## Break out for LP

Word of warning: It feels like you should be making a relationship with the practice, but you do not have to.


