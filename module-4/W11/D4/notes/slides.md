<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 11` `W11D4`


# Week 11 Day 4

Built in association methods and aggregate queries

---

## Review from yesterday...

- FULL CRUD Functionality
  1. Querying (READ)
  2. Inserting Data (CREATE)
  3. Updating Data (UPDATE)
  4. Deleting Data (DELETE)
- Associations
  - 1. 1 to 1 (really rare)
  - 2. 1 to many (common)
  - 3. many to many (join table time)
- Eager vs lazy loading

---


## Association Methods

Once we have an instance provided by a query in Sequelize, we are provided with a series of built in methods that allow us to easily make additional queries.

https://sequelize.org/docs/v6/core-concepts/assocs/

---

# Getter method

After querying a table, we automatically get a method to get a related table's info

For example from User:

```javascript
let user = await User.findByPk(1);
let posts = await user.getPosts();
```

For example from Post:

```javascript
let post = await Post.findByPk(1);
let user = await post.getUser();
```

The getter method can be either plural or singular based on the relationship
Basically exists to assist in lazy loading

---

# Create Method

After querying a table, we can create a record for a related table
We don't need to add the value for the FK
For example:

```javascript
let user = await User.findByPk(1);
let post = await user.createPost({
  title: "New Post",
  caption: "Good Times",
  imageId: 15,
});
```

---

# Add Method

In a Many to Many relationship, allows us to add a record to the joins table
For example:

```javascript
let album = await Album.findByPk(1);
await album.addImage(someImageId);
```

---

# 20 min for Insert with Associations SP

---

# Aggregate Functions

Our recommendation is to stick to basic, class-level aggregate functions and JS
We want to LAZY LOAD OUR AGGREGATE DATA

https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#utility-methods

---

- Min/Max
  - `await <Model>.min/max(<col>)`
- Count
  - `await <Model>.count()`
  - Can also be achieved by finding the length of the return from `<Model>.findAll()`
- Sum
  - `await <Model>.sum(<col>)`

---

Avg can be calculated by writing simple JS combining the count and sum methods

We can also take in an obj to specify a WHERE clause to target specific records

- `await <Model>.<func>(<col>, { where: <filter> })`

---

We can use the `<instance>.toJSON()` method to turn the result from a query into a JSON object instead of a promise

This allows us to lazy load our aggregate data then add it to the return from a data query

This is useful for the project!!

---

# 30 min for Aggregate Data SP

