# JSON API Endpoints

In this part of the assessment, you will document the request and response
components for **API routes** of a server. This will test your understanding of

- RESTful endpoints of a JSON API server
- Formulating a request to a JSON API server
- Testing endpoints of a JSON API server using Postman, `fetch`, or the browser
- Reading the response components from a request

Each test spec in this project is worth **1 point** for a total of **14
points.**

## Objective

Your objective is to document the request and response components for each
endpoint of the server in the __answers.json__ file so that all tests pass when
you run `npm test`. **All the endpoints are RESTful endpoints for a JSON API
server.**

**READ THE ENTIRE INSTRUCTIONS BEFORE WRITING ANY DOCUMENTATION IN THE FILE.**
The instructions differ depending on the type of server, so please **read
carefully.**

## Setup

`cd` into the __json-api-server__ directory.

To **start the server,** run `npm start`. This will allow you to make requests
to [http://localhost:5000] using any client (browser or Postman).

To stop the server from listening to requests, press `<CTRL> + c` in the
terminal that you started the server (i.e., wherever you ran `npm start`).

To **reset the server data,** simply restart the server.

## Resources

Below is a list of all the **resources** for this server.

- colors:
  - colorId: unique identifier for a color
  - color: the name of the color

## Documentation

The documentation for this server should be written in the __answers.json__ file
provided to you. For each endpoint listed below, list out the request and
response components in the __answers.json__ file.

### Headers formatting

**Include only necessary headers.**

To add a header as a component to the request or response, define the key and
value of a header in a JSON object set to the `headers` key on the `request`
or `response` object.

Here's an example:

```json
"headers": {
  "Content-Type": "application/json"
}
```

### Request/Response body formatting

To add a `body` as a component to the request, define the data structure of the
`body` (object, array, nested object, or nested array). The values for objects
in the `body` must be a truthy values.

Here's an example:

```json
"body": {
  "color": true,
  "toolbox": [
    {
      "tool": true
    }
  ]
}
```

### Removing a component

To omit a component from the request or response, set the key of that request
or response component to `false`.

For example, to omit the `headers` of the request, change the `headers` key from
`null` to `false`.

```json
"headers": false,
```

To omit the `body` of the request, change the `body` key from `null` to `false`.

```json
"body": false
```

## Endpoints

Fill out the request and response components for the following endpoints in the
`answers.json` file provided. The command to run the test specs for each
endpoint is also given.

1. Get all the colors
   - `npm run test-01`
2. Add a color
   - `npm run test-02`

To run all the test specs for all the endpoints, run `npm test`.

[http://localhost:5000]: http://localhost:5000
