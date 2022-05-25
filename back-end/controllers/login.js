const express = require("express");
const login = express.Router();

login.get("/", async (request, response) => {
  console.log("GET request to /login");
  response.status(200).json("Hello");
});

//Export
module.exports = login;
