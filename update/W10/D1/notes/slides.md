<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 10` `W10D1`

---

# Welcome to Section 2 - Job Training!

### This is job training, not school. At this point, you are learning skills that you could be directly applying to a job.


---


## Module 4 
- Your Job will be to make an entire API server
- You will have 3 weeks to prepare for this job
- Week 1 - Express and SQL
- Week 2 - More Express and Sequelize
- Week 3 - Security

---

## Module 5
- Your Job will be to make a React client for the server you made in Module 4
- You will have 2 weeks to prepare for this job
- Week 1 - React fundamentals
- Week 2 - React with Redux


---

## Module 6
- Your Job will be to create a Full Stack App with a team of developers, using a Python Flask server and React client
- You will have 3 weeks to prepare for this job
- Week 1 - Python Basics
- Week 2 - Flask and SQLAlchemy
- Week 3 - Docker, AWS, project planning

---


### Tips for success

- Homework - The lectures build upon the homework instead of just reiterating. If you do not do the homework, you will not be able to keep up.
- Practice! - At this point, you will have learned enough to be able to practice as much as you want by just creating backends for whatever you want.


---

### Tips Continued

- Debugging - Debugging code is just as important as being able to write it in the first place. You should embrace every chance you can to debug your own code as well as their peer's code.
- Pair Programming - Taken extremely seriously in Mod 4. We are covering a lot of material in a short amount of time, and working with others is a great way to absorb the info.
- Prepare for the next day - Set up any short practices the night before so that you can make the most out of the Short Practice time.


---


# Module 4
All things backend
- Servers (Express)
- Databases (SQL, SQLite, PostgreSQL)

- Resources:
  - Section 2 Repo https://github.com/southwestmogrown/Section-2-Resources


---

### Basic layout of how class will go:

- Lecture/Demo
- Short Practice
- Discussion about SP
- Repeat


---

## Frontend vs. Backend

What are some differences between the two?

---

### Frontend

UI/UX, dealing with visuals, fetching (requests), and requesting data from server
Develop Requests, Handle Responses

---

### Backend

Server sending data to client, data storage/handling, routing, efficiency, security
Handle Requests, Develop Responses

---

## What is an API?

Application Programming Interface

Tool for delivering data, creating a way for a user to interact with data

---

## What is a Framework?

Structure/blueprint around which we build something else

---

## What is Express?

Express is a backend API Framework
- A backend is just a framework or skeleton that a project or site is built around
- Express abstracts all the nasty parts of HTTP servers allowing developers a much simpler way to get servers up and running

---

## Steps to start with Express

1. Initialize node - `npm init -y`
    - The `-y` flag answers a series of questions that will set the name, version, etc...
    - These can be renamed later
![image](https://hackmd.io/_uploads/H1J2w9D66.png)

---

### Steps Continued

2. Install packages

- Express - `npm install express`
- Nodemon - `npm install -D nodemon`
  - The -D flag tells node to install the package as a dev dependency

---

### Steps Continued

3. Create an app.js file - Main hub of the application
   - Import express
   - Use express to instantiate app object
   - Listen to a port (start the server)

---

### In app.js:

```jsx
// app.js
const express = require("express");
const app = express();
```

- These 2 lines will appear in every express app. Everything that we do in our express backend will be done on our app object.

---

### Listening

In order for our Express backend to run, we need our app to listen to a port. 

We will use the `.listen()` method on the app object to achieve this. 



---

### Listening

The `.listen()` method requires we pass in _at least_ 1 argument, which is the port number, but we will usually pass in a 2nd argument, which will be a callback function naming the port the server is listening on.

In app.js at the bottom:

```jsx
app.listen(8000, () => console.log("Listening on port 8000..."));
```

---

### Setup Scripts

Next we need to add our start scripts to package.json

```json
"start": "node app.js"
"dev": "nodemon app.js"
```

---

💡

We can run the start command using npm start, but for dev, we have to use npm `run` dev.

This is because commands like `start` and `test` are so common, they have been aliased to add `run` to the command, but for custom scripts like `dev`, we have to specify that it is a script.

---

### Now we can create a simple endpoint in app.js

- _Note that it is okay if you don't understand the syntax for this yet. We will be covering that next._

```jsx
app.get("/test", (req, res) => {
  res.send("Hello from your first express API!");
});
```

---

# 10 mins for Initialize an Express Application SP

---

## Route Handlers

App object methods:
- Each of these methods corresponds to an HTTP verb or an action taken by express.

<div style="justify-content: center; display: flex">
    <div>
        <ul style="list-style-type: none">
            <li style="color: green">get</li>
            <li style="color: blue">put</li>
            <li style="color: purple">patch</li>
            <li>use</li>
        </ul>
    </div>
    <div>
        <ul style="list-style-type: none">
            <li style="color: yellow">post</li>
            <li style="color: red">delete</li>
            <li>-</li>
            <li>all</li>
        </ul>
    </div>
</div>

---

### Request path options:

- string
- array of strings
- regular expressions
- array of RegEx
- array of strings and RegEx

---

## Middleware:

Series of callback functions
- Any callback function that has access to the `req` and `res` arguments
- Will be talked about more in depth on D2

---

## Response methods:

### Backend

- `send()` (used for plain text or JSON) - Will be almost exclusively used for sending plain text

- `json()` (always sends JSON)
  - sets the headers and formatting for us

---

### Frontend

These are used for server-side html rendering, so we won't be using them. You may use them in later projects, though.

- `render()`
- `redirect()`

---

## How do we actually use these methods?

```js
app.method(path, middleware, (req, res) => {
    res.send("Howdy")
});
```

---

#### GET
```js
app.get("/", (req, res) => {
  res.send("Howdy")
});
```

---

### POST

```js
app.post("/create", (req, res) => {
  console.log(req.body);
});
```

Note that the req.body is showing as undefined. In order to access the body of the request, we have to add some boilerplate middleware to the top of our `app.js` file

---

💡

`express.json()` will allow our application to parse the incoming JSON messages. It relies on `bodyParser()` under the hood.

```js
// app.js
app.use(express.json())
```

---

# !! Express works top => down !!

---

# 15 mins for Express Route Handlers SP

---

### Important Request object properties

- req.body
  - Where the request body content can be found
  - Requires `app.use(express.json())` global middleware
- req.params - look at a website like IMDB
  - Dynamic piece of the path
  - Use a ":" in the path to signify a param
- req.query
  - Dynamic piece of the URL
  - Starts with a "?" in the URL

---

## Create a basic endpoint to look at request object:

```js
app.get("/request", (req, res) => {
  console.log(req);
});
```

---

## Create a basic endpoint to look at request params:

```js
app.get("/params", (req, res) => {
  console.log(req.params);
});
```

---

## Create a basic endpoint to look at request query:

```js
app.get("/query", (req, res) => {
  console.log(req.query);
});
```

---

## Important to note that routes should be in order of most specific => least specific

---

# 20 mins for Express Request Response Objects SP

---

# Mod 4 Q&A

---

<div style="display: flex; justify-content: center">
    <h1>
        FIN
    </h1>
</div>