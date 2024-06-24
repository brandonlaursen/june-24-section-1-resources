# `Week 8 Day 1`

- Assessment
- Exercise: HTML Web Server RESTful Endpoints


## `HTTP - Hypertext Transfer Protocol`
  * HTTP is stateless

###  `Breaking down the request`
`POST / HTTP/1.0`

### Request line - first line of an http request
Made up of three parts
1. `Method` - indicated by HTTP verb
2. `URI` (Uniform Resource Indicator) identifies what you requested
    * a resource can be anything from physical object to statues to a kind of information
    * ex: users, posts and likes
    * root resource - /
3. `HTTP version` - usually HTTP/1.1 OR HTTP/2
    * EX: appacademy.io
    * HTTP version is - 1.1
    * URI - is root resource - /
    * POST - HTTP Verb for request

### Headers
  - `Host`: appacademy.io
  - `Content-Length`: 31
  - `Content-Type`: application/x-www-form-urlencoded
  - `Hos``t: appacademy.io
  - KEY : VALUE
    - The request-line sets the table
    * These headers define how the server might process the request.
    * headers describe the menu
    * key - value pairs hat come after the request line
    * header key is case-insensitive

### Body
  `username=azure&password=hunter2`
  * When sending data that doesn't fit in a header and is too complex for the URI, the data can be placed in the body of our HTTP request.
  * The most common way form data is formatted is URL encoding. This is the default for data from web forms and looks a little like this:
      * ex: name=claire&age=29&iceCream=vanilla
  - To tell the server how to interpret your body, it's important to set the Content-Type header
  - `Content-Type` header value for URL encoding is `application/x-www-form-urlencoded`


### 5 Common HTTP Verbs
 CRUD - create, read, update, destroy

`GET` - read
  * retrieving resources from the server
  * only require that the server return a resource.
  * Do not require a body
  * data is shared via url

`POST` - create
  * creating new resources on the server.
  * submitting a form
  * can have a body
  * will contain data server needs to make the request
  * ex: username + password

`PUT` - update
  * update a resource
  * can have a body
  * contains data needed to update resource
  * ex: updating username
  * will need userId, email, password, new name etc all resources needed to make the update

`PATCH` - update
  * requests are also used to update a resource on the server.
  * They are very similar to PUT requests, but do not require the whole resource to perform the update.
  * they can have a body
  * PATCH request would only require your new name, not the rest of your account details, to succeed.
  ! unlike put would only require the new name

`DELETE` - destroy
  * DELETE requests destroy resources on the server.
  * These requests can have a body, BUT it's traditionally not recommended to include one.
  * These might be saved database records, like removing a product that's sold out, or more ephemeral resources, like logging a user out of their current session.
  * usually delete and get do not have body - only need when sending information

### Content-Type Header
  * Any header beginning with `Content-` are headers that define details about the body of the request.
  - `Content` headers will only show up on requests that support content in the body, so `GET` requests should never have any content headers
  * `Content-Type` which lets the server know the format of the request body data and how to process it.
  * The values for the `Content-Typ`e header follow a standard and are called MIME types or media types.

    * MIME type	meaning
    - `application/x-www-form-urlencoded`	info submitted directly from an HTML web form
    - `application/json`	JSON - data format similar to JavaScript objects
    - `multipart/form-data`	info submitted from an HTML web form with multiple media types

###  `Breaking down the response`

### HTTP Response Components
  * A web server delivers content via responses
  * An HTTP response contains either the content requested or an explanation of why that content couldn't be delivered

### Components of an HTTP Response
  * `status-line` (instead of a request-line)
    - `HTTP/1.1 200 OK`
    - `HTTP version /  Status-Code / Reason-Phrase`
  * headers that provide helpful metadata about the response
  * the response body: a representation of the requested resource.

  HTTP status codes are a numeric way of representing a server's response. Each code is a three-digit number accompanied by a short description. They're grouped by the first digit (so, for example, all "Informational" codes begin with a 1: 100 - 199).

### Common status codes
  - Status codes `100 - 199: Informational`
  - Status codes `200 - 299: Successful`
    * `200 OK`: Request received and fulfilled. These usually come with a body that contains the resource you requested.
    * `201 Created`: Your request was received and a new record was created as a result. You'll often see this response to POST requests.
  - Status codes `300 - 399: Redirection`
    * `3`01 Moved Permanently`: The resource you requested is in a totally new location.
    * `302 Found`: Similarly, to 301 Moved Permanently, this indicates that a resource has moved. However, this code is used to indicate a temporary move.

   * `301 Moved Permanently` and `302 Found` often get confused. When should you use a 302 Found? The most common use case today is for the transition from HTTP to HTTPS. HTTPS is secure HTTP messaging, where requests & responses are encrypted so they can't be read by prying eyes while en route to their destinations.

   - status code `302` may be used when redirecting users from a http to https versioning which is more secure
   * its okay to keep navigating to http://our-website.com, but you're going to redirect them to https://our-website.com for their protection.


   Status codes `400 - 499: Client Error`
   * `400 Bad Request:` Whoops! The server received your request, but couldn't understand it.
   * `401 Unauthorized:` The resource you requested may exist, but you're not allowed to see it without authentication.
   * `403 Forbidden:` The resource you requested may exist, but you're not allowed to see it at all.
      - not used often as it gives hint to info they shoudnt see, usually use 404 instead
   * `404 Not Found:` The resource you requested doesn't exist.
  - A well-known example is GitHub. If you try to open a repository you don't have permission to access, GitHub will return a 404 Not Found even if your URL is correct! This protects you from random users guessing the names of your projects.

 - `Status codes 500 - 599: Server Error`
    * This range of response codes are the Web's way of saying "It's not you, it's me."
    * `500 Internal Server Error:` Your request was received, and the server tried to process it, but something went awry!
    * `504 Gateway Timeout:` Your request was received but the server didn't respond in a reasonable amount of time.
    - what 500 status code you should return if your API is temporarily down for maintenance.
    - `503 Service Unavailable`

