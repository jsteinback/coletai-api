const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'db-coletai'
});

module.exports = pool;