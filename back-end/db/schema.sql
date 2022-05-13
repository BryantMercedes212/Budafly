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