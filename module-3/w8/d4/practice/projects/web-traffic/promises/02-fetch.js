if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/

//!!START
const headers = { "content-type": "application/json" };
const body = JSON.stringify({ color: 'green' });
fetch('/colors/1', { method: 'put', headers, body })
  .then(res => res.json())
  .then(resBody => console.log(resBody));
//!!END
