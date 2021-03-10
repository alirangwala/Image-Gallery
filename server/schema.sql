CREATE DATABASE imagelib;

\c imagelib ;

DROP TABLE IF EXISTS images CASCADE;

CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  image VARCHAR (255),
  tagged BOOLEAN DEFAULT false
);

INSERT INTO images (image) VALUES ('https://d2ebzu6go672f3.cloudfront.net/media/content/images/cr/ddca3f92-4b8e-4672-bb6b-f3594ad4e304.jpg');
INSERT INTO images (image) VALUES ('https://www.imaginghealthcare.com/wp-content/uploads/2020/06/x-ray.jpg');
INSERT INTO images (image) VALUES ('https://cdn-prod.medicalnewstoday.com/content/images/articles/219/219970/x-ray-skull-from-right-side.jpg');
