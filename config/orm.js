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
    selectAll: async function(tableName, cb){

        let queryString = `SELECT * FROM ??`;
        let inserts = tableName;

            connection.query(queryString, inserts, (err, results) => {
                if (err) {
                    throw err
                }
                cb(results);
            }); 

        // console.log(`INSIDE ORM selectAll function\n`, results);
    },

    // Insert Method
    // insertOne: async function(tableName, cols, vals) {
    //     let queryString = `INSERT INTO ?? (??) VALUES (?)`;

    //     await new Promise((resolve, reject) => {
    //         connection.query(queryString, [tableName, cols, vals], (err, results) => {
    //             if (err) reject(err);
    //             resolve(results);
    //         }); 
    //     });  

    //     console.log("success");

    // },
        insertOne: async function(tableName, cols, vals, cb) {
            let queryString = `INSERT INTO ?? (??) VALUES (?)`;

            connection.query(queryString, [tableName, cols, vals], (err, results) => {
                if (err) {
                    throw err;
                }  
                cb(results);
            });  

            console.log("INSERT IN THE ORM --- success");
    },
    
    // Update Method
    // updateOne: async function(tableName, cols, vals) {
    //     let queryString = `UPDATE ?? SET ?? = 1 WHERE id = ?`;

    //     await new Promise((resolve, reject) => {
    //         connection.query(queryString, [tableName, cols, vals], (err, results) => {
    //             if (err) reject (err);
    //             resolve(results);
    //         });
    //     });

    //     console.log("success");
    // }
    updateOne: async function(tableName, cols, vals, cb) {
        let queryString = `UPDATE ?? SET ?? = 1 WHERE id = ?`;

        connection.query(queryString, [tableName, cols, vals], (err, results) => {
            if (err) reject (err);
            cb(results);
        });

        console.log("update success");
    }
}


module.exports = orm;