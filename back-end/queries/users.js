const database = require("../db/dbConfig");

const getAllSellers = async () => {
  try {
    const sellers = await database.any("SELECT * FROM users");
    return sellers;
  } catch (err) {
    return err;
  }
};

const addNewSeller = async (newSeller) => {
  try {
    const sellers = await database.any(
      "INSERT INTO users (firstname, lastname, email, phone_number) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        newSeller.firstname,
        newSeller.lastname,
        newSeller.email,
        newSeller.phone_number,
      ]
    );
    return sellers;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSellers,
  addNewSeller,
};