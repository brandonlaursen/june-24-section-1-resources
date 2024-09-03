# Practice: Updating and Deleting Singular Records with Sequelize

In this short practice, you will be using **Sequelize** models to update and
delete records in a database.

## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice.

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the results in the terminal to confirm that setup was successful in creating the following `Puppies` table in your database:

| `id` | `name`   | `ageYrs` | `breed`             | `weightLbs` | `microchipped` |
| ---- | -------- | -------- | ------------------- | ----------- | -------------- |
| 1    | Cooper   | 1        | Miniature Schnauzer | 18          | true           |
| 2    | Indie    | 0.5      | Yorkshire Terrier   | 13          | true           |
| 3    | Kota     | 0.7      | Australian Shepherd | 26          | false          |
| 4    | Zoe      | 0.8      | Korean Jindo        | 32          | true           |
| 5    | Charley  | 1.5      | Basset Hound        | 25          | false          |
| 6    | Ladybird | 0.6      | Labradoodle         | 20          | true           |
| 7    | Callie   | 0.9      | Corgi               | 16          | false          |
| 8    | Jaxson   | 0.4      | Beagle              | 19          | true           |
| 9    | Leinni   | 1        | Miniature Schnauzer | 25          | true           |
| 10   | Max      | 1.6      | German Shepherd     | 65          | false          |

`cd` into the __server__ folder.

Start the development server with `npm run dev` and navigate to `/puppies` to
ensure that application has been initialized correctly. You should see all ten
puppies from the seeder file displayed in the browser.

In this practice you will be utilizing the **Sequelize** `Puppy` model to update
and delete records in the `Puppies` table of the database. Each step will have
you implement either a `PUT` or `DELETE` route in __app.js__, combining your
**Express** and **Sequelize** knowledge.

## Step 1: Update a puppy by id

You would like to be able to send a request to your server that specifies the
attributes to update of a specific puppy. This route will be useful when
updating your database to change a puppy's weight, age, or microchipped status.

In order to indicate which puppy to update, the endpoint that you are working
with captures a `puppyId` route parameter. The body of your request will
contain each attribute that should be updated.

To update a record, you will need to:

* Get a reference to the instance of the **Sequelize** model to be updated
* Assign the attributes that will be changed
* Save the updated instance to the database

Using the `puppyId` route parameter, capture a reference to a specific instance
of the `Puppy` model.

The endpoint should only permit changes to the `ageYrs`, `weightLbs`, and
`microchipped` attributes. If they exist on the body of the request, assign the
instance's attributes to the new values. Each of these keys are optional, and no
other key on the request should impact your database.

Remember to save the updated instance to the database and send back a response.
The response should be in JSON format with a `message` key indicating that the
puppy was successfully updated as well as a `puppy` key pointing to the updated
record.

To test your route, you would like to update `Callie's` age from `0.9` to `1.5`
and her weight from `16` to `26` after her most recent visit to the vet. Use
Postman to make a `PUT` request to `/puppies/7`. Remember that if you have
reseeded your database your `id` may no longer be `7`, so double-check that you
are referencing `Callie`. The body of your request should include the attributes
that you wish to update:

```json
{
  "ageYrs": 1.5,
  "weightLbs": 26
}
```

The response that you receive from your server should look similar to the
following:

```json
{
    "message": "Successfully updated puppy with id 7.",
    "puppy": {
        "id": 7,
        "name": "Callie",
        "ageYrs": 1.5,
        "breed": "Corgi",
        "weightLbs": 26,
        "microchipped": false,
        "createdAt": "2021-10-20T17:42:17.000Z",
        "updatedAt": "2021-10-20T19:43:09.307Z"
    }
}
```

Try adding in attributes to your request that have not been explicitly
extracted from the body of the request like `name` or `id`. You should
see that the permitted attributes of `ageYrs` and `weightLbs` are
updated while the rest do not affect your database:

```json
{
  "ageYrs": 1.6,
  "weightLbs": 28,
  "name": "Princess",
  "id": 10
}
```

The response that you receive from your server should look similar to the
following:

```json
{
    "puppy": {
        "id": 7,
        "name": "Callie",
        "ageYrs": 1.6,
        "breed": "Corgi",
        "weightLbs": 28,
        "microchipped": false,
        "createdAt": "2021-10-20T17:42:17.000Z",
        "updatedAt": "2021-10-20T19:45:14.607Z"
    }
}
```

Remember to test your code by running `npm test` in the __server__ directory.
You can run one test file at a time by running:

* `npm test test/01-test-update.js` in the __server__ directory

## Step 2: Delete a puppy by id

You would like to implement a way to remove a record for a puppy from your
database. Similar to the `PUT` endpoint, the `DELETE` route handler for
`/puppies/:puppyId` should be able to delete the record for the puppy specified
in the request's `puppyId` route parameter.

Using the `puppyId` route parameter, capture a reference to a specific instance
of the `Puppy` model.

Use the appropriate method on the instance to delete the record.

Respond to the request in JSON format with `message` key indicating that the
puppy with the specified id has been deleted. Include a `puppy` key as well with
the deleted record's data.

To test your route, you would like to remove the record for `Cooper` from your
database. Use Postman to make a `DELETE` request to `/puppies/1`. Remember that
if you have reseeded your database your `id` may no longer be `1`, so
double-check that you are referencing `Cooper`. You should receive a successful
response within Postman. Check that `Cooper` is no longer in the database either
through your index route of `/puppies` or through `sqlite3` directly.

> Remember that you can unseed and reseed your database if you lose or alter any
> records unintentionally.

Remember to test your code by running `npm test` in the __server__ directory.
You can run one test file at a time by running:

* `npm test test/01-test-update.js` in the __server__ directory
* `npm test test/02-test-delete.js` in the __server__ directory

## Congratulations!

You are now able to use **Sequelize** models to update and delete data from a
database.

## Submission

Submit your work.

1. Delete the `node_modules` folder in the __server__ directory
2. Zip up the project folder
3. Submit the zip file
