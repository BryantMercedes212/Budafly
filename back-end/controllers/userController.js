const express = require("express");
const users = express.Router();
const {
  getAllSellers,
  getOneSeller,
  getListedProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require("../queries/users");

const productsController = require("./productsController");
users.use("/:user_id/productsController", productsController);

users.get("/", async (req, res) => {
  const users = await getAllSellers();

  res.status(200).json(users);
});

users.get("/:user_id", async (request, response) => {
  const { user_id } = request.params;
  const oneSeller = await getOneSeller(user_id);

  response.status(200).json(oneSeller);
});

// GET an individual seller's products only

users.get("/:user_id/products", async (request, response) => {
  const { user_id } = request.params;
  const allProducts = await getListedProducts(user_id);

  response.status(200).json(allProducts);
});

// single product (seller view)
users.get("/:user_id/products/:id", async (request, response) => {
  const { id } = request.params;
  const oneProduct = await getOneProduct(id);

  response.status(200).json(oneProduct);
});

// list a new product (seller)
users.post("/:user_id/products", async (request, response) => {
  const newProduct = await createOneProduct(request.body);

  response.status(200).json(newProduct);
});

// update a product (seller)
users.put("/:user_id/products/:id", async (request, response) => {
  const updatedProduct = await updateOneProduct(
    request.params.id,
    request.body
  );

  response.status(200).json(updatedProduct);
});

// delete a product (seller)
users.delete("/:user_id/products/:id", async (request, response) => {
  const { id } = request.params;
  const product = await deleteOneProduct(id);
  if (product) {
    response.status(200).json(product);
  } else {
    response
      .status(404)
      .json({ error: `product with id of ${id} could not be deleted` });
  }
});

module.exports = users;
