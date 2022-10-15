-- Active: 1663692446653@@127.0.0.1@5432@postgres@public
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL
);