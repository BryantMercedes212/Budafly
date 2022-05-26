const express = require("express");
const users = express.Router();
const { getAllSellers, addNewSeller } = require("../queries/users");

const productsController = require("./productsController");
users.use("/:seller_id/productsController", productsController);

users.get("/", async (req, res) => {
  const users = await getAllSellers();
  console.log(users);
  res.status(200).json(users);
});

users.post("/new", async (req, res) => {
  const newUser = req.body;
  const users = await addNewSeller(newUser);
  res.status(200).json(users);
});

// GET an individual seller's products only
// localhost:3333/users/:user_id/products
users.get("/:user_id/products", async (req, res) => {
  console.log("GET request to /products/:user_id");
  const { user_id } = req.params;

  const allProducts = await getAllSaleProducts(user_id);
  console.log(allProducts);
  res.status(200).json(allProducts);
});

users.get("/:user_id/products/:id", async (request, response) => {
  console.log("GET request to /products/:id");

  const { id } = request.params;
  const oneProduct = await getOne(id);
  console.log(oneProduct);
  response.status(200).json(oneProduct);
});

// ** test with both '/:user_id/products/new' and just the '/:user_id/products/'
users.post("/:user_id/products", async (request, response) => {
  console.log("POST request to /products");
 
  const newProduct = await createOne(request.body);
  console.log(newProduct);
  response.status(200).json(newProduct);
});

users.delete("/user_id/products/:id", async (request, response) => {
  console.log("DELETE request to /products/:id");

  const deletedProduct = await deleteOne(request.params.id);
  console.log(deletedProduct);
  response.status(200).json(deletedProduct);
});

// ** test with both '/:user_id/products/edit' and just the '/:user_id/products/'
users.put("/:user_id/products/:id", async (request, response) => {
  console.log("PUT request to /products/:id");

  const updatedProduct = await updateOne(request.params.id, request.body);
  console.log(updatedProduct);
  response.status(200).json(updatedProduct);
});


users.delete("/:user_id/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await deleteProduct(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res
      .status(404)
      .json({ error: `product with id of ${id} could not be deleted` });
  }
});

module.exports = users;
