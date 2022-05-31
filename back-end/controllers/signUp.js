const express = require("express");
const signUp = express.Router();
const bcrypt = require("bcrypt");

const users = [];

signUp.get("/", async (request, response) => {
  console.log("GET request to /signUp");
  response.status(200).json("Hello signUp");
});

signUp.post("/", async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    users.push({
      id: Date.now().toString(),
      email: request.body.email,
      password: hashedPassword,
    });
    response.redirect("/login");
  } catch {
    response.redirect("/signUp");
  }
  console.log("GET request to /signUp");
  console.log(users);

  response.status(200).json("Hello signUp");
});

//Export
module.exports = signUp;

// const newProduct = await createOne(request.body);
