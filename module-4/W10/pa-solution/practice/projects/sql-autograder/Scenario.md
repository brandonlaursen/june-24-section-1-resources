# Scenario

You want to create a database to record the tools purchased by each customer in
your hardware store. Tools are categorized by its department (e.g., 'Plumbing')
and have a name and a price. You want to record the first name, last name, and
a phone number for each customer that purchases one or more tools. You also
want to record each purchase made by a customer, with each purchase specifying
which tools were purchased and the quantity of each tool purchased.

The hardware store currently has six tools (name, price, department):

* 'Snow shovel',     16.50, 'Home & Garden'
* 'Work light',      29.99, 'Electrical'
* 'Wheelbarrow',     89.99, 'Home & Garden'
* 'Pipe Wrench',     18.99, 'Plumbing'
* 'Pipe Cutter',     36.36, 'Plumbing'
* 'Rake',            15.45, 'Home & Garden'
* 'Women''s Gloves', 8.39,  'Home & Garden'
* 'Men''s Gloves',   8.39,  'Home & Garden'

The hardware store also has two customers (first name, last name, phone number):

* 'John', 'Smith', 111-111-1111
* 'Jane', 'Doe',   222-222-2222

There were three purchases made in the following order:

1. John Smith purchased the following tools (name, quantity):
   * 'Work light',      1
   * 'Pipe Cutter',     2
2. Jane Doe purchased the following tools (name, quantity):
   * 'Snow shovel',     3
   * 'Work light',      1
   * 'Women''s Gloves', 1
   * 'Pipe Wrench',     1
   * 'Pipe Cutter',     1
3. John Smith purchased the following tools (name, quantity):
   * 'Wheelbarrow',     3
   * 'Men''s Gloves',   2

## Events

You also want your database to be able to handle the following events:

1. You are taking inventory of all your tools and are searching for which
   purchase included tools with names starting with 'Pipe'. You want to know
   the name of the tool, price of the tool, and the quantity of the tool
   purchased in each purchase found. Order the results by the name of the tool
   alphabetically then by the quantity purchased (least to greatest).
2. You want to organize your store by the price of the tool. In one section, you
   want to display the name and price of tools in a price range between a
   minimum price of $14.67 and a maximum price of $20.09. You also want to order
   the results by the name of the tool alphabetically.
3. You need to contact the last customer who purchased a 'Pipe Cutter' tool.
   Find their first name, last name, and phone number.
4. A customer with the first name of 'John' and a last name of 'Smith' is
   demanding that you remove information about them from their system. Delete
   their contact information and all their purchases.
5. OPTIONAL: You are removing the label of the 'Plumbing' department by
   in your store because it seems like an unpopular section. You still want to
   keep the tools in that department but will leave the department for those
   tools blank because you are unsure of which department to sort it into still.
   * HINT: This is a **DEBUGGING** and **RESEARCH** task.

## Step 1: Design the Database Schema

Formulate a database schema to best represent the given scenario and events.

**Important Note**: You can structure and organize your database schema in any
way that you want. You can have any number of tables and columns, and table and
column names do not matter. However, there are certain schema configurations
that are more optimal for solving the problems in each event in the given
scenario.

Create the tables in the __sql-files/01-create-tables.js__. This file will be
run before every spec for the rest of this project. You can have **multiple**
SQL statements in this file.

Run the test specs in __test/01-create-tables-spec.js__ file by running:

```shell
npm test test/01-create-tables-spec.js
```

**Note**: This spec only checks if __sql-files/01-create-tables.js__ runs
without throwing an error. It does **NOT** test the correctness or efficiency of
your database schema.

## Step 2: Insert the Data

Insert the data for the given scenario and events in the
__sql-files/02-insert-data.js__. This file will be run before every spec for the
rest of this project. You can have **multiple** SQL statements in this file.

Run the test specs in __test/02-insert-data-spec.js__ by running:

```shell
npm test test/02-insert-data-spec.js
```

**Note**: Once again, this spec only checks if __sql-files/02-insert-data.js__
runs without throwing an error. It does **NOT** test whether or not you inserted
the data correctly.

## Step 3: Find the quantity of a tool purchased by tool name

Structure a SQL query for the **first event** mentioned above:

You are taking inventory of all your tools and are searching for which purchase
included tools with names starting with 'Pipe'. You want to know the name of the
tool, price of the tool, and the quantity of the tool purchased in each purchase
found. Order the results by the name of the tool alphabetically then by the
quantity purchased (least to greatest).

Write your SQL query in the
__sql-files/03-find-quantity-purchased-by-tool-name.js__. You can have **only
one** SQL statement in this file.

Test your query by running

```shell
npm test test/03-find-quantity-purchased-by-tool-name-spec.js
```

The test specs will create and populate the database using your files from Steps
1-2. Your SQL query will then be run against those tables.

The first test spec runs your actual query, expecting the following output for
all the tools that have names starting with `Pipe`:

|             |       |     |
| ----------- | ----- | --- |
| Pipe Cutter | 36.36 | 1   |
| Pipe Cutter | 36.36 | 2   |
| Pipe Wrench | 18.99 | 1   |

