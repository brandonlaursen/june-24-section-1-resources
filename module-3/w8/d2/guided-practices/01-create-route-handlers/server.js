const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  //title=something&description=something
  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // GET /
    if (req.method === "GET" && req.url === "/") {
      res.setHeader("Content-Type", "text/plain");
      const resBody = "Dog Club";
      res.statusCode = 200;
      // res.write(resBody);
      return res.end(resBody);
    }

    // GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      const resBody = `Dogs index`;
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      return res.end(resBody);
    }

    // GET /dogs/new
    if (req.method === "GET" && req.url === "/dogs/new") {
      // console.log('do we make it');

      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      // set the body and end the response
      return res.end("Dog create form page");
    }

    // GET dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs/")) {
      // console.log(req.url);// /dogs/1
      const urlParts = req.url.split("/");
      console.log(urlParts); // [ '', 'dogs', '1' ]
      const id = urlParts[2];

      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;

      return res.end(`Dog details for dogId: ${id}`);
    }

    // POST dogs/:dogId
    if (req.method === "POST" && req.url.startsWith("/dogs/")) {

      const urlParts = req.url.split("/");
      const id = urlParts[2];

      res.setHeader("Location", `/dogs/${id}`);
      res.statusCode = 302

      return res.end();
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
