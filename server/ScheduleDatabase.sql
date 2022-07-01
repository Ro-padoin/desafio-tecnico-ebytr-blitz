DROP DATABASE IF EXISTS ScheduleDatabase;

CREATE DATABASE ScheduleDatabase;

USE ScheduleDatabase;

CREATE TABLE
    users (
        id INT NOT NULL auto_increment,
        username VARCHAR(30) NOT NULL,
        password VARCHAR(15) NOT NULL,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;

CREATE TABLE
    tasks (
        id INT NOT NULL auto_increment,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(id)
    ) ENGINE = INNODB;