const mysql = require('mysql2')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: '',
    password: "2006",
    port: 3306
})

module.exports = db