The second test spec checks whether or not you have truly formed the query
correctly by running your query with a different tool-name starter than `Pipe`. It will accordingly replace the `Pipe` in your query with `W`. It then runs your query again, checking for this
result:

|                |       |     |
| -------------- | ----- | --- |
| Wheelbarrow    | 89.99 | 3   |
| Women's Gloves | 8.39  | 1   |
| Work light     | 29.99 | 1   |
| Work light     | 29.99 | 1   |

**Important:** Your query only needs to solve the problem with the original
price range. The test specs will take care of transforming your query to check
the other cases. If you have formed the original query correctly, the subsequent
transformations should produce the correct results.

**TIP:** Check your 1) database schema, 2) create table statements, and 3)
insertion statements if you get stuck. Errors at any of these levels could cause
errors to manifest in this step.

**BONUS**: Use an aggregate to calculate the total quantity of each tool
purchased that starts with 'Pipe'. You should get the following output:

|             |       |     |
| ----------- | ----- | --- |
| Pipe Cutter | 36.36 | 3   |
| Pipe Wrench | 18.99 | 1   |

## Step 4: Find tools by price range

Structure a SQL query for the **second event**:

You want to organize your store by the price of the tool. In one section, you
want to display the name and price of tools in a price range between a
minimum price of $14.67 and a maximum price of $20.09. You also want to order
the results by the name of the tool alphabetically.

Write your SQL query in the __sql-files/04-find-tools-by-price.js__. You can
have **only one** SQL statement in this file.

Test your query by running

```shell
npm test test/04-find-tools-by-price-spec.js
```

The test specs will create and populate the database using your files from Steps
1-2. Your SQL query will then be run against those tables.

The first test spec runs your actual query, expecting the following output for all tools in the price range of $14.67 to $20.09:

|             |       |
| ----------- | ----- |
| Pipe Wrench | 18.99 |
| Rake        | 15.45 |
| Snow shovel | 16.5  |

The second test spec will replace the `14.67` and `20.09` in the file to adapt
the SQL query that you wrote to be adapted to any price range. It will replace
the original prices with `60` and `100` respectively. The second test spec
expects the SQL query to output the following tools' name and price for all
tools in the price range of $14.67 to $20.09:

|             |       |
| ----------- | ----- |
| Wheelbarrow | 89.99 |

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Step 5: Find a customer by tool purchased

Structure a SQL query for the **third event** in the
__sql-files/05-find-a-customer-by-tool-purchased.js__. You can have
**only one** SQL statement in this file.

Third event (repeat):

You need to contact the last customer who purchased a 'Pipe Cutter' tool.
Find their first name, last name, and phone number.

The test specs in the __test/05-find-a-customer-by-tool-purchased-spec.js__ file
will create the tables and insert the data from the first 2 steps. Then it will
run the SQL query.

The first test spec expects the SQL query to output the following customer's
first name, last name, and phone number for the last customer that purchased the
tool named 'Pipe Cutter':

|      |     |            |
| ---- | --- | ---------- |
| Jane | Doe | 2222222222 |

The second test spec will replace the 'Pipe Cutter' in the file to adapt the SQL
query that you wrote to be adapted to any tool name. It will replace the
original tool name with 'Wheelbarrow'. The second test spec expects the
following first name, last name, and phone number for the last customer that
purchased the tool named 'Wheelbarrow':

|      |       |            |
| ---- | ----- | ---------- |
| John | Smith | 1111111111 |

Use this to run the test specs for this query:

