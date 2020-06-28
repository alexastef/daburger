const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Route to get all burgers
router.get("/", (req, res) => {

});

// Route to create a new burger
router.post("/new", (req, res) => {

});

// Route to find one specific burger
router.get("/api/find/:id", (req, res) => {

});

module.exports = router;