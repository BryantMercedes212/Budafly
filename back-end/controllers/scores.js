const express = require("express");

const { updateOne, createOne, getTopScores } = require("../queries/scores");

const scores = express.Router({ mergeParams: true });

scores.get("/", async (request, response) => {
  const allScores = await getTopScores();

  response.status(200).json(allScores);
});

scores.put("/:id", async (request, response) => {
  const updatedProduct = await updateOne(
    request.params.id,
    request.body.newScore
  );

  response.status(200).json(updatedProduct);
});

scores.post("/", async (request, response) => {
  const newProduct = await createOne(request.body);

  response.status(200).json(newProduct);
});

module.exports = scores;
