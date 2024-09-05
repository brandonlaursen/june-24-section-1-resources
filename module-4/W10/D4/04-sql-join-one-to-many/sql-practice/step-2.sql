-- Step 2
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
-- Your code here




SELECT bands.name
FROM albums
JOIN bands
ON albums.band_id = bands.id
WHERE num_sold < 20000;
