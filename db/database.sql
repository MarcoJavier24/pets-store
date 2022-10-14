CREATE DATABASE IF NOT EXISTS petsdb;

USE petsdb;

CREATE TABLE pet(
    id INT(64) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    tag VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pet VALUES 
    (1, 'Nacho', 'Marco 497-343-3114'),
    (2, 'Dinga', 'lalo 497-223-5134'),
    (3, 'Sunny', 'Majo 497-343-4671'),
    (4, 'Pandy', 'Minne 497-343-6723');

SELECT * FROM pet;

SELECT * FROM pet WHERE id = ?;