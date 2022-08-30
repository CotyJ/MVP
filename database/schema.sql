-- Creates database and adds tables needed

-- Run the below command in Postgres terminal to run this sql setup
-- \i /home/coty/Desktop/myCode/MVP/database/schema.sql

DROP DATABASE pfchardb;
CREATE DATABASE pfchardb;
\c pfchardb;

DROP TABLE characters;
DROP TABLE classes;
DROP TABLE ancestries;
DROP TABLE skills;
DROP TABLE feats;

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

 level INTEGER

--  photo text

);

-- ALTER TABLE characters ADD FOREIGN KEY (class) REFERENCES classes(id);
-- ALTER TABLE characters ADD FOREIGN KEY (ancestry) REFERENCES ancestries(id);

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
