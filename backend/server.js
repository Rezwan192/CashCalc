const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./mongoDB/connectDatabase.js");
const userRoutes = require("./mongoDB/userRoutes.js");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(cookieParser());
app.use(express.json()); // This line is enough to parse JSON in the request body
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data
connectDatabase(); // Connects the server to MongoDB

// app.use("/userPasswords", testRoutes); // Test route to display data (for auth testing purposes, will remove later)
app.use("/cashcalc", userRoutes); // Routes defined in userRoutes.js
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
