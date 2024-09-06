<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 10` `W10D5`


---

# Aggregate Functions and ~~Sub-Queries~~
## Week 10 Day 5

---

## Review from yesterday...
- Relationships (its complicated!)
    1. 1 to 1 (very rare)
    2. 1 to Many (most common)
    3. Many to Many
- Foreign Keys
- Cascade vs Set Null
- Intermediate Queries
    - 1. BETWEEN/IN
    - 2. LIKE
    - 3. ORDER BY
    - 4. LIMIT/OFFSET
    - 5. DISTINCT
    - 6. AS
- JOIN (it gets its own bullet)

---


# AVG

- Find the avg value of a col

```sql
SELECT AVG(column_name)
FROM table_name;
```

---

# COUNT

- Counts the number of entries in table
- COUNT is different. We can just pass "*" into the () since it doesn't matter which column it uses.

```sql
SELECT COUNT(*)
FROM table_name;
```

---

# MIN/MAX

- Find the min/max value of a col

```sql
SELECT MIN(column_name)
FROM table_name
```

```sql
SELECT MAX(column_name)
FROM table_name
```

---

# SUM

- Add up all the values in a col
- If all the values are null, returns null

```sql
SELECT SUM(column_name)
FROM table_name
```

---

# TOTAL

- Add up all the values in a col
- Always returns a floating point value 
- If all the values are null, returns 0.0

```sql
SELECT TOTAL(column_name)
FROM table_name
```

---

## Where are the aggregate functions placed?
Inside of the SELECT statement!
These aggregate functions are treated like normal functions, so we invoke them with ()
`SELECT <function>(<column>) FROM <table>;`

---

## Notes

💡 When we run an aggregate function, we do not get all the information from that table, only the aggregate data 💡

If you put other column names with the aggregate function in the SELECT, it will only return the first instance
```sql
SELECT COUNT(likes) ...
```

![image](https://hackmd.io/_uploads/HJGIVJ-C6.png)


---

## Notes

We can add a WHERE clause to these functions to filter which data is applied in the aggregate.

```sql
SELECT MIN(column_name)
FROM table_name
WHERE some_criteria = some_other_criteria
```

---

## Notes

We can add GROUP BY to the function to have that aggregate happen on specific groups of data

```sql
SELECT MIN(column_name)
FROM table_name
WHERE some_criteria = some_other_criteria
GROUP BY <column name>
```
This is the only way to return multiple things from an aggregate function
It will return a single instance per group

---

## Notes

We can add HAVING to a function that we have a GROUP BY on
This acts like a WHERE clause, but for the groups that were created
i.e.

```sql
SELECT MIN(column_name)
FROM table_name
WHERE some_criteria = some_other_criteria
GROUP BY <column name>
HAVING AVG(length) > 60
```

---

# 🤯🤯🤯🤯🤯🤯
GROUP BY and HAVING are a little more complicated than we expect the you to use, but they are good to know.

---

Keywords in the order that should/could be applied in a query:

SELECT
FROM
JOIN
ON
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
OFFSET


---

## Brad stop here, please no subqueries...



---

## Breakout for study and PA
Let's get building y'all!

<div style="display: flex; justify-content: center">
  <img style="max-height: 400px;" src="https://hackmd.io/_uploads/BkUJ_ybRT.png" />
</div>


---


## Turn back!  the road ahead is perilous...

## Subqueries

- Kind of like helper functions in SQL
- Can generally be used to replace JOIN ON
- Can also be used to get info across multiple - tables if they don't have a relationship
- Subqueries can be used in any SQL context

---

# ❓❔❓❔❓❔
When writing a subquery, we should ask 2 questions before starting:
1. What information do I have?
2. What information am I looking for?

The purpose of the subquery is to return some information that the outer query can use

---

This works for when our subquery returns just 1 record:

```sql
SELECT * FROM <table>
WHERE <FK column> = (
    SELECT id FROM <other table>
    WHERE <column> = <value>
)
```

---

We can change the SQL operator to handle our subquery returning multiple records

Using the IN operator is the easiest way to do this

```sql
SELECT * FROM <table>
WHERE <column> IN (
    SELECT * FROM <other table>
    WHERE <column> = <value>
)
```

---

## Breakout for study and PA
Let's get building y'all!

<div style="display: flex; justify-content: center">
  <img style="max-height: 400px;" src="https://hackmd.io/_uploads/BkUJ_ybRT.png" />
</div>

