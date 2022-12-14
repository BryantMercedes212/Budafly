const jwt = require("jsonwebtoken");

function jwtTokens({ id, firstname, email }) {
  const user = { id, firstname, email };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });

  return { accessToken, refreshToken };
}

module.exports = jwtTokens;
