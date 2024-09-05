-- This ensures that SQLite enforces FOREIGN KEY constraints

.mode box

PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT
);

CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER REFERENCES bands(id) NOT NULL
);

CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musician_instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  musician_id INTEGER REFERENCES musicians(id) NOT NULL,
  instrument_id INTEGER REFERENCES instruments(id) NOT NULL
);


-- INSERT INTO bands (name) VALUES (5);

INSERT INTO bands (name)
VALUES ("Blink182");

INSERT INTO bands (name)
VALUES ("Joyce Manor");

-- INSERT INTO musicians (first_name, last_name)
-- VALUES ("Tom", "DeLonge");

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Tom", "DeLonge", 1);

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Mark", "Hoppus", 1);

INSERT INTO musicians (first_name, last_name, band_id)
VALUES ("Barry", "Johnson", 2);

INSERT INTO instruments (type)
VALUES ("Guitar");

INSERT INTO musician_instruments (musician_id, instrument_id)
VALUES (1, 1);

INSERT INTO musician_instruments (musician_id, instrument_id)
VALUES (2, 1);

SELECT * FROM bands;

SELECT * FROM musicians;

SELECT * FROM instruments;

SELECT * FROM musician_instruments;
