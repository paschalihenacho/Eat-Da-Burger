const orm = require("../config/orm");

function Burger(name) {
    this.name = name;
    this.devoured = false;
}

Burger.selectBurgers = function () {
    return new Promise((resolve, reject) => {
        orm.selectAll("burgers").then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not retrieve burgers");
        });
    });
};

Burger.create = function (burger) {
    return new Promise((resolve, reject) => {
        orm.insertOne("burgers", {
            burger_name: burger.name,
            devoured: burger.devoured
        }).then(results => {
            burger.id = results.insertId;
            resolve(burger.id);
        }).catch(() => {
            reject("Could not add burger");
        });
    });
};

Burger.updateDevoured = function (burgerId) {
    return new Promise((resolve, reject) => {
        orm.updateOne("burgers", "devoured", true, "id", burgerId).then(results => {
            resolve(results);
        }).catch(() => {
            reject("Could not update burger");
        });
    })
};


module.exports = Burger;