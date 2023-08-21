-- Active: 1684178622576@@127.0.0.1@3306@workplus
CREATE DATABASE WorkPlus
    DEFAULT CHARACTER SET = "utf8mb4";

DROP DATABASE if EXISTS WorkPlus;

CREATE USER "WorkPlus"@"localhost" IDENTIFIED BY "WorkPlus";

GRANT ALL PRIVILEGES ON WorkPlus.* TO "WorkPlus"@"localhost";
