<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 10` `W10D2`

---

## Express Middleware, Error Handlers, & Environment Variables

### Week 10 Day 2




---


## Review from yesterday...

- Backend/Server vs Frontend/Client
- Frameworks (ie Express)
- Skeleton Epress app
- Route handlers
     1. Methods (GET, POST, PUT, PATCH, DELETE, ALL, USE)
     2. Route Path vs URL
     3. req.body
     4. req.params
     5. req.query
     6. Middleware (express.json())




---

### Express Middleware

- Today we talk primarily about middleware

- Express is really just two things

  1. A router
  2. A series of middleware functions

---

### `app.use(express.json())`

- This is an example of middleware. It has access to the request and response bodies, parses them, then sends them to the next piece of middleware.

---

### All middleware must take in at least 3 params

- request (req) 
- response (res) 
- next

The `next` parameter is what tells express to move to the next piece of middleware. If there is no `next` we have reached our endpoint.

---

### Middleware example

```javascript
const printPath = (req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
};
```

Invoking the next parameter without an error object will send us to the next piece of middleware.

---

### How do we use middleware?

```javascript
app.get('/', printPath, (req, res) => {
    // do some stuff
})
```

Simply add the desired middleware after the `path` argument and before the `cb` argument.

---

### Create a middleware to make sure the req.body has a specific key

We are actually going to demo 3 versions of this middleware

<div>
<p style="font-size: 30px">1. Works as intended. Mutually exclusive. We are checking for the existence of the stuff property.</p>
<p style="font-size: 30px">2. Flip the conditional logic. Still mutually exclusive, and still works.</p>
<p style="font-size: 30px">3. NOT mutually exclusive. This one will lead to an error with headers being set after a response has already been sent. This is caused by us sending the error response, then still hitting next and going into a route where we try and send another response.</p>
</div>

---

### 1. Works as intended. Mutually exclusive.

```javascript
const checkUserInput1 = (req, res, next) => {
  if (req.body.stuff) {
    next();
  } else {
    res.send("Please include a stuff property.");
  }
};
```

---

### 2. Flip the conditional logic.

```javascript
const checkUserInput2 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property.");
  } else {
    next();
  }
};
```

---

### 3. NOT mutually exclusive.

```javascript
const checkUserInput3 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property.");
  }
  next();
};
```

---

### Add checkUserInput middleware to the `/test` route

```javascript
app.get('/', printPath, checkUserInput1, (req, res) => {
    // do some stuff
});
```

---

### `app.use()`

`app.use` is explicitly used to mount middleware to the app.

The path string is not needed, but can be useful.

```javascript
app.use(express.json());
```

The path does not have to match, however the _beginning_ of the path must match the prefix path added to the `app.use()`.
- Important to note that the prefix is ignored in the path that is passed into the middleware

---

### Passing `next()` an argument

Another method of control is passing something into `next()`

```javascript
app.use((req, res, next) => {
    console.log('error test');
    const error = 'There was an error :(';
    next(error);
});
```

---

#### When an error is passed into next, Express behavior changes a lot
Express will skip all other middleware until it finds one that takes in a 4th param (error)
<div>
    <ul>
        <li style="font-size: 30px">
            Important to note that the order of the params matters (err, req, res, next)
        </li>
        <li style="font-size: 30px">
            To handle the error being passed, we have to create a way to catch that error Express also assumes that a route handler isn't meant to take in an error.
        </li>
        <li style="font-size: 30px">
            This means that if the route handler has 3 params and matches the path, Express will not enter that endpoint.
        </li>
    </ul>
</div>


---

### Error Handler

```javascript
// app.js

// ...
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err); //We are using res.send because our error is just a string
});

