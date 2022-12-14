DROP DATABASE IF EXISTS bud_dev;
CREATE DATABASE bud_dev;

\c bud_dev;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL primary key,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
   password TEXT NOT NULL
);

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    name TEXT NOT NULL,
    cannabinoid VARCHAR,
    type TEXT,
    description TEXT,
    feelings VARCHAR,
    negatives VARCHAR,
    price INT,
    image TEXT,
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (user_id) 
);

DROP TABLE IF EXISTS coupons;

CREATE TABLE coupons(
    used BOOLEAN DEFAULT FALSE,
    coupon TEXT,
    percentage SERIAL
); 

DROP TABLE IF EXISTS scores;

CREATE TABLE scores(
    id SERIAL primary key,
    score INT
);