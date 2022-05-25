// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

// Products ROUTES
const productsController = require("./controllers/productsController.js");
app.use("/products", productsController);

//  Login ROUTES
const login = require("./controllers/login.js");
app.use("/login", login);

// 404 Page
app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

//Export
module.exports = app;
