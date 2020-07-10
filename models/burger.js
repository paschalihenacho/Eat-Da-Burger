const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insert: (cb) => {
        orm.insert("burgers", (res) => {
            cb(res)
        });
    },
    update: (cb) => {
        orm.update("burgers", (res) => {
            cb(res);
        })
    }
};

module.exports = burger;