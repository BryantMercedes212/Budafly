const jwt = require("jsonwebtoken");

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return response.status(401).json({ error: "Null token" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return response.status(401).json({ error: "Invalid token" });
    }
    request.user = user;

    next();
  });
}

module.exports = authenticateToken;
