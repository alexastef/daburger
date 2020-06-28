const connection = require("../config/connection.js");
const { response } = require("express");

function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

const orm = {
    // Select Method
    selectAll: async function(tableName){
        let queryString = `SELECT * FROM ??`;
        let inserts = tableName;

        let returnValue = await new Promise((resolve, reject) => {
            connection.query(queryString, inserts, (err, results) => {
                if (err) reject(err);
                resolve(results);
            }); 
        })

        return returnValue;
    },

    // Insert Method
    insertOne: async function(tableName, cols, vals) {
        let queryString = `INSERT INTO ?? (??) VALUES (?)`;

        await new Promise((resolve, reject) => {
            connection.query(queryString, [tableName, cols, vals], (err, results) => {
                if (err) reject(err);
                resolve(results);
            }); 
        });  

        console.log("success");

    },

    // Update Method
    updateOne: async function(tableName, cols, vals) {
        let queryString = `UPDATE ?? SET ?? = 1 WHERE id = ?`;

        await new Promise((resolve, reject) => {
            connection.query(queryString, [tableName, cols, vals], (err, results) => {
                if (err) reject (err);
                resolve(results);
            });
        });

        console.log("success");
    }
}


module.exports = orm;