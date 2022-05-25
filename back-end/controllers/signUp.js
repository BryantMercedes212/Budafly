const express = require("express");
const singUp = express.Router();

singUp.get("/", async (request, response) => {
  console.log("GET request to /signUp");
  response.status(200).json("Hello signUp");
});

//Export
module.exports = singUp;
