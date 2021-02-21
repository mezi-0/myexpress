const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'netuser',
    password: 'netpass',
    database: 'ex6_tietokanta'
});

module.exports = connection;