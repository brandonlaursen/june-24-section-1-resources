# Sequelize, Practice Phase 3 - API Endpoints

In this phase, you will

* Implement an API endpoint to return all the entries in the `WarehouseItems`
  table
* Implement an API endpoint to edit an entry in the `WarehouseItems` table

## Getting started

1. Create a **.env** file at root-level of your project and copy the contents of
   the **.env.example** file into the newly created **.env** file.
2. Run `npm test` in the __phase-3__ directory to run all the Phase 3 test
   specs.
3. Run the migration and seed files.
4. Take a look at the migration and model files to familiarize yourself with the
   data of this application.

## Instructions

Given following API endpoint specifications, add the API endpoints to the
server in **app.js**.

### GET /items

Returns all the entries in the `WarehouseItems` table **that are new, not used**
(`isUsed` is `false`).

Request:

* Method: `GET`
* URL: `/items`
* Headers: none
* Body: none

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  [
    {
      "id": 1,
      "name": "Paint",
      "price": 12.12,
      "quantity": 12,
      "isUsed": false
    },
    {
      "id": 3,
      "name": "Webcam",
      "price": 50.5,
      "quantity": 5,
      "isUsed": false
    }
  ]
  ```

### PUT /items/:id

Update the entry in the `WarehouseItems` table that matches the `id` route
parameter.

Request:

* Method: `PUT`
* Example URL: `/items/2`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "name": "Pen",
    "price": 2.50,
    "quantity": 4,
    "isUsed": true
  }
  ```

Success Response:

* Status Code: `200`
* Headers:
  * Content-Type: application/json
* Example Body:

  ```json
  {
    "id": 2,
    "name": "Pen",
    "price": 2.50,
    "quantity": 4,
    "isUsed": true
  }
  ```

Error Response:

When the `id` route parameter could not be matched with any entry in the
`WarehouseItems` table.

* Status Code: `404`
* Headers:
  * Content-Type: application/json
* Body:

  ```json
  {
    "message": "Warehouse Item not found"
  }
  ```

## Resetting migration and model files

Feel free to make edits to the migration and model files. All edits you make to
the migration and model files, however, will be reset when you submit your
project. So make sure the test specs still pass even after those files are
reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

Run `npm test` in the __phase-3__ directory to make sure you pass all the tests.
