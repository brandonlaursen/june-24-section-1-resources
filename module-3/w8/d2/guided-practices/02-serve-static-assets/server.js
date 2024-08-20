const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {



  if(req.method === 'GET' && req.url.startsWith('/static')) {

    // console.log(req.url);

    const path = req.url.split('/static')[1];
    console.log('==>',path);/// /images/dog.jpg


    let ext = path.split('.')[1];
    console.log('ext',ext);/// jpg

    let contentType;
    if(ext === 'jpg') {
      contentType = 'image/jpeg'
    } else if(ext === 'css') {
      contentType = 'text/css'
    } else {
      contentType = 'text/html';
    }

    console.log('ct',contentType);// image/jpeg

    // ./assets/images/dog.jpg
    const resBody = fs.readFileSync(`./assets${path}`);



    res.setHeader('Content-Type', contentType);
    res.statusCode = 200;

    return res.end(resBody);
  }


  const resBody = fs.readFileSync('./index.html');

  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  return res.end(resBody);


});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
