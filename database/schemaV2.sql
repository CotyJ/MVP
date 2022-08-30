-- Creates database and adds tables needed

-- Run the below command in Postgres terminal to run this sql setup
-- \i /home/coty/Desktop/myCode/MVP/database/schemaV2.sql

-- DROP DATABASE pfchardb;
CREATE DATABASE pfchardb;
\c pfchardb;

-- DROP TABLE characters;
-- DROP TABLE classes;
-- DROP TABLE ancestries;
-- DROP TABLE skills;
-- DROP TABLE feats;

CREATE TABLE classes(
  id SERIAL PRIMARY KEY,
  name VARCHAR(15)
);

CREATE TABLE ancestries(
  id SERIAL PRIMARY KEY,
  name VARCHAR(15)
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  name VARCHAR(15)
);

CREATE TABLE feats(
  id SERIAL PRIMARY KEY,
  name VARCHAR(25)
);

-- Characters should be created last since it has all of the foreign keys
CREATE TABLE characters(
 id SERIAL PRIMARY KEY,
 name VARCHAR(50),

--  pull class from classes with class id
  -- for now text
--  class INTEGER,
  class VARCHAR(20),

 -- pull ancestry from ancestries with ancestry id
  -- for now text
--  ancestry INTEGER,
  ancestry VARCHAR(20),

--  skills is an array, how to incorporate?

--  level INTEGER check(level >=1 and level <= 20)

--  photo text

);

-- ALTER TABLE characters ADD FOREIGN KEY (class) REFERENCES classes(id);
-- ALTER TABLE characters ADD FOREIGN KEY (ancestry) REFERENCES ancestries(id);


-- Main OLD
-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Kaiper', 'Summoner', 'Kitsune', 3);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Gar', 'Druid', 'Anadi', 3);



-- Main NEW WITHOUT PHOTOS
INSERT INTO characters(name, class, ancestry, level)
VALUES('Aragorn', 'Ranger', 'Human', 12);

INSERT INTO characters(name, class, ancestry, level)
VALUES('Elrond', 'Paladin', 'Elf', 19);

INSERT INTO characters(name, class, ancestry, level)
VALUES('Legolas', 'Archer', 'Elf', 11);

INSERT INTO characters(name, class, ancestry, level)
VALUES('Gimli', 'Fighter', 'Dwarf', 11);

INSERT INTO characters(name, class, ancestry, level)
VALUES('Boromir', 'Fighter', 'Death', 10);

INSERT INTO characters(name, class, ancestry, level)
VALUES('Gandalf', 'Wizard', 'Maia', 20);

-- Fillers
-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Saitama', 'Puncher', 'Baldy', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Edward', 'Alchemist', 'Cyborg', 14);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Simon', 'Digger', 'Spiral', 12);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Tohru', 'Maid', 'DragonMaid', 18);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Winry', 'Engineer', 'Waifu', 18);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Shuna', 'Slime', 'Waifu', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Bulma', 'QueenOfEarth', 'Human', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Hinata', 'Kunoichi', 'Hyuga', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Ryuko', 'Tailor', 'Human', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Katara', 'Waterbender', 'Human', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Toph', 'BlindBandit', 'Human', 1);

-- INSERT INTO characters(name, class, ancestry, level)
-- VALUES('Ty Lee', 'Assassin', 'Human', 1);







-- Main NEW WITH PHOTOS
-- Try to insert some characters with photos. See if it breaks anything
-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Aragorn', 'Ranger', 'Human', 12,
-- "https://i.kinja-img.com/gawker-media/image/upload/q_75,w_1600,h_903/b9a0649afb0e468425c5b5c6b3369d4e.JPG"
-- );

-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Elrond', 'Paladin', 'Elf', 19,
-- "https://i.pinimg.com/originals/f7/3a/c3/f73ac39e0d35b0656b1b373f1e1451b5.jpg"
-- );

-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Legolas', 'Archer', 'Elf', 11,
-- "https://i.pinimg.com/736x/5a/e2/fe/5ae2feca2642aa2b47209763b3fe6e58.jpg"
-- );

-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Gimli', 'Fighter', 'Dwarf', 11,
-- "https://i.pinimg.com/originals/55/65/08/55650830838fe28ec5900478647bbb29.jpg"
-- );

-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Boromir', 'Fighter', 'Death', 10,
-- "https://www.meme-arsenal.com/memes/0cd0a2b4d8654fa334928ee31089bfd9.jpg"
-- );

-- INSERT INTO characters(name, class, ancestry, level, photo)
-- VALUES('Gandalf', 'Wizard', 'Maia', 20,
-- "https://64.media.tumblr.com/f0ac3c909753e61c8bf0aeab5a0eca2c/7249468a12cac1eb-9a/s400x600/b850eaecbdd6b7610640fa178512e083b162a1ea.png"
-- );