DROP DATABASE IF EXISTS bud_dev;
CREATE DATABASE bud_dev;

\c bud_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price INT,
    image TEXT
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    product_id INTEGER REFERENCES products(id)
);