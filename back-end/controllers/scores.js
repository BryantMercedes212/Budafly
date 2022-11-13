const express = require("express");

const { updateOne, createOne, getTopScores } = require("../queries/scores");

const scores = express.Router({ mergeParams: true });

scores.get("/", async (request, response) => {
  console.log("GET request to /scores");

  const allScores = await getTopScores();

  response.status(200).json(allScores);
});

scores.put("/:id", async (request, response) => {
  console.log("PUT request to /scores/:id", request.params.id, request.body);

  const updatedProduct = await updateOne(
    request.params.id,
    request.body.newScore
  );
  console.log(updatedProduct);

  response.status(200).json(updatedProduct);
});

scores.post("/", async (request, response) => {
  console.log("POST request to /scores", request.body);
  const newProduct = await createOne(request.body);

  response.status(200).json(newProduct);
});

module.exports = scores;
