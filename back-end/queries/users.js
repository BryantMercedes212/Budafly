const db = require("../db/dbConfig");
const bcrypt = require("bcrypt");

const getAllSellers = async () => {
  try {
    const sellers = await db.any("SELECT * FROM users");
    return sellers;
  } catch (err) {
    return err;
  }
};

const getOneSeller = async (id) => {
  try {
    const seller = await db.one("SELECT * FROM users WHERE user_id=$1", id);
    return seller;
  } catch (err) {
    return err;
  }
};

const getOneSellerByEmail = async (email) => {
  try {
    const seller = await db.one("SELECT * FROM users WHERE email=$1 ", [email]);
    return seller;
  } catch (err) {
    return err;
  }
};

const createNewSeller = async (user) => {
  const { firstName, lastName, email, password } = user;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const lowerCasedEmail = email.toLowerCase();
    if (firstName.length < 3) {
      throw { error: "First name must be 4 chars or more" };
    }

    const seller = await db.one(
      "INSERT INTO users (firstname, lastname, email, password) values ($1, $2, $3, $4) RETURNING user_id, firstname, email",
      [firstName, lastName, lowerCasedEmail, hashedPassword]
    );
    return seller;
  } catch (err) {
    return { status: "error", message: err.message };
  }
};

const getListedProducts = async (id) => {
  try {
    const allProducts = await db.any(
      "SELECT * FROM products WHERE user_id=$1",
      id
    );
    console.log(allProducts);
    return allProducts;
  } catch (error) {
    return error;
  }
};

const getOneProduct = async (id) => {
  try {
    const one = await db.one("SELECT * FROM products WHERE id=$1", id);
    return one;
  } catch (error) {
    return error;
  }
};

const createOneProduct = async (product) => {
  try {
    let {
      name,
      cannabinoid,
      type,
      description,
      feelings,
      negatives,
      price,
      image,
      user_id,
    } = product;
    const newOne = await db.one(
      "INSERT INTO products (name, cannabinoid, type, description, feelings, negatives, price, image, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
      [
        name,
        cannabinoid,
        type,
        description,
        feelings,
        negatives,
        price,
        image,
        user_id,
      ]
    );
    return newOne;
  } catch (error) {
    return error;
  }
};

const updateOneProduct = async (id, product) => {
  try {
    let {
      name,
      cannabinoid,
      type,
      description,
      feelings,
      negatives,
      price,
      image,
    } = product;
    const updatedOne = await db.one(
      "UPDATE products SET name=$2, cannabinoid=$3, type=$4, description=$5, feelings=$6, negatives=$7, price=$8, image=$9 WHERE id=$1 RETURNING *",
      [
        id,
        name,
        cannabinoid,
        type,
        description,
        feelings,
        negatives,
        price,
        image,
      ]
    );
    return updatedOne;
  } catch (error) {
    return error;
  }
};

const deleteOneProduct = async (id) => {
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

module.exports = {
  getAllSellers,
  getOneSeller,
  getListedProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
  createNewSeller,
  getOneSellerByEmail,
};
