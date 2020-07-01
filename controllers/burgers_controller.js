const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Route to get all burgers
router.get("/", (req, res) => {
    console.log('------- HIT "/" route! ----------');

    burger.selectAllBurgers((burgerData) => {

        console.log(`------- Got All the Burgers ---------`);

        let burgers = burgerData.map(({ burger_name, id, devoured }) => ({
            burger_name: burger_name,
            id: id,
            devoured: devoured
        }));

        let burgerObject = { burgers: burgers };
        console.log("This is burgers in selectAllburgers: ", burgers);
        res.render("index", burgerObject);
    });
});

// Route to create a new burger
router.post("/api/new", (req, res) => {

    let burgerName = req.body.burger_name;

    burger.insertBurger(burgerName, (result) => {
        console.log("post result: ", result);

        res.json( { id: result.insertId } );
    });
});

// Route to find one specific burger that will be updated
router.put("/api/burgers/:id", (req, res) => {
    let devouredID = req.params.id;

    burger.updateBurger(devouredID, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
    console.log(devouredID, " has been devoured");

});

module.exports = router;