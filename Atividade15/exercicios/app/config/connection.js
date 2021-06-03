const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root12345678',
    database: 'site_fatec',
});

module.exports = () => connection;