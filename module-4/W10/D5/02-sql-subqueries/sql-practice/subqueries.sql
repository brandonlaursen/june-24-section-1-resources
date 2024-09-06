


SELECT * FROM cats;

SELECT * FROM toys;

-- SELECT trackid,
--        name,
--        albumid
-- FROM tracks
-- WHERE albumid = (
--    SELECT albumid
--    FROM albums
--    WHERE title = 'Let There Be Rock'
-- );

-- SELECT toys.name
-- FROM toys
-- JOIN cats
-- ON cats.id = toys.cat_id
-- WHERE cats.name = 'Garfield';




INSERT INTO toys (name, cat_id)
VALUES
  ("Pepperoni",
  (
  SELECT id
  FROM cats
  WHERE name = 'Garfield' OR name = 'Crookshanks'
  )
  );

-- SELECT toys.name
-- FROM toys
-- WHERE toys.cat_id = (
--   SELECT id
--   FROM cats
--   WHERE name = 'Garfield'
-- );

select * from toys;
select * from cats;
