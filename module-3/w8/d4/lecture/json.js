

/*



  JSON - JavaScript Object Notation.
  * JSON is an open-standard file format that "uses human-readable text to transmit objects consisting of key-values pairs and array data types."
  * JSON is just a format for data.
  * JSON is just a string. It's just text.


  * Serialization
  When you have some data and you want to turn it into a string (or some other kind of value like "binary") so your program can send it to another computer, that is the process of serialization.

  JSON object that has two methods on it that allows you to convert JSON-formatted strings into JavaScript objects and JavaScript object into JSON-formatted strings. They are:


  * JSON.stringify(value)
    - will turn the value passed into it into a string.
    - converts a value into JSON
    - Use JSON.stringify to serialize JavaScript objects


  * JSON.parse(str)
    - will turn a JSON-formatted string into a JavaScript object.
    - converts JSON to a js object
    - Use JSON.parse to deserialize JSON-formatted strings

*/

const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));
// prints [1, "hello, \"world\"", 3.14, {"id":17}]

const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }
// [ 1, 'hello, "world"', 3.14, { id: 17 } ]

/*


  .json()
* the json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.
* turns json into a js object
  await JSON.parse(reqBody)

*/
