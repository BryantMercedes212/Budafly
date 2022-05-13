// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

app.get("*", (request, response) => {
    response.status(404).send("Page not found")
});

//Export
module.exports = app; 