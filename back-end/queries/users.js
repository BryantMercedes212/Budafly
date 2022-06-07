const db = require("../db/dbConfig");

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

// const addNewSeller = async (newSeller) => {
//   try {
//     const sellers = await database.any(
//       "INSERT INTO users (firstname, lastname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
//       [
//         newSeller.firstname,
//         newSeller.lastname,
//         newSeller.email,
//         newSeller.phone_number,
//       ]
//     );
//     return sellers;
//   } catch (error) {
//     return error;
//   }
// };

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
};
