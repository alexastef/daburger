const orm = require("../config/orm.js");

// code that will call the ORM functions using burger specific input for the ORM
const burger = {
    selectAllBurgers: async function(cb) {

        // Select all from burgers table
        let allBurgers = await orm.selectAll("burgers", (res)=> {
           cb(res)
        });

        console.log("INSIDE BURGER MODEL, selectALL fct: \n", allBurgers);
    },

    // Insert new burger name into burgers table
    insertBurger: async function(vals, cb) {
       await orm.insertOne("burgers", "burger_name", vals, (res) => {
            cb(res);
        });

        console.log("success --- INSERTED BURGER");
    },

    // Update devoured in the burgers table where id = clicked id
    updateBurger: async function(vals, cb) {
        await orm.updateOne("burgers", "devoured", vals, (res) => {
            cb(res);
        });

        console.log("IN BURGER --- UPDATE SUCCESS");
    }
}

module.exports = burger;