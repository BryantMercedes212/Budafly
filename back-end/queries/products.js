const db = require("../db/dbConfig.js");

const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products]");
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

  module.exports = {
    getAllProducts,
    getOne,
  };