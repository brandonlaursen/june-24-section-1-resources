
.mode box

PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id) ON DELETE CASCADE
);
-- ON DELETE CASCADE
-- ON DELETE SET NULL
INSERT INTO bands
VALUES (1, 'The Falling Box'),
  (2, 'America The Piano'),
  (3, 'Loved Autumn'),
  (4, 'Playin Sound'),
  (5, 'The King River');
INSERT INTO musicians
VALUES (1, 'Adam', 'Appleby', 1),
  (2, 'Anton', 'Martinovic', 1),
  (3, 'Wilson', 'Holt', 1),
  (4, 'Marine', 'Sweet', 2),
  (5, 'Georgette', 'Kubo', 2),
  (6, 'Aurora', 'Hase', 3),
  (7, 'Trenton', 'Lesley', 4),
  (8, 'Camila', 'Nenci', 4),
  (9, 'Rosemarie', 'Affini', 5),
  (10, 'Victoria', 'Cremonesi', 5);


-- SELECT * FROM musicians;
-- SELECT * FROM bands;

-- DELETE FROM bands
-- WHERE id = 1;

-- SELECT * FROM musicians;
-- SELECT * FROM bands;

SELECT * FROM bands WHERE id >= 3;

SELECT * FROM bands WHERE id BETWEEN 1 AND 3;

SELECT * FROM musicians WHERE id IN (1,2,3);

SELECT * FROM musicians
ORDER BY id DESC
LIMIT 5
OFFSET 2
