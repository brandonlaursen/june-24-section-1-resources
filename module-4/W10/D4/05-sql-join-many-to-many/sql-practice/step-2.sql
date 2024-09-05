-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Your code here


SELECT musicians.first_name
FROM musicians
JOIN musician_instruments
ON musicians.id = musician_instruments.musician_id

JOIN instruments
ON musician_instruments.instrument_id = instruments.id



SELECT musicians.first_name
FROM musicians
JOIN instruments
ON instruments.id =  musician_instruments.instrument_id
JOIN musician_instruments
ON musicians.id = musician_instruments.musician_id
