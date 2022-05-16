// Dependencies
const dotenv = require("dotenv");

// Pull in app.js
const app = require("./app.js");

// Configuration!
dotenv.config();
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});