// Dependencies
const express = require("express");

const {
  getAllProducts,
  getOne,
  createOne,
  deleteOne,
  updateOne,
  getOneByName,
} = require("../queries/products");

// Configuration
const products = express.Router({ mergeParams: true });

// GET all products buyer's view
products.get("/", async (request, response) => {
  const allProducts = await getAllProducts();

  response.status(200).json(allProducts);
});

// GET single product by product's id
products.get("/:id", async (request, response) => {
  const { id } = request.params;
  const oneProduct = await getOne(id);

  response.status(200).json(oneProduct);
});

// GET single product by name (search bar)
products.get("/search/:name", async (request, response) => {
  const { name } = request.params;
  const oneProduct = await getOneByName(name);

  response.status(200).json(oneProduct);
});

//POST a product
products.post("/", async (request, response) => {
  const newProduct = await createOne(request.body);

  response.status(200).json(newProduct);
});

// DELETE a product
products.delete("/:id", async (request, response) => {
  const deletedProduct = await deleteOne(request.params.id);

  response.status(200).json(deletedProduct);
});

// UPDATE a product
products.put("/:id", async (request, response) => {
  const updatedProduct = await updateOne(request.params.id, request.body);

  response.status(200).json(updatedProduct);
});

//Export
module.exports = products;
