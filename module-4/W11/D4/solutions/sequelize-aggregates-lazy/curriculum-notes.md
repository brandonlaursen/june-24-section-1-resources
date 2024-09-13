# Curriculum Notes

## Bonus Step Notes

Here's the SQL way to confirm the numbers calculated are correct:

### `catCount`

Find count of all cats associated with the toy with an id of `5`:

```sql
SELECT COUNT(DISTINCT 'Cats'.id) AS 'catCount'
FROM 'Toys'
JOIN 'CatToys' ON 'Toys'.id = 'CatToys'.toyId
JOIN 'Cats' ON 'Cats'.id = 'CatToys'.catId
WHERE 'Toys'.id = 5
GROUP BY 'Toys'.id;
```

Should equal `3`.

### `orangeCatCount`

Find count of all orange cats associated with the toy with an id of `5`:

```sql
SELECT COUNT(DISTINCT 'Cats'.id) AS 'orangeCatCount'
FROM 'Toys'
JOIN 'CatToys' ON 'Toys'.id = 'CatToys'.toyId
JOIN 'Cats' ON 'Cats'.id = 'CatToys'.catId
WHERE 'Toys'.id = 5 AND 'Cats'.color = 'Orange'
GROUP BY 'Toys'.id;
```

Should equal `2`

### `orangeCatPercentage`

Find percentage of all orange cats associated with the toy with an id of `1`:

```sql
SELECT CAST ((
  SELECT COUNT(DISTINCT 'Cats'.id) AS 'orangeCatCount'
  FROM 'Toys'
  JOIN 'CatToys' ON 'Toys'.id = 'CatToys'.toyId
  JOIN 'Cats' ON 'Cats'.id = 'CatToys'.catId
  WHERE 'Toys'.id = 5 AND 'Cats'.color = 'Orange'
  GROUP BY 'Toys'.id
) AS FLOAT) / (
  SELECT COUNT(DISTINCT 'Cats'.id) AS 'catCount'
  FROM 'Toys'
  JOIN 'CatToys' ON 'Toys'.id = 'CatToys'.toyId
  JOIN 'Cats' ON 'Cats'.id = 'CatToys'.catId
  WHERE 'Toys'.id = 5
  GROUP BY 'Toys'.id
  LIMIT 1
) * 100 AS 'orangeCatPercentage';
```

Should equal `66.66667`(%).