```shell
npm test test/05-find-a-customer-by-tool-purchased-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Step 6: Delete a customer by their name

Structure a SQL delete statement for the **fourth event** in the
__sql-files/06-delete-customer-by-name.js__. You can have **only one** SQL
statement in this file.

Fourth event (repeat):

A customer with the first name of 'John' and a last name of 'Smith' is
demanding that you remove information about them from their system. Delete
their contact information and all their purchases.

To test this delete statement, the test specs need to know what the state of
certain data is before and after the deletion. Structure two SQL queries to
provide the test specs with this data.

The first SQL query should be structured in the
__sql-files/06-find-all-customers.js__. to output the first name and last name
of all the customers. Order results by the last name then by first name.

The second SQL query should be structured in the
__sql-files/06-find-all-tools-purchased.js__. to output the name and quantity
of each tool purchased in all purchases. Order the results by the name of the
tool alphabetically then by the quantity purchased (least to greatest).

The test specs in the __test/06-delete-customer-by-name-spec.js__ file
will create the tables and insert the data from the first 2 steps. Then it will
run the SQL queries **before** running the delete statement and compare the
output with what is expected. It will then run the delete statement and will
check for any errors when running it. Finally, it will run the two SQL queries
again **after** running the delete statement to compare the output with what is
expected.

The first test spec expects the first SQL query, finding the first name and
last name of all the customers, to output the following:

|      |       |
| ---- | ----- |
| Jane | Doe   |
| John | Smith |

The second test spec expects the second SQL query, finding the name and quantity
of each tool purchased in all purchases:

|                |     |
| -------------- | --- |
| Men's Gloves   | 2   |
| Pipe Cutter    | 1   |
| Pipe Cutter    | 2   |
| Pipe Wrench    | 1   |
| Snow shovel    | 3   |
| Wheelbarrow    | 3   |
| Women's Gloves | 1   |
| Work light     | 1   |
| Work light     | 1   |

After the second test spec and before the third test spec, the delete statement
will be executed.

The third test spec expects the first SQL query, finding the first name and
last name of all the customers, to output the following:

|      |     |
| ---- | --- |
| Jane | Doe |

The fourth test spec expects the second SQL query, finding the name and quantity
of each tool purchased in all purchases:

|                |     |
| -------------- | --- |
| Pipe Cutter    | 1   |
| Pipe Wrench    | 1   |
| Snow shovel    | 3   |
| Women's Gloves | 1   |
| Work light     | 1   |

The remaining test specs will replace the 'John' and 'Smith' in the file to
adapt the SQL delete statement that you wrote to be adapted to any first name
and last name. It will replace the original first name and last name with 'Jane'
and 'Doe' respectively. The test specs will test the output of the SQL queries
**after** the adapted delete statement is run.

The fifth test spec expects the first SQL query, finding the first name and
last name of all the customers, to output the following:

|      |       |
| ---- | ----- |
| John | Smith |

The sixth test spec expects the second SQL query, finding the name and quantity
of each tool purchased in all purchases:

|              |     |
| ------------ | --- |
| Men's Gloves | 2   |
| Pipe Cutter  | 2   |
| Wheelbarrow  | 3   |
| Work light   | 1   |

Use this to run the test specs for the delete statement and associated queries:

```shell
npm test test/06-delete-customer-by-name-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.

## Bonus Step 7: Delete a department by its name

Structure a SQL delete statement for the **fifth event** in the
__sql-files/07-delete-department-by-name.js__. You can have **only one** SQL
statement in this file.

Fifth event (repeat):

You are removing the label of the 'Plumbing' department by
in your store because it seems like an unpopular section. You still want to
keep the tools in that department but will leave the department for those
tools blank because you are unsure of which department to sort it into still.

> HINT: This is a **DEBUGGING** and **RESEARCH** task. First, attempt to
> formulate and run the delete statement. Then, using the output, exercise your
> debugging and research skills to figure out a solution.

To test this delete statement, the test specs need to know what the state of
certain data is before and after the deletion. Structure two SQL queries to
provide the test specs with this data.

The first SQL query should be structured in the
__sql-files/07-find-all-departments.js__. to output the unique names of all the
departments. Order the results alphabetically by name.

The second SQL query should be structured in the
__sql-files/07-find-all-tools.js__. to output the name of all the tools.
Order the results alphabetically by name.

The test specs in the __test/07-delete-department-by-name-spec.js__ file
will create the tables and insert the data from the first 2 steps. Then it will
run the SQL queries **before** running the delete statement and compare the
output with what is expected. It will then run the delete statement and will
check for any errors when running it. Finally, it will run the two SQL queries
again **after** running the delete statement to compare the output with what is
expected.

The first test spec expects the first SQL query, finding the department name of
all the departments, to output the following:

|               |
| ------------- |
| Electrical    |
| Home & Garden |
| Plumbing      |

The second test spec expects the second SQL query, finding the name of all the
tools:

|                |
| -------------- |
| Men's Gloves   |
| Pipe Cutter    |
| Pipe Wrench    |
| Rake           |
| Snow shovel    |
| Wheelbarrow    |
| Women's Gloves |
| Work light     |

After the second test spec and before the third test spec, the delete statement
will be executed.

The third test spec expects the first SQL query, finding the department name of
all the departments, to output the following:

|               |
| ------------- |
| Electrical    |
| Home & Garden |

The fourth test spec expects the second SQL query, finding the name of all the
tools:

|                |
| -------------- |
| Men's Gloves   |
| Pipe Cutter    |
| Pipe Wrench    |
| Rake           |
| Snow shovel    |
| Wheelbarrow    |
| Women's Gloves |
| Work light     |

The remaining test specs will replace the 'Plumbing' in the file to adapt
the SQL delete statement that you wrote to be adapted to any department name.
It will replace the original department name with 'Home & Garden'. The test
specs will test the output of the SQL queries **after** the adapted delete
statement is run.

The fifth test spec expects the first SQL query, finding the department name of
all the departments, to output the following:

|            |
| ---------- |
| Electrical |
| Plumbing   |

The sixth test spec expects the second SQL query, finding the name of all the
tools:

|                |
| -------------- |
| Men's Gloves   |
| Pipe Cutter    |
| Pipe Wrench    |
| Rake           |
| Snow shovel    |
| Wheelbarrow    |
| Women's Gloves |
| Work light     |

Use this to run the test specs for the delete statement and associated queries:

```shell
npm test test/07-delete-department-by-name-spec.js
```

**TIP**: Check your database schema, create table statements, and insertion
statements if you get stuck. There may be an error in your database design or
any one of those files that could be causing errors in this step.
