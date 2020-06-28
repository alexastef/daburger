const connection = require("../config/connection.js");

const orm = {
    // select method
    selectAll: function(cb){
        connection.query("SELECT*FROM burgers;", (err, results) => {
            if (err) console.log("Ut oh! Couldn't connect to server");
            cb(results)
        }); 
    },

    // insert method
    insertOne: function(newBurger, ){
        let query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        let inserts = [newBurger.burger, newBurger.devoured];
        
        connection.query(query, inserts, (err, results) => {
            if (err) console.log("There was an error adding your burger");
            cb(results);
        })
    },

    // update method
    // updateOne: function(){

    // }
}


module.exports = orm;