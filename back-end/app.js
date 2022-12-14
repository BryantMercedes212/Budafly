// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

// Products ROUTES
const productsController = require("./controllers/productsController");
app.use("/products", productsController);

// Users ROUTES
const userController = require("./controllers/userController");
app.use("/users", userController);

// Coupons ROUTES
const coupons = require("./controllers/coupons");
app.use("/coupons", coupons);

const scores = require("./controllers/scores");
app.use("/scores", scores);

// 404 Page
app.get("*", (request, response) => {
  response.status(404).send("Page not found");
});

//Export
module.exports = app;
