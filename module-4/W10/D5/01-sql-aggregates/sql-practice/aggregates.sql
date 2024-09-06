




SELECT COUNT()
FROM cats;




SELECT *, MIN(birth_year)
FROM cats;



SELECT *, MAX(birth_year)
FROM cats;


--  ! cant be done
-- SELECT name, MAX(birth_year), MIN(birth_year)
-- FROM cats;


-- SELECT
--     column_1,
--     aggregate_function(column_2)
-- FROM
--     table
-- JOIN albums ON albums.albumid = tracks.albumid
-- GROUP BY
--     column_1,
--     column_2;
-- HAVING
	-- search_condition;

SELECT
    cats.name,
    COUNT(toys.id) as num_toys
FROM toys
JOIN cats ON cats.id = toys.cat_id
GROUP BY cats.id
HAVING
  num_toys >= 2
