-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
-- Your code here
-- .mode box


-- SELECT * FROM bands;
-- SELECT * FROM albums;




SELECT bands.name, albums.title
FROM bands
JOIN albums
ON albums.band_id = bands.id;