// app.listen(...)
```

---

# 20 mins for Predict Order of Express Middleware SP

---

### Error Handling Middleware

- Takes in the 4th arg (err)that MUST be in the 1st position
- Generally is at the end of the pipeline so that nothing is skipped and it can catch all errors

---

### Implementation

```javascript
app.use((req, res, next) => {
    console.log('error test');
    const error = new Error('There was an error :(');
    error.statusCode = 401;
    next(error);
});
```


---

💡Anytime we generate a new error, we need to add a statusCode property to that new Error. We also have to set the res status code in our error-handling middleware
- Note that we use `res.status(<status code>)` instead of `res.status = <status code>`
```javascript
app.use((err, req, res, next) => {
    console.log(err.message);
    const status = err.statusCode || 500;
    res.status(status);
    res.json({
        message: err.message || 'Something went wrong...',
        status
    });
});
```

---

#### Why should we go through all of this work in the error handling middleware instead of just handling the errors in the routes?
- SRP/DRY
- Readability

---

### How can we handle 404 errors?

Add this global middleware right above the error handling middleware:

```javascript
app.use((req, res, next) => {
    const notFoundErr = new Error (`${req.path} not found.`);
    notFoundErr.statusCode = 404;
    next(notFoundErr);
});
```

---

# 30 min for Express Error Handling SP

---

# Routers

An extension of our app object
- Start by creating a routes folder to hold all of our routers
- Then create a route file for our sample code 

In the route file:

```javascript
const express = require('express'); //still need to import express
const router = express.Router(); //This is the object that has all of our methods
```

---

The router object behaves like the app obj in many ways, but not all. For example, the router object cannot listen to a port, but it still has all of our methods

---

# Create a basic get route

Use the router created above to create a GET route. This is very similar to making a route with the `app` object.

```javascript
router.get('/', async (req, res) => {
    res.send("Howdy, from router");
});
```

---

### Export/Import & use the router

First we need to export the router
```javascript
module.exports = router;
```

Then we need to import that router into our app.js file
```javascript
const routerName = require('./routes/router');
```

Finally we have to tell Express to use that router
```javascript
app.use(routerName);
```

---

Optionally, we can add a prefix string to the app.use to ensure that only related requests hit the router

```javascript
app.use('/router', routerName);
```

---

# 20 min for Express Router SP

---

### Environment Variables

There are a few common environments we will work in
- Production
- Development (dev)
- Testing - underutilized
  - A way to mimic the production environment locally so that we can test changes without interferring with user experience.

---

### What's the point?

They are used to obscure sensitive data

- API keys
- Database name/password/url
- Anything we can not expose to the public

---

### There are a few ways to setup our environment variables

Through the CLI
- In the terminal:`MESSAGE="hello there" npm start`
- In `app.js`: `console.log(process.env.MESSAGE)`

This can be really annoying to type out every time

---

### Adding them to our script in package.json

Update `start` command to be: `MESSAGE=wassup node app.js`

```json
"scripts": {
    "start": "MESSAGE=wassup node app.js"
  }
```

This defeats the purpose since we are pushing our package.json to github

---

### Creating a .env file

Create a new `.env` file at the root of the application. Place your environment variables in there like so:

```
MESSAGE=wassup
```

#### Be sure to add `.env` to `.gitignore`

---

### How to access the environment variables

To access variables in our `.env` from our app, we have to install a couple npm packages
```
npm install dotenv

npm install dotenv-cli //This allows us to access .env from CLI
```

---

Next we need to add some boilerplate code to our app.js
```javascript
require('dotenv').config()
```
This should be placed at the top of the `app.js` file before any routes or middleware.

---

### Tips

It's important that this is at the top of the file so that every aspect of our app has access to our env variables
            
We have to make sure that our `.env` file is on the same level as our `package.json` file in the file structure

Env variables that have a value that is longer than a single word need "" if they are in the CLI, but not if they are in the `.env` file

---

# 20 min for Express Environment Variables

---

<div style="display: flex; justify-content: center">
    <img style="height: 400px" src='https://hackmd.io/_uploads/S1h63kdTT.jpg'/>
</div>


