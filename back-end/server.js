// Dependencies
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Pull in app.js
const app = require("./app.js");

// Configuration!
dotenv.config();
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
