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
  console.log(users);
  res.status(200).json(users);
});


// users.post("/new", async (req, res) => {
//   const newUser = req.body;
//   const users = await addNewSeller(newUser);
//   res.status(200).json(users);
// });

users.get("/:user_id", async (request, response) => {
    console.log("GET request to /:user_id");
    const { user_id } = request.params;
    const oneSeller = await getOneSeller(user_id);
    console.log(oneSeller);
    response.status(200).json(oneSeller);
  });

// GET an individual seller's products only
// localhost:3333/users/:user_id/products
users.get("/:user_id/products", async (request, response) => {
  console.log("GET request to /products/:user_id");
  const { user_id } = request.params;
  const allProducts = await getListedProducts(user_id);
  console.log(allProducts);
  response.status(200).json(allProducts);
});

// single product (seller view)
users.get("/:user_id/products/:id", async (request, response) => {
  console.log("GET request to /users/1/products/4");
  const { id } = request.params;
  const oneProduct = await getOneProduct(id);
  console.log(oneProduct);
  response.status(200).json(oneProduct);
});

// list a new product (seller)
users.post("/:user_id/products", async (request, response) => {
  console.log("POST request to /products");
  const newProduct = await createOneProduct(request.body);
  console.log(newProduct);
  response.status(200).json(newProduct);
});


// users.delete("/user_id/products/:id", async (request, response) => {
//   console.log("DELETE request to /products/:id");

//   const deletedProduct = await deleteOneProduct(request.params.id);
//   console.log(deletedProduct);
//   response.status(200).json(deletedProduct);
// });


// update a product (seller)
users.put("/:user_id/products/:id", async (request, response) => {
  console.log("PUT request to /products/:id");
  const updatedProduct = await updateOneProduct(
    request.params.id,
    request.body
  );
  console.log(updatedProduct);
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
