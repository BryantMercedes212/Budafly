const db = require("../db/dbConfig.js");

const getTopScores = async () => {
  try {
    const topScores = await db.any(
      "SELECT * FROM scores ORDER BY score DESC LIMIT 3"
    );
    return topScores;
  } catch (error) {
    return error;
  }
};

const updateOne = async (id, scores) => {
  console.log("hitting");
  try {
    const updatedOne = await db.one(
      "UPDATE scores SET score=$2 WHERE id=$1 RETURNING * ",
      [id, scores]
    );
    console.log(updatedOne);
    return updatedOne;
  } catch (error) {
    return error;
  }
};

const createOne = async (score) => {
  console.log("added score");
  try {
    let { newScore } = score;
    const newOne = await db.one(
      "INSERT INTO scores (score) VALUES ($1) RETURNING * ",
      [newScore]
    );
    return newOne;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getTopScores,
  updateOne,
  createOne,
};
