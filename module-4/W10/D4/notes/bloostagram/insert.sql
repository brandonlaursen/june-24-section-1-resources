INSERT INTO users (username, email, user_password, created_at, updated_at)
VALUES ("shanew", "shane@wilkey.com", "supersecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ("brirob", "bri@robinson.com", "verysecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ("b-rad","brad@simpson.com", "bradhasasecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ("brando","brandon@laursen.com", "brandohasasecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       ("maicas","maica@santos.com", "maicahasasecretpassword", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO images (image_url)
VALUES ("www.image-url.com/images/1"),
       ("www.image-url.com/images/2"),
       ("www.image-url.com/images/3"),
       ("www.image-url.com/images/4"),
       ("www.image-url.com/images/5"),
       ("www.image-url.com/images/6"),
       ("www.image-url.com/images/7"),
       ("www.image-url.com/images/8"),
       ("www.image-url.com/images/9"),
       ("www.image-url.com/images/10"),
       ("www.image-url.com/images/11"),
       ("www.image-url.com/images/12"),
       ("www.image-url.com/images/13");

INSERT INTO posts (user_id, image_id, caption, title, created_at, updated_at)
VALUES (1, 1, "This is a caption!", "New Post", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 2, "Another fanciful caption!", "Great Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 3, "Another wonderful caption!", "Sweet Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 4, "Another spectacular caption!", "Ok Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 5, "Another bodacious caption!", "Whatever Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 6, "Another cool caption!", "Words Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 7, "Just some text!", "Blank Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 8, "Another tubular caption!", "Some Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 9, "Another radical caption!", "Another Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 10, "Another astounding caption!", "Yet Another Title", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 11, "Another stellar caption!", "Testing", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 12, "Another great caption!", "Greetings", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 13, "Another bountiful caption!", "Hello World", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO comments (user_id, post_id, body, created_at, updated_at)
VALUES (2, 1, "This is great", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 5, "This is nice", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 10, "Cool Pic", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 5, "How is this possible?", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO likes (user_id, post_id, created_at, updated_at)
VALUES (1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (2, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
       (1, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO albums (user_id, name)
VALUES (1, 'album 1'),
       (1, 'album 2'),
       (1, 'album 3'),
       (2, 'album 4'),
       (2, 'album 5'),
       (2, 'album 6');

INSERT INTO album_images (album_id, image_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 4),
       (2, 5),
       (2, 6),
       (3, 6),
       (3, 7),
       (3, 8),
       (4, 1),
       (4, 13),
       (4, 10),
       (5, 9),
       (5, 11),
       (5, 12),
       (6, 8),
       (6, 10),
       (6, 13);
