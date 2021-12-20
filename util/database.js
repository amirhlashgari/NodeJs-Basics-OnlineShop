const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'amirhosein',
    database: 'node_tutorial',
    password: 'amirhosein'
});

module.exports = pool.promise();