









const http = require("http");


const server = http.createServer((req, res) => {
  let resBody = `<!DOCTYPE html>
          <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hello World!</title>
              </head>
              <body>
                <h1>hello world</h1>
              </body>
          </html>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(resBody);
});

const port = 5000;

server.listen(port, () => console.log(`listening in on port ${port}`));
