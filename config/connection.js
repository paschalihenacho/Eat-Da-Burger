const mysql = require("mysql2");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        database: "eat_Da_burgers_db",
        user: "root",
        port: 3306,
        password: "rootroot"
    });
}

module.exports = connection;