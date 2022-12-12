const express = require("express");
const users = express.Router();
const bcrypt = require("bcrypt");
const {
  getAllSellers,
  getOneSeller,
  getListedProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
  createNewSeller,
  getOneSellerByEmail,
} = require("../queries/users");
const jwtTokens = require("../utils/jwt-helpers");

const productsController = require("./productsController");
users.use("/:user_id/productsController", productsController);

users.get("/", async (req, res) => {
  const users = await getAllSellers();

  res.status(200).json(users);
});

users.post("/newuser", async (request, response) => {
  console.log("post newuser");
  const newSeller = await createNewSeller(request.body);
  console.log(newSeller);
  if (newSeller.status) {
    response.status(200).json(newSeller);
  } else if (newSeller) {
    let data = jwtTokens(newSeller);
    response.status(200).json(data);
  }
});

users.post("/login", async (request, response) => {
  let { email, password } = request.body;

  const seller = await getOneSellerByEmail(email);

  if (!seller) {
    response.status(401).json({ error: "email is not correct" });
    return;
  }

  const validPassword = await bcrypt.compare(password, seller.password);
  if (!validPassword) {
    response.status(401).send({ error: "Invalid password" });
    return;
  }

  if (seller && validPassword) {
    let data = jwtTokens(seller);
    response.status(200).json(data);
  }
});

router.get("/authenticate", async (req, res) => {
  try {
    console.log(req.headers);

    console.log(accessToken);
    res.send({});
  } catch (error) {
    res.send("error");
  }
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
