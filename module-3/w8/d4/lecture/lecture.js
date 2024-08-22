/*


  Traditional web server

  Methods: POST and GET

  Restful convention
  Endpoints:
    GET  /notes
    POST /notes
    POST /notes/1/edit
    POST /notes/1/delete

  Form data
  Content-Type: application/x-www-form-urlencoded

  Request
  method: GET, POST
  endpoint: / , /notes
  body: 'some body'
  headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
*/
const req1 = {
  endpoint: "Get all the dogs",
  request: {
    method: "GET",
    URL: "/dogs",
    headers: false,
    body: false,
  },
};

const req2 = {
  endpoint: "Get all the dogs",
  request: {
    method: "POST",
    URL: "/dogs",
    headers: {
      "Content-Type": "text/html",
    },
    body: "<div>SOME BODY</div>",
  },
};

/*


  Response
     "headers": {
        "Content-Type": "text/html"
      },
      "body": "string"
  */

const res1 = {
  headers: {
    "Content-Type": "text/html",
  },
  statusCode: 200,
  body: true,
};


/*

  JSON - JS object notation

  METHODS: GET, POST, PUT, PATCH, DELETE

  Endpoints:
    GET /notes
    POST /notes

   Traditional web server ->
    * POST /notes/1/edit
    * POST /notes/1/delete


    JSON Web api ->
    * PUT /notes/1
    * DELETE /notes/1

*/

const req3 = {
  "endpoint": "Get all the dogs",
  "request": {
    "method": "GET",
    "URL": "/dogs",
    "headers": false,
    "body": false
  }
}


const req4 = {
  "endpoint": "EDIT a dogs",
  "request": {
    "method": "PUT",
    "URL": "/dogs/:dogId",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "dog":  "{ \"name\":\"scoobie\", \"img\":\"url\"}"
    }
  }
}