### Headers
  * Headers on HTTP responses work identically to those on requests. They establish metadata that the receiving client might need to process the response.
  * `Content-Type` - Just like the Content-Type header of a request, the Content-Type header of a response lets the client know the format of the response body data and how to process it..

  Here are some common MIME types for the Content-Type header of a response:
   * `MIME typ`e`	meaning
   * `text/html`	HTML document
   * `text/css`	CSS styles document
   * `text/javascript`	JavaScript script
   * `text/plain`	plain text
   * `image/png`	PNG Image
   * `application/json	JSON` - data format similar to JavaScript object

### Body
   * Assuming a successful request, the body of the response contains the resource you've requested.
   - The format of the body is dictated by the Content-Type header.
   * Headers may change how the browser handles the body, but they won't modify the body's content.




### `RESTful Routes`
  * `ReST` stands for `REpresentational State Transfer.`
  * `REST` is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses.

### Routes vs. Endpoints
  * A `route` is the `URL path` for a `request`.
  * An `endpoint` is a pattern for a `request` that has a specific route and `HTTP verb` combination to define how the server should process the request and what the response is expected to look like.
  * `Endpoints` are used to distinguish different types of requests from each other.

  * Here are some examples of endpoints vs. routes:
      - `Endpoint: GET /users, Route: /users`
      - `Endpoint: POST /users, Route: /users`
      - `Endpoint: POST /session, Route: /session`
  * endpoint just includes the verb

  ### Route Parameters
  * A `route parameter` is a named segment of the URL path that acts as a placeholder for a changeable part of the path. Route parameters are used to generalize routes to a certain pattern.
  * Route parameters are indicated in the URL path by a colon, :, followed by the name of the variable part of the path.
    - ex: `URL PATH -  /tweets/17`
    - ex: `Route parameter - /tweets/:tweetId`
    *  `:tweetId is parameter for 17`
  - The generic URL path of `/tweets/:tweetId` represents routes starting with `/tweets/` and ending in an `id`
  - (e.g. `/tweets aefe116d-352b-41c2-a5bb-fc74365f2697).`

### Rules of ReST
  * `ReST (Representational State Transfer)` is an architecture style for designing networked applications. To be clear, `ReST` is not an official standard. Instead, it's a set of rules/constraints.

 ReST defines six architectural constraints,
  * `Decoupled client-server:` The client and the server should be decoupled so that they can evolve separately without any dependence on one another.
  * `Stateless:` This means that there is no necessary session between the client and the server. Data received from the server can be used by the client independently. This allows you to have short discrete operations. Luckily, this is a natural fit for HTTP operations in which requests are intended to be independent and short-lived.
  * `Uniform interface:` RESTful endpoints are meant to be self-describing and uniform in their definition. Each operation is intended to be separated by a separate endpoint or URL

### Two kinds of URLs: Collection vs. Singular
  * ones that point at collections of resources
  1. A path that combines a plural noun (the resource name)
    /invoices would represent a`collection` of invoices that you're allowed to see
    /people would represent the people in the application that you're allowed to see
    /houses would represent a collection of houses

  2. ones that point at single resources.`
  - a record identifier represents a single resource in your application.
    `/invoices/PK-200201` would represent the single invoice that has the the invoice number `PK-200201 (record id)`
    `/people/10103` would represent the single person with `id 10103 (record id)`
    `/houses/bdfa5ef9-0c86-4810-bc13-10415250af09 `would represent the house with the specific globally unique record identifier `bdfa5ef9-0c86-4810-bc13-10415250af09`

   - `ex: user/tweets/tweetId`

    brandon/tweets/1
    maica/tweets/2
    brandon/home
    maica/home


 The endpoints that return HTML can follow a RESTful concept. However, you are limited to just using the verbs GET and POST. Hyperlinks, or just links, and URL path changes on the browser perform GET requests.

  - `/resource-name`	GET	Index page: Get an HTML-based list of the resource
  - `/resource-name/new`	GET	Create form page: Show a form to create a new record for the resource
  - `/resource-name	POST`	Submit create form: Create a new record for the resource
  - `/resource-name/:record-id	GET	Detail page: See the details of the specified record
  - `/resource-name/:record-id/edit`	GET	Edit form page: Show the edit form for the specified record
  - `/resource-name/:record-id`	POST	Submit edit form: Update the specified record
  - `/resource-name/:record-id/delete`	POST	Submit delete form: Delete the specified record

  - `/my/tweets`	GET	Index page: Get an HTML-based list of your tweets
  - `/my/tweets/new`	GET	Create form page: Show a form to create a new tweet
  - `/my/tweets`	`POST	Submit create form: Create a new tweet
  - `/my/tweets/17`	GET	Detail page: See the details of your tweet with the id of 17
  - `/my/tweets/17/edit`	GET	Edit form page: Show the edit form for your tweet with the id of 17
  - `/my/tweets/17`	POST	Submit edit form: Update the tweet with the submitted details
  - `/my/tweets/17/delete`	POST	Submit delete form: Delete your tweet with the id of 17


