<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 10` `W10D4`

---

# Database Relationships
## Week 10 Day 4

---

## Review from yesterday...

- Databases
- SQL
- sqlite3
- CREATE
- INSERT
- DROP
- SELECT FROM & WHERE
- DELETE
- UPDATE
- connecting sqlite to express...



---

## Why do we need relationship between tables?

1. It establishes a connection between a pair of tables that are logically related to each other.
2. It helps to minimize redundant data. 
3. It enables you to fetch data from multiple tables simultaneously.

---

What are the 3 types of relationships?

Let's use our schema to analyze the different types of relationships

- One-to-One (not very common)
- One-to-Many (most common)
- Many-to-Many
  - Note that a Join table can have more than just the 2 Foreign Keys

---

# 🧠🧠🧠🧠🧠🧠

## When setting up a foreign key column, the FK goes on the many side of the one-to-many relationship

---

There are a couple ways to establish a Foreign Key in a `CREATE TABLE` command
1. At the bottom of the CREATE, we can add:
```sql
FOREIGN KEY (<column name>) REFERENCES <other table>(id)
```
2. We can combine that on the column info:
```sql
<column name> INTEGER REFERENCES <other table>(id)
```

---

# 20 mins for CREATE Related Tables SP

---

Make note of `PRAGMA foreign_keys = 1;`
- This is what tells SQLite3 to enforce foreign key constraints. The 1 could also be true or ON.

---

The order of our create and seeders matter so that we don't run into Foreign Key constraint errors. 

`FOREIGN_KEY constraint failed` is one of the most common errors you will see in your own projects

---

## What about deleting?

Let's try to delete something that something else relies on

On Delete Cascade allows us to resolve this

![image](https://hackmd.io/_uploads/BknVTge06.png)


Add `ON DELETE CASCADE` to the FK column

---

# 💡💡💡💡💡💡

If we don't want those sub-records to be deleted, we have a fix for that too

Add `ON DELETE SET NULL` to a different FK column
- Note that we cannot do this if the column has `NOT NULL`

---

# 🧠🧠🧠🧠🧠🧠

Our `DROP TABLE IF EXISTS` commands should be written in the reverse order of the `CREATE TABLE` commands

---

# 15 mins for DELETE CASCADE SP

---

## New Query Keywords

BETWEEN 
- inclusive 
    - `WHERE <column> BETWEEN <value 1> AND <value 2>`

IN 
- something is true from a group of possibilities 
    - `WHERE <column> IN (<comma separated values>)`

---

## New Query Keywords Cont.

LIKE 
- search for partial strings 
    - `WHERE <column> LIKE %<partial string>%`
- % = wildcard character
- Case insensitive in SQLite

---

## New Query Keywords Cont.

ORDER BY 
- allows us to go against the default ordering behavior 
    - `ORDER BY <column>`

- Default order is ASC, but can add DESC to our command to reverse that
- Can order by multiple factors by adding more columns separated by a comma

---

## New Query Keywords Cont.

LIMIT 
- only return a certain number of records 
    - `LIMIT <value>`

OFFSET 
- skip a certain number of records 
    - `OFFSET <value>`
    - Can only be used in conjunction with LIMIT
    - Usually used in Pagination

---

## New Query Keywords Cont.

DISTINCT 
- returns only distinct (different) values 
    - `SELECT DISTINCT <column> FROM <table>;`

---

We can perform mathematical operations to our columns in a SELECT 

`SELECT <column> + <value> FROM <table>`

- 💡 This doesn't actually change the data in our DB

We can also alias our columns in a SELECT 
- `SELECT <column> AS <alias> FROM <table>`

---

# 25 mins for Intermediate Querying SP

---

Writing queries that join different tables together
`JOIN <table> ON (<table>.id = <other table>.<FK column>)`

- The ON keyword is what tells SQL what the association is and how to combine them
- Use dot notation to deal with abiguity in column names in the SELECT
- The order of our values in the ON statement doesn't matter
- The order of our JOIN statements matters when we are joining more than 2 tables together since we have to connect all the links of the chain.



---

## 35 mins for Query Using JOIN One-to-Many SP && Query using JOIN Many-to-Many SP

---

## Break out for LP
Reminder that you are not expected to complete everything today. Just get as far as possible and save the rest for more study time on Friday/the weekend

<div style="display: flex; justify-content: center">
  <img style="max-height: 350px;" src="https://hackmd.io/_uploads/rkuB-blA6.png" />
</div>

---
