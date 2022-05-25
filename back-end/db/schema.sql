DROP DATABASE IF EXISTS bud_dev;
CREATE DATABASE bud_dev;

\c bud_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT,
    price INT,
    image TEXT,
    seller_id INT REFERENCES stores (user_id) ON DELETE CASCADE
);

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     firstname TEXT NOT NULL,
--     lastname TEXT NOT NULL,
-- );

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL primary key,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    phone_number VARCHAR UNIQUE NOT NULL
);