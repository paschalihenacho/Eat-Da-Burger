CREATE DATABASE eat_Da_burgers_db;
USE eat_Da_burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);