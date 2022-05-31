DROP DATABASE IF EXISTS bud_dev;
CREATE DATABASE bud_dev;

\c bud_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL primary key,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email VARCHAR NOT NULL,
    phone_number VARCHAR NOT NULL
);

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    name TEXT NOT NULL,
    description TEXT,
    type TEXT,
    price INT,
    image TEXT,
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (user_id) 
);


