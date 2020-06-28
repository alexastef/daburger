const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Route to get all burgers
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        let burgerObject = { burgers: data };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

// Route to create a new burger
router.post("/api/new", (req, res) => {
    burger.insertOne(req.body, (result) => {
        console.log("post result: ", result);
        res.json({ id: result.id });
    });
});

// Route to find one specific burger
router.put("/api/burgers/:id", (req, res) => {
    let devouredID = req.params.id;

    console.log(devouredID, " has been devoured");

    burger.updateOne({ burger_name: req.body.burger_name, id: devouredID}, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;