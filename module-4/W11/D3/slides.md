<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 11` `W11D3`

---

## Week 11 Day 3

Querying with Express and Sequelize

---

## Review from yesterday...

- Models, migrations, and seeders, oh my!
- So many terminal commands
- Constraints vs Model Validations
- Migrations as "version control"

---

## Querying With Express & Sequelize

There are a variety of query methods built into our models

- findAll
  - Useful when we want multiple records
  - Always returns an array
- findOne
  - Useful when we want to find just a single record
- findByPk
  - Also useful when finding just a single record - Basically a findOne, but shortcuts to searching via Primary Key

---

To use these methods, we have to follow a couple steps

1. Import the model into the router file
2. Dispatch the method on the model, setting the return to a variable
3. Make sure that we await this fetch

```js
router.get("/", async (req, res) => {
  const array = await <model>.findAll();

  res.json(array);
});
```

---

Remember that all of the queries we write in Sequelize get turned into SQL

```
const users = await User.findAll(); = SELECT * FROM Users;
```

We can see this in the terminal

---

By default, Sequelize will do `SELECT *`

If we want to select certain columns, we need to add something to our query

All of the queries take in an object

---

We can add the attributes property to select certain columns, it takes in an array of the cols we want

```js
router.get("/attributes", async (req, res) => {
  const array = await <model>.findAll({
    attributes: ["col1", "col2"],
  });

  res.json(array);
});
```

---

To add a WHERE statement, we add a where property to the query that takes in a nested object that has a key of the column and value of what we want to look for

```js
router.get("/where", async (req, res) => {
  const array = await <model>.findAll({
    attributes: ["col1", "col2"],
    where: {
      <column>: <value>,
    },
  });

  res.json(array);
});
```

---

If we only want to find a single record we can use `findOne`

```js
router.get("/find-one/:name", async (req, res) => {
  const name = req.params.name;

  const <record> = await <model>.findOne({
    where: {
      name: name,
    },
  });

  res.json(<record>);
});
```

Note, if we target a column that isn't UNIQUE, it will add LIMIT 1 to the SQL

---

We can also use `findByPk` to find a specific record by its id
In a `findByPk`, the first arg is not an obj, but instead the PK

```js
router.get("/find-by-pk/:id", async (req, res) => {
  const id = req.params.id;

  const <record> = await <model>.findByPk(id);

  res.json(<record>);
});
```

---

If we want to add ORDER BY, that is another option in our query object
`order: [[<col>, 'DESC']]`

```js
router.get("/order", async (req, res) => {
  const <records> = await <model>.findAll({
    order: [
      ["col1", "DESC"],
      ["col2", "ASC"],
    ],
  });

  res.json(<records>);
});
```

---

Note that the arg for order is a 2D array

We can order by multiple columns by adding more inner arrays

If we want to use SQl comparison operators in our query, we can do so using the sequelize.Op package

<a href="https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators">Sequelize Operators Docs</a>

---

# 25 mins for Sequelize SELECT Queries SP

---

# POST routes

## Build/Create

Build is used for creating records. It consists of a few steps

- Build
- Validate (optional)
- Save

Create

- Does everything `Build` does in one call

---

We can use destructuring to pull the data we need from the `req.body`

```
const {col1, col2 col3, etc...} = req.body;
```

To use build:

```js
const <instance> = <model>.build({<data>})
await <instance>.validate()
await <instance>.save()

    res.json(<instance>)
```

---

# 20 minutes for Sequelize Insert SP

---

## Updating/Deleting in Sequelize

There are multiple ways to Update:

`<model>.update` - NOT recommended due to us running into a lot of issues with this method

This requires a where

---

### Object property reassignment

Major preference and what we will be using

- Instance.columnName = newValue
- Instance.set({ columnName: newValue})
- Instance.save() (must save with these methods)

We want to make sure that we are not accidentally updating our properties to undefined

```javascript
const {arg1, arg2} = req.body;
if (arg1 !== undefined) <instance>.property = arg1;
//...
```

This is done by checking the parts of the req.body to make sure they exist before updating

---

There are multiple ways to Delete:

`<Model>.destroy()` - NOT recommended for the same reasons as update

`<instance>.destroy()`

---

# 20 mins for Sequelize UPDATE and DELETE Singular Records SP

---

## Relationships in Sequelize

To tell Sequelize that a column is a FK, we need to add a couple properties to that column obj

```js
references: {
model: <table name>,
key: 'id' (not needed unless PK is something besides id)
},
onDelete: 'CASCADE' (if desired)
```

---

Next we have to connect our models, and this is done by using Associations

- One to One
  - hasOne - not used much
  - belongsTo (Post has one image, the image belongs to the post)
- One to Many
  - hasMany
  - belongsTo (User has many posts, a post belongs to a user)

We have to determine which is which, and much like raw SQL the order does matter

---

The model with the FK is the belongsTo

```javascript
// <model we are in>.<relationship>(models.<name of the model we are connecting to>, { foreignKey: <name of the FK being used to connect>})

// in Post.js
Post.belongsTo(models.User, { foreignKey: "userId" });

// in User.js
User.hasMany(models.Post, { foreignKey: "userId" });
```

---

## In SQL our join statements might look like this

```sql
SELECT * FROM Posts
JOIN Users
ON Posts.userId = Users.id;
```

Or

```sql
SELECT * FROM Users
JOIN Posts
ON Users.id = Posts.userId;
```

---

In order to CASCADE Delete, we need to add some additional stuff to the hasMany

- `onDelete: 'CASCADE'`,
- `hooks: true`

The `hooks: true` enforces that the deletions occur in the right order. If this is left off, we can still run into the Foreign Key Constraint Failed errors

---

### Many to Many

```js
belongsToMany(models.<name of the model on other side of joins table>, {
    through: models.<name of model for join table>,
    foreignKey: <FK to join to join table>,
    otherKey: <FK to join from join table to other table>
})
```

---

# 20 mins for Foreign Key Migrations SP

---

### Implementing these relationships in our Express


In our query object, we need to add an include property that points to the model we want to join.
Since we are referencing another model, we need to make sure and add that model to our imports.
`include: <model name>`

---

We can also add multiple models to the join by pointing the include property to an array

```js
include: [<model 1>, <model 2>]
```

---

We can also point include to an object or an array of objects

```js
include: {
    model: <model name>
}
```

---

We can also add attributes and where properties to our include object.

This allows us to further refine our query, getting only the data that we need.

We can also have nested includes

---

If we don't want any of the info from our join table, we can add a through property to one of our includes objects. That through property will also point to an object with attributes: []

```javascript
include: {
    model: <model name>,
    through: {
        attributes: []
    }
}
```

---

# 20 mins for Lazy/Eager Queries SP

---

# Break out for LP

---
