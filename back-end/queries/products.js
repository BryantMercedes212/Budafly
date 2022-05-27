const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    console.log(allProducts);
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const one = await db.one("SELECT * FROM products WHERE id=$1", id);
    return one;
  } catch (error) {
    return error;
  }
};

const getOneByName = async (name) => {
  console.log(name);
  try {
    const one = await db.one("SELECT * FROM products WHERE name=$1 ", name);
    return one;
  } catch (error) {
    return error;
  }
};

const createOne = async (product) => {
  try {
    let { name, description, price, image } = product;
    const newOne = await db.one(
      "INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING * ",
      [name, description, price, image]
    );
    return newOne;
  } catch (error) {
    return error;
  }
};

const deleteOne = async (id) => {
  try {
    const deletedOne = await db.one(
      "DELETE FROM products WHERE ID=$1 RETURNING *",
      id
    );
    return deletedOne;
  } catch (error) {
    return error;
  }
};

const updateOne = async (id, product) => {
  try {
    let { name, description, price, image } = product;
    const updatedOne = await db.one(
      "UPDATE products SET name=$2, description=$3, price=$4, image=$5 WHERE id=$1 RETURNING *",
      [id, name, description, price, image]
    );
    return updatedOne;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getOne,
  createOne,
  deleteOne,
  updateOne,
  getOneByName,
};
