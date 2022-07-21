const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"employees",
    password:"amitmishra",
    port: 5432,
});

module.exports = pool;