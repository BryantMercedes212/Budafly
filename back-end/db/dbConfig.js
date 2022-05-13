const pgp = require('pg-promise')();
require('dotenv').config();

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

const cn = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USER, 
}

const db = pgp(cn);

module.exports = db;