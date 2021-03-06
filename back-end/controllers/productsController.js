// Dependencies
const { request } = require("express");
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
const products = express.Router({mergeParams: true });

// GET all products buyer's view
//localhost:3333/products
products.get("/", async (request, response) => {
  console.log("GET request to /products");

  const allProducts = await getAllProducts();
  console.log(allProducts);
  response.status(200).json(allProducts);
});

// GET single product by product's id
products.get("/:id", async (request, response) => {
  console.log("GET request to /products/:id");
  const { id } = request.params;
  const oneProduct = await getOne(id);
  console.log(oneProduct);
  response.status(200).json(oneProduct);
});

// GET single product by name (search bar)
products.get("/search/:name", async (request, response) => {
  console.log("GET request to /products/:name");
  const { name } = request.params;
  console.log(name);
  const oneProduct = await getOneByName(name);
  console.log(oneProduct);
  response.status(200).json(oneProduct);
});

//POST a product
products.post("/", async (request, response) => {
  console.log("POST request to /products");
  const newProduct = await createOne(request.body);
  console.log(newProduct);
  response.status(200).json(newProduct);
});

// DELETE a product
products.delete("/:id", async (request, response) => {
  console.log("DELETE request to /products/:id");
  const deletedProduct = await deleteOne(request.params.id);
  console.log(deletedProduct);
  response.status(200).json(deletedProduct);
});

// UPDATE a product
products.put("/:id", async (request, response) => {
  console.log("PUT request to /products/:id");

  const updatedProduct = await updateOne(request.params.id, request.body);
  console.log(updatedProduct);
  response.status(200).json(updatedProduct);
});

//Export
module.exports = products;