### Nesting Resources
  * Sometimes a resource is dependent on another resource or requires the information of another resource to perform the request. The route path should include the information about the desired resource and the required resource.

  * You can add resources to routes to create nested resources. The URL path can consist of multiple collections and singular resources.

Path Pattern	HTTP Verb	Meaning
  - `/resource-name/:record-id/nested-resource`	GET	Index page: Get an HTML-based list of the nested resource related to the specified record
  - `/resource-name/:record-id/nested-resource/new`	GET	Create form page: Show a form to create a new record for the nested resource related to the specified record
  - `/resource-name/:record-id/nested-resource`	POST	Submit create form: Create a new record for the nested resource related to the specified record
  - `/nested-resource/:nested-record-id`	GET	Detail page: See the details of the specified nested resource's record
  - `/nested-resource/:nested-record-id/edit`	GET	Edit form page: Show the edit form for the specified nested resource's record
  - `/nested-resource/:nested-record-id`	POST	Submit edit form: Update the specified nested resource's record
  - `/nested-resource/:nested-record-id/delete`	POST	Submit delete form: Delete the specified nested resource's record


## `Exercise: HTML Web Server RESTful Endpoints - 1h (Solo)`
  - Guided Practice Header
## `Exercise: HTML Web Server RESTful Endpoints Walkthrough`

## `Work on Long Practice till EOD`
