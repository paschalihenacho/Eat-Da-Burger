const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableName, cb) => {
        const query = `SELECT * FROM ${tableName}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insert: (tableName, newBurgerName, cb) => {
        const query = `INSERT INTO ${tableName} (burger_name) VALUES ${newBurgerName}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    update: (tableName, burgerId, cb) => {
        const query = `UPDATE ${tableName} SET devoured = true  WHERE id = ${burgerId}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;