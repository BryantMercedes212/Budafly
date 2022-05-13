// Dependencies
const express = require("express");

// Configuration
const products = express.Router();

// GET
products.get("/", (_, response) => {

    console.log("GET request to /products");

    response.status(200).json({status: "ok"});
});

//Export
module.exports = events;