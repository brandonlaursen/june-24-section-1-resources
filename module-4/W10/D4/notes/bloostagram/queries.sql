
-- Demo 2
DELETE FROM albums
WHERE id = 4;


-- Demo 3
SELECT title, caption
FROM posts
WHERE image_id
BETWEEN 3
AND 9;

SELECT title, caption
FROM posts
WHERE image_id
IN (3,4,7,8,9);

SELECT title, caption, user_id
FROM posts
WHERE caption
LIKE "%bodacious%";

SELECT title, caption, user_id
FROM posts
WHERE image_id
BETWEEN 3
AND 9
ORDER BY user_id ASC, title DESC;

SELECT title, caption, id
FROM posts
LIMIT 4
OFFSET 0;

SELECT title, caption, id
FROM posts
LIMIT 4
OFFSET 4;

SELECT title, caption, id
FROM posts
LIMIT 4
OFFSET 8;

SELECT title, caption, id
FROM posts
LIMIT 4
OFFSET 12;

-- SELECT DISTINCT title
-- FROM posts;

-- SELECT DISTINCT image_id
-- FROM posts;

-- SELECT user_id % image_id
-- FROM posts;

-- SELECT caption AS temp, title AS apple
-- FROM posts;

-- SELECT caption, title
-- FROM posts;


-- Demo 4 one to many
SELECT posts.title, posts.caption, images.id, images.image_url
FROM posts
JOIN images
ON posts.image_id = images.id
WHERE image_id BETWEEN 3 AND 11;

SELECT users.username, posts.title, posts.caption, posts.image_id
FROM users
JOIN posts
ON posts.user_id = users.id
ORDER BY username;

--  Demo 5 many to many
SELECT username, posts.title, posts.caption, image_id, images.image_url
FROM users
JOIN posts
ON posts.user_id = users.id
JOIN images
ON posts.image_id = images.id
ORDER BY username;

SELECT albums.name, images.image_url
FROM albums
JOIN album_images
ON album_images.album_id = albums.id
JOIN images
ON album_images.image_id = images.id
ORDER BY albums.name;
