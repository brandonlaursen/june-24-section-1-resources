# Practice: Creating Route Handlers

In this practice, you will be creating route handlers in a server that will
return different responses to the client based on a request's method and URL.

## Set up

Clone the project from the `Download Project` link below.

## Instructions

Take a look at the given **server.js** file. A server has been created for you.

After the line, "define route handlers here", you will create route handlers for
the following endpoints. After you finish creating a route handler, test it
by starting the server and trying to make a request with the method and URL path
of the endpoint you are trying to test.

- `GET /`
  - response components:
    - status code: 200
    - headers:
      - Content-Type: text/plain
    - body: 'Dog Club'
- `GET /dogs`
  - response components:
    - status code: 200
    - headers:
      - Content-Type: text/plain
    - body: 'Dogs index'

### Bonus Endpoints

Here are some additional endpoints to practice creating route handlers. For
help on how to parse a route parameter like `:dogId`, take a look at the very
last section of these instruction.

- `GET /dogs/:dogId`
  - response components:
    - status code: 200
    - headers:
      - Content-Type: text/plain
    - body: 'Dog details for dogId: {dogId}' ({dogId} replaced with :dogId
      route parameter)
  - Hint: Take a look at the end of the instructions for a hint on how to parse
    route parameter, `:dogId`
- `GET /dogs/new`
  - response components:
    - status code: 200
    - headers:
      - Content-Type: text/plain
    - body: 'Dog create form page'
- `POST /dogs`
  - response components:
    - status code = 302;
    - headers:
      - Location: /dogs/:newDogId (`:newDogId` is generated by calling
        the `getNewDogId()` function defined at the top of the `server.js`
        file)
    - body: none
- `POST /dogs/:dogId`
  - response components:
    - status code = 302;
    - headers:
      - Location: /dogs/:dogId (`:dogId` is the `:dogId` route parameter)
    - body: none
- `GET /dogs/:dogId/edit`
  - response components:
    - status code: 200
    - headers:
      - Content-Type: text/plain
    - body: 'Dog edit form page for dogId: {dogId}' ({dogId} replaced with
      :dogId route parameter)

## Hint: Parsing the route parameter

Here's a hint for how to parse the route parameters inside of the URL path,
`req.url`.

If you want to determine if the URL path `/shapes/circle` matches the route
`/shapes/:shapeName`, you would first need to check if the URL path begins with
`/shapes`.

Then check if the amount of substrings created by splitting the a URL path by
the `/` delimiter is equal to the amount of substrings created by splitting
`/shapes/:shapeName` by `/`.

`/shapes/circle` split by `/` => 3 substrings: `''`, `'shapes'`, `'circle'`

`/shapes/:shapeName` split by `/` => 3 substrings: `''`, `'shapes'`,
`':shapeName'`

If it does, then you can match the
substring of `circle` with the `:shapeName` substring by its similarity in
substring order.

`'circle'` matches with `':shapeName'` because it is the 3rd substring.

Tip: You can use the following functions to aid you:

- [`String.split`] - to split a string into an array by a given delimiter
- [`String.startsWith`] - returns true if the string starts with the given
  substring

[`String.split`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[`String.startsWith`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
