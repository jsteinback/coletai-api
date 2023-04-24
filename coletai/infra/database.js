const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'steinback',
    host: 'localhost',
    port: 5432,
    database: 'db-coletai'
});

module.exports = db;