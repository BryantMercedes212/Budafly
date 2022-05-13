// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

// Middleware
app.use(express.json());

// Products ROUTES
const productsController = require("./controllers/productsController.js");
app.use("/products", productsController);

// 404 Page
app.get("*", (request, response) => {
    response.status(404).send("Page not found")
});

//Export
module.exports = app; 