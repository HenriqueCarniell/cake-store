const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2006",
    database: "cakestore",
    port: 3306
});

module.exports = db;