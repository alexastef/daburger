const orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM
const burger = {
    selectAll: async function() {
        let allBurgers = await orm.selectAll("burgers");
        console.log(allBurgers);
    },

    insertOne: async function(vals) {
       await orm.insertOne("burgers", "burger_name", vals, (res) => {
            console.log(res);
            console.log("success");
        });
    },

    updateOne: async function(vals) {
        // the vals for this need to be the id of the clicked button
        await orm.updateOne("burgers", "devoured", vals, (res) => {
            console.log(res);
        })
    }
}

module.exports = burger;