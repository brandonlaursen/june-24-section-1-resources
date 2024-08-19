/*



  REQUEST - RESPONSE CYCLE

  Were going to start off with traditional html web servers
    * usually involve form submissions
    * use only GET and POST

  Later on in the week, well work with JSON web API's
    * working with JSON object
    * uses GET, POST, PATCH, PUT, DELETE

  Important to know both!

  * Will not be assessed on creating servers/routes!
  * We will learn all about that in mod 4


  HTTP Request - Traditional Web Server

  * Request could be either
    * retrieving resources from the server - GET
    * creating a new resource on a server - POST
  ! When we learn about json web servers we will use the other verbs - PUT, PATCH, DELETE


   Request line - first line of an http request
    * Made up of three parts
    1. Method - indicated by HTTP verb
    2. URI (Uniform Resource Indicator) identifies what you requested
      * a resource can be anything from physical object to statues to a kind of information
      * ex: users, posts and likes
      * root resource - /
    3. HTTP version - usually HTTP/1.1 OR HTTP/2


  Request
     Request Line - url and the Method/Verb
        * url
          *  http://localhost:5000/
          *  http://localhost:5000/posts
          *  http://localhost:5000/posts/1

        * Method/Verb
          * GET/ http://localhost:5000/
          * POST/  http://localhost:5000/posts

        * Endpoint -  combination of the url and the method
          * - GET/posts
          * - POST/posts
            * we can simulate put, patch, and delete through POST

    Route vs endpoint?
    * Route is the url path for the request
    * Endpoint is a combination of the route and HTTP Verb


    Headers - define how server might process request
      * Content-Type - specifies the content of the request body
        * NOTE: GET request do not require a body
        * You only need to specify the content type if there is a body
        * POST will normally have a body, therefore need a Content-Type header to specify the type of the body
        * ex: Content-Type: x-www-form-urlencoded

      * Example Content-types:
        * - application/x-www-form-urlencoded	info submitted directly from an HTML web form
        * - application/json	JSON - data format similar to JavaScript objects
        * - multipart/form-data	info submitted from an HTML web form with multiple media types

    * Body
    When sending data that doesn't fit in a header and is too complex for the URI, the data can be placed in the body of our HTTP request.
     * The most common way form data is formatted is URL encoding. This is the default for data from web forms and looks a little like this:

    * ex: name=claire&age=29&iceCream=vanilla
     - To tell the server how to interpret your body, it's important to set the Content-Type header
     - Content-Type header value for URL encoding is application/x-www-form-urlencoded


      HTML Form Submission Requests
      * When you submit a form on the browser, the browser makes a request to the server with the contents of the HTML form inside of the request body.

      When you create a form in HTML, you can specify two HTML attributes that influence the components of the request made when the form is submitted.
        * method - method of the request, can only be set to "POST"
        * action - URL path of the request
          * ex: POST /posts

      Here's the flow of how a typical form submission goes:
      * Form is submitted
      * Browser makes request to the server
      * Server parses the request body and does some CRUD action with the data
      * Server sends a redirection response
      * Browser receives response
      * Browser redirects user to the path specified in the Location header of the response



  Response
  * A web server delivers content via responses
  * An HTTP response contains either the content requested or an explanation of why that content couldn't be delivered


  Components of an HTTP Response
  * status-line (instead of a request-line)
    - HTTP/1.1 200 OK
    - HTTP version /  Status-Code / Reason-Phrase
  * headers that provide helpful metadata about the response
  * the response body: a representation of the requested resource.

     Status code

     Common status codes
  - Status codes 100 - 199: Informational
  - Status codes 200 - 299: Successful
    * 200 OK: Request received and fulfilled. These usually come with a body that contains the resource you requested.
    * 201 Created: Your request was received and a new record was created as a result. You'll often see this response to POST requests.
  - Status codes 300 - 399: Redirection
    * 301 Moved Permanently: The resource you requested is in a totally new location.
    * 302 Found: Similarly, to 301 Moved Permanently, this indicates that a resource has moved. However, this code is used to indicate a temporary move.



  Headers
  *  They establish metadata that the receiving client might need to process the response.

  Content-Type: specifying the type of the resource to send back in the response

  Here are some common MIME types for the Content-Type header of a response:
   * MIME type	meaning
   * text/html	HTML document
   * text/css	CSS styles document
   * text/javascript	JavaScript script
   * text/plain	plain text
   * image/png	PNG Image
   * application/json	JSON - data format similar to JavaScript object

   Body
   * Assuming a successful request, the body of the response contains the resource you've requested.
   ! The format of the body is dictated by the Content-Type header.
   * Headers may change how the browser handles the body, but they won't modify the body's content.


*/
