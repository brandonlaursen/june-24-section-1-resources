DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name VARCHAR(50),
   age_yrs NUMERIC(3,1),
   breed VARCHAR(100),
   weight_lbs INTEGER,
   microchipped BOOLEAN NOT NULL
);


INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
VALUES ('little bear', 17, 'pop', null, true);

select * from puppies
