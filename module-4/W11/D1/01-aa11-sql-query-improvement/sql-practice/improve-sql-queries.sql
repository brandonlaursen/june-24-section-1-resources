----------
-- Step 0 - Create a Query
----------
-- Query: Select all cats that have a toy with an id of 5


-- SELECT * FROM cats
-- JOIN cat_toys
-- ON cats.id = cat_toys.cat_id
-- JOIN toys
-- ON toys.id = cat_toys.toy_id
-- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

-- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
-- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
-- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7


----------
-- Step 1 - Analyze the Query
----------
-- Query:
-- SELECT "before creating index";
-- EXPLAIN QUERY PLAN
-- SELECT * FROM cats
-- JOIN cat_toys
-- ON cats.id = cat_toys.cat_id
-- JOIN toys
-- ON toys.id = cat_toys.toy_id
-- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SCAN cat_toys
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?
    -- search - O(log n) - binary search
    -- scan - O(n) - checking all records
    -- search toys and cat
    -- scan for cat_toys


    -- What does that mean?
    -- primary key on cats and toys were what is used to search for them
    -- but we visited every single row in the cat_toys join table
    -- we could apply an index to cat_join table


----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

-- SELECT "----------------";
-- SELECT * FROM cats
-- JOIN cat_toys
-- ON cats.id = cat_toys.cat_id
-- JOIN toys
-- ON toys.id = cat_toys.toy_id
-- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- │ 4002 │ Rachele │ Maroon   │ Foldex Cat │ 4509  │ 4002   │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7     │
-- │ 31   │ Rodger  │ Lavender │ Oregon Rex │ 10008 │ 31     │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7     │
-- │ 77   │ Jamal   │ Orange   │ Sam Sawet  │ 10051 │ 77     │ 5      │ 5  │ Shiny Mouse │ Blue  │ 7
-- Run Time: real 0.002 user 0.000800 sys 0.000485
-- Run Time: real 0.003 user 0.000733 sys 0.000377
-- Run Time: real 0.002 user 0.000725 sys 0.000245

----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

-- CREATE INDEX idx_name ON tabe_nm
-- CREATE INDEX cat_toys_join_id ON cat_toys(toy_id);
-- DROP INDEX cat_toys_join_id


-- Analyze Query:
-- SELECT "after creating index";
-- -- EXPLAIN QUERY PLAN
-- SELECT * FROM cats
-- JOIN cat_toys
-- ON cats.id = cat_toys.cat_id
-- JOIN toys
-- ON toys.id = cat_toys.toy_id
-- WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- QUERY PLAN
-- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- |--SEARCH cat_toys USING INDEX cat_toys_join_id (toy_id=?)
-- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- Run Time: real 0.000 user 0.000047 sys 0.000024

-- Analyze Results:

    -- Is the new index being applied in this query?
    -- yes! we see  INDEX cat_toys_join_id


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

EXPLAIN QUERY PLAN
SELECT * FROM cats
JOIN cat_toys
ON cats.id = cat_toys.cat_id
JOIN toys
ON toys.id = cat_toys.toy_id
WHERE cat_toys.toy_id = 5;


SELECT * FROM cats
JOIN cat_toys
ON cats.id = cat_toys.cat_id
JOIN toys
ON toys.id = cat_toys.toy_id
WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):
-- Run Time: real 0.002 user 0.000135 sys 0.000279
-- Run Time: real 0.002 user 0.000132 sys 0.000265
-- Run Time: real 0.000 user 0.000234 sys 0.000235

-- Analyze Results:
    -- Are you still getting the correct query results?
    -- yes

    -- Did the execution time improve (decrease)?
    --  ehh maybe

    -- Do you see any other opportunities for making this query more efficient?
    -- 



---------------------------------
-- Notes From Further Exploration
---------------------------------
