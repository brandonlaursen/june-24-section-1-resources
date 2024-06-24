# `Week 8 Day 4`

- Serialize and Deserialize JSON Demo
- Practice: Serialize and Deserialize JSON
- Exercise: Create API documentation
- Practice: Test API endpoints
- Practice: Create API endpoints



## `JSON - JavaScript Object Notation.`
  * JSON is an open-standard file format that "uses human-readable text to transmit objects consisting of key-values pairs and array data types."
  * JSON is just a format for data.
  * JSON is just a string. It's just text.

You will almost never write raw JSON but its good to know how to recognize and read it

JSON always uses double quotes for strings.
  - `'this is "text"'  -> "this is \"text\""`
    * escape character - `\`

  * An array -
    - `[1, 2, 3] -> "[1, 2, 3]"`

  * An object
    - `{ person: true, name: "Roberta" }`
    - `"{ \"person\": true, \"name\": \"Roberta\" }"`

  * Booleans, numbers, null, etc
    - `true -> "true"`
    - `false -> "false"`
    - `12.34 -> "12.34"`
    - `null -> "null"`

### No trailing commas!

### Serialization
When you have some data and you want to turn it into a string (or some other kind of value like "binary") so your program can send it to another computer, that is the process of serialization.

JSON object that has two methods on it that allows you to convert JSON-formatted strings into JavaScript objects and JavaScript object into JSON-formatted strings. They are:


* `JSON.stringify(value)`
  - will turn the value passed into it into a string.
  - converts a value into `JSON`
  - Use `JSON.stringify` to serialize JavaScript objects


```js

const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));
// prints [1, "hello, \"world\"", 3.14, {"id":17}]
```

* `JSON.parse(str)`
  - will turn a JSON-formatted string into a JavaScript object.
  - converts JSON to a js object
  - Use JSON.parse to deserialize JSON-formatted strings

```js
const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }
```

- `req.json()`
  * The `json()` method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.
  * turns json into a js object

- `Fetch`
  * using node-fetch package to use the fetch keyword in node
  * fetch is built into browser not node

 * `.json`
    * method on request that reads the request body and returns a promise that parses the body as JSON
    * https://developer.mozilla.org/en-US/docs/Web/API/Request/json

```js
const fetch = require("node-fetch");

async function function3() {

  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  if (response) {
    console.log("before serialized", response);
    const deserialized = await response.json();
    console.log("after deserialized", deserialized);
  } else {
    console.log("ERROR");
  }


}

function3();
```

### Web API servers
Web API servers only need to return and manipulate data. Instead of interacting with the data through HTML web pages like in a traditional HTML web server, developers can make requests to a web API server to read and manipulate data. Therefore, there is no need for a HTML web pages to be displayed or returned from a web API server. That means there is no need for GET endpoints for viewing the HTML form pages on a web API server.

A web API server is not limited to just GET and POST requests like a traditional HTML web server is. A web API server should be able to accept all methods (GET, POST, PUT/PATCH and DELETE) in a request.

### traditional HTML Web server
Traditional HTML Web server- interacting with html web pages - get & post
- displaying information through html

  * `web API` - not limited to just get and post
  - now use get, post, put, patch, delete
  -  A Web API's main role is to transmit data, usually in the form of JSON, and perform CRUD actions. It can render HTML pages, but is not its primary role.



## `Practice: Serialize and Deserialize JSON - 20min(Solo)`
## `Practice: Serialize and Deserialize JSON`
## `Exercise: Create API documentation - 20min(Solo)`
## `Exercise: Create API documentation Walkthrough`
## `Practice: Test API endpoints - 30min(Solo)`
## `Practice: Test API endpoints Walkthrough`
## `Practice: Create API endpoints - 30min(Solo)`
## `Practice: Create API endpoints Walkthrough`
## `Work on Long Practice till EOD`